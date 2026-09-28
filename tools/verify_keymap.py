#!/usr/bin/env python3
"""
Verify the cheat sheet against Blender's own default keymap and manual index.

The script downloads two files from the official Blender source mirror for the
target release branch (no Blender installation needed):

  * scripts/presets/keyconfig/keymap_data/blender_default.py
      - the generator of the default keymap
  * scripts/modules/_rna_manual_reference.py
      - the operator -> manual page mapping used by Blender's "Online Manual"

It then generates the keymap with Blender's default preferences
(left-click select, Spacebar = Play, ...) and checks every item in
assets/data.js that declares an operator ("op"):

  * the item's keys really trigger that operator (optionally with properties),
  * the manual link ("doc") points to a page that exists in that version.

Usage:
  python3 tools/verify_keymap.py                 # verify against 5.2
  python3 tools/verify_keymap.py --version 5.3   # check a newer release
  python3 tools/verify_keymap.py --fill-docs     # add missing manual links
  python3 tools/verify_keymap.py --dump km.txt   # write the full keymap

Exit code is non-zero when a check fails, so it can run in CI.
"""

import argparse
import importlib.util
import json
import os
import re
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JS = os.path.join(ROOT, "assets", "data.js")
DATA_PREFIX = "window.KB_DATA = "
RAW = "https://raw.githubusercontent.com/blender/blender/blender-v{ver}-release/"
FILES = {
    "blender_default.py": "scripts/presets/keyconfig/keymap_data/blender_default.py",
    "_rna_manual_reference.py": "scripts/modules/_rna_manual_reference.py",
}

# Token used in data.js -> Blender event type(s).
KEY_TYPES = {
    "Tab": ["TAB"], "Space": ["SPACE"], "Enter": ["RET", "NUMPAD_ENTER"], "Esc": ["ESC"],
    "Del": ["DEL"], "Backspace": ["BACK_SPACE"], "Home": ["HOME"], "End": ["END"],
    "PgUp": ["PAGE_UP"], "PgDn": ["PAGE_DOWN"], "Up": ["UP_ARROW"], "Down": ["DOWN_ARROW"],
    "Left": ["LEFT_ARROW"], "Right": ["RIGHT_ARROW"],
    "NumDot": ["NUMPAD_PERIOD"], "NumPlus": ["NUMPAD_PLUS"], "NumMinus": ["NUMPAD_MINUS"],
    "NumSlash": ["NUMPAD_SLASH"], "NumStar": ["NUMPAD_ASTERIX"], "NumEnter": ["NUMPAD_ENTER"],
    "Grave": ["ACCENT_GRAVE"], "Comma": ["COMMA"], "Period": ["PERIOD"], "Slash": ["SLASH"],
    "LBracket": ["LEFT_BRACKET"], "RBracket": ["RIGHT_BRACKET"], "Minus": ["MINUS"],
    "Equal": ["EQUAL"],
    "LMB": ["LEFTMOUSE"], "RMB": ["RIGHTMOUSE"], "MMB": ["MIDDLEMOUSE"],
    "Wheel": ["WHEELUPMOUSE", "WHEELDOWNMOUSE", "WHEELINMOUSE", "WHEELOUTMOUSE"],
    # A lone modifier (e.g. "hold Ctrl" inside a modal tool).
    "Ctrl": ["LEFT_CTRL", "RIGHT_CTRL"], "Shift": ["LEFT_SHIFT", "RIGHT_SHIFT"],
    "Alt": ["LEFT_ALT", "RIGHT_ALT"],
}
DIGITS = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"]
MODIFIERS = ("Ctrl", "Shift", "Alt")
# Generic operators whose manual page says nothing about the actual action.
GENERIC_OPS = ("wm.call_menu", "wm.call_panel", "wm.context_", "wm.tool_set", "wm.radial_control",
               "wm.call_asset_shelf")
# Keys that are not real events (typed numbers etc.) are never verified.
UNVERIFIABLE = {"0-9"}


def fetch(ver, cache):
    os.makedirs(cache, exist_ok=True)
    paths = {}
    for name, rel in FILES.items():
        path = os.path.join(cache, name)
        if not os.path.exists(path):
            url = RAW.format(ver=ver) + rel
            print(f"  downloading {url}")
            with urllib.request.urlopen(url, timeout=60) as r:
                data = r.read()
            with open(path, "wb") as f:
                f.write(data)
        paths[name] = path
    return paths


def load_module(path, name):
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def default_keymap(path):
    """Generate the keymap exactly like Blender does with default preferences."""
    bd = load_module(path, "blender_default")
    params = bd.Params(
        select_mouse="LEFT",
        spacebar_action="PLAY",
        use_gizmo_drag=True,
        use_fallback_tool=True,
        use_fallback_tool_select_handled=False,
        use_alt_navigation=True,
    )
    return bd.generate_keymaps(params)


def manual_index(path):
    src = open(path, encoding="utf-8").read()
    pairs = re.findall(r'\("([^"]+)",\s*"([^"]+)"\)', src)
    pages = {url.split("#")[0] for _, url in pairs}
    return pairs, pages


def manual_for_op(pairs, op):
    key = "bpy.ops." + op
    best = None
    for pat, url in pairs:
        p = pat.rstrip("*")
        ok = key.startswith(p) if pat.endswith("*") else key == p
        # Only accept operator-specific matches, not a generic module page.
        if ok and p.count(".") >= 3 and (best is None or len(p) > len(best[0])):
            best = (p, url)
    return best[1] if best else None


# ---------------------------------------------------------------- data.js I/O

def read_data():
    src = open(DATA_JS, encoding="utf-8").read().strip()
    if not src.startswith(DATA_PREFIX):
        sys.exit(f"{DATA_JS}: expected to start with '{DATA_PREFIX}'")
    return json.loads(src[len(DATA_PREFIX):].rstrip(";"))


def dumps_compact(obj):
    return json.dumps(obj, ensure_ascii=False, separators=(", ", ": "))


def write_data(data):
    """Stable, diff-friendly formatting: one shortcut per line."""
    out = [DATA_PREFIX + "{"]
    keys = list(data.keys())
    for i, k in enumerate(keys):
        comma = "," if i < len(keys) - 1 else ""
        if k != "categories":
            if isinstance(data[k], list):
                out.append(f'  "{k}": [')
                for j, e in enumerate(data[k]):
                    out.append("    " + dumps_compact(e) + ("," if j < len(data[k]) - 1 else ""))
                out.append("  ]" + comma)
            else:
                out.append(f'  "{k}": ' + dumps_compact(data[k]) + comma)
            continue
        out.append('  "categories": [')
        cats = data[k]
        for ci, cat in enumerate(cats):
            out.append("    {")
            ckeys = [ck for ck in cat if ck != "groups"]
            for ck in ckeys:
                out.append(f'      "{ck}": ' + dumps_compact(cat[ck]) + ",")
            out.append('      "groups": [')
            for gi, g in enumerate(cat["groups"]):
                out.append("        {")
                for gk in g:
                    if gk != "items":
                        out.append(f'          "{gk}": ' + dumps_compact(g[gk]) + ",")
                out.append('          "items": [')
                for ii, it in enumerate(g["items"]):
                    out.append("            " + dumps_compact(it) + ("," if ii < len(g["items"]) - 1 else ""))
                out.append("          ]")
                out.append("        }" + ("," if gi < len(cat["groups"]) - 1 else ""))
            out.append("      ]")
            out.append("    }" + ("," if ci < len(cats) - 1 else ""))
        out.append("  ]" + comma)
    out.append("};")
    with open(DATA_JS, "w", encoding="utf-8") as f:
        f.write("\n".join(out) + "\n")


# ------------------------------------------------------------ key matching

def parse_chord(chord):
    """'Ctrl+Shift+RMB-Drag' -> (types, mods, value)"""
    tokens = chord.split("+")
    mods = {m.lower(): False for m in MODIFIERS}
    main = None
    for i, t in enumerate(tokens):
        if t in MODIFIERS and i < len(tokens) - 1:
            mods[t.lower()] = True
        else:
            main = t
    value = None
    if main.endswith("-Drag"):
        # Drag operators start either on click-drag or on press (modal ones).
        main, value = main[:-5], ("CLICK_DRAG", "PRESS")
    if main.startswith("2x"):
        main, value = main[2:], ("DOUBLE_CLICK",)
    if main in UNVERIFIABLE:
        return None
    if main in KEY_TYPES:
        types = KEY_TYPES[main]
    elif len(main) == 1 and main.isdigit():
        types = [DIGITS[int(main)]]
    elif re.fullmatch(r"Num[0-9]", main):
        types = ["NUMPAD_" + main[3]]
    elif re.fullmatch(r"F[0-9]{1,2}", main) or re.fullmatch(r"[A-Z]", main):
        types = [main]
    else:
        raise ValueError(f"unknown key token {main!r} in {chord!r}")
    return types, mods, value


def event_matches(ev, types, mods, value):
    if ev.get("type") not in types:
        return False
    if value and ev.get("value") not in value:
        return False
    if ev.get("any"):
        return True
    for m, want in mods.items():
        have = ev.get(m, False)
        if have == -1:
            continue
        if bool(have) != want:
            return False
    return True


def props_match(item_props, want):
    if not want:
        return True
    have = {}
    if item_props and item_props.get("properties"):
        have = {k: v for k, v, *_ in item_props["properties"]}
    return all(have.get(k) == v for k, v in want.items())


def index_keymap(keymap):
    by_name = {}
    for name, _params, data in keymap:
        by_name.setdefault(name, []).extend(data.get("items", []))
    return by_name


def check_item(it, km_index):
    """Return None when OK, or an error string."""
    ops = it["op"] if isinstance(it["op"], list) else None
    alts = it["k"].split("|")
    props = it.get("p")
    maps = [it["km"]] if it.get("km") else list(km_index)
    for ai, alt in enumerate(alts):
        op = ops[ai] if ops else it["op"]
        # A dict of properties applies to the first alternative, a list to each one.
        want = props[ai] if isinstance(props, list) else (props if ai == 0 else None)
        parsed = parse_chord(alt.split(" ")[0])
        if parsed is None:
            continue
        types, mods, value = parsed
        found = False
        for km in maps:
            for entry in km_index.get(km, []):
                eop, ev, eprops = entry
                if eop == op and event_matches(ev, types, mods, value) and props_match(eprops, want):
                    found = True
                    break
            if found:
                break
        if not found:
            where = f" in '{it['km']}'" if it.get("km") else ""
            return f"'{alt}' does not trigger {op}{' ' + json.dumps(want) if want else ''}{where}"
    return None


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--version", default=None, help="Blender release, e.g. 5.2 (default: meta.blender in data.js)")
    ap.add_argument("--cache", default=None, help="download cache directory")
    ap.add_argument("--fill-docs", action="store_true", help="add manual links to items that have an operator but no link")
    ap.add_argument("--dump", metavar="FILE", help="write the full generated keymap to FILE")
    args = ap.parse_args()

    data = read_data()
    ver = args.version or data["meta"]["blender"]
    cache = args.cache or os.path.join(ROOT, ".cache", f"blender-{ver}")
    print(f"Blender {ver}: fetching sources")
    paths = fetch(ver, cache)
    keymap = default_keymap(paths["blender_default.py"])
    km_index = index_keymap(keymap)
    pairs, pages = manual_index(paths["_rna_manual_reference.py"])

    if args.dump:
        with open(args.dump, "w", encoding="utf-8") as f:
            for name, items in km_index.items():
                f.write(f"\n=== {name}\n")
                for op, ev, props in items:
                    f.write(f"  {ev}  {op}  {props or ''}\n")
        print(f"keymap written to {args.dump}")

    errors, verified, hardcoded, unverified, filled = [], 0, 0, [], 0
    seen = set()
    for cat in data["categories"]:
        for g in cat["groups"]:
            for it in g["items"]:
                label = f"[{cat['id']}] {it['k']} — {it['en']}"
                ident = (cat["id"], it["k"], it["en"])
                if ident in seen:
                    errors.append(f"{label}: duplicate entry")
                seen.add(ident)
                try:
                    if it.get("op"):
                        err = check_item(it, km_index)
                        if err:
                            errors.append(f"{label}: {err}")
                        else:
                            verified += 1
                    elif it.get("hc"):
                        for alt in it["k"].split("|"):
                            for chord in alt.split(" "):
                                parse_chord(chord)  # still validates the tokens
                        hardcoded += 1
                    else:
                        unverified.append(label)
                except ValueError as ex:
                    errors.append(f"{label}: {ex}")

                op = it.get("op")
                op = op[0] if isinstance(op, list) else op
                if args.fill_docs and not it.get("doc") and op and "." in op \
                        and not op.startswith(GENERIC_OPS):
                    url = manual_for_op(pairs, op)
                    if url:
                        it["doc"] = url
                        filled += 1
                doc = it.get("doc")
                if doc and doc.split("#")[0] not in pages:
                    errors.append(f"{label}: manual page '{doc}' not found in Blender {ver} manual index")

    if args.fill_docs:
        write_data(data)
        print(f"added {filled} manual links")

    total = verified + hardcoded + len(unverified)
    print(f"\n{total} shortcuts: {verified} verified against the {ver} keymap, "
          f"{hardcoded} built-in UI behaviours (not in the keymap), {len(unverified)} unverified")
    for u in unverified:
        print(f"  ? {u}")
    if errors:
        print(f"\n{len(errors)} problem(s):")
        for e in errors:
            print(f"  ✗ {e}")
        sys.exit(1)
    print("All checks passed ✓")


if __name__ == "__main__":
    main()
