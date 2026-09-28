# Blender 5.2 Shortcuts — Cheat Sheet

An interactive Blender keyboard shortcut cheat sheet built for **learning**: keep it open on a second screen while you work in Blender and absorb professional habits without memorising everything up front.

- **471 shortcuts** in 18 categories covering modes and editors, including a *Help, I'm stuck!* section with fixes for classic beginner problems.
- **Up to date with Blender 5.2 LTS.** 463 shortcuts are **checked automatically against the default keymap in Blender's own source code** (`blender-v5.2-release`); the other 8 are built-in interface behaviours that don't live in the keymap (such as Ctrl+C over a field).
- **English + Polish.** Show EN, PL or both. Search works in either language, with or without Polish diacritics.

Plain static files: no build step, no dependencies. Opening `index.html` straight from disk works too.

## Features for learners

| | |
|---|---|
| 🎯 **Levels** | Every shortcut is tagged *Start* (first days), *Core* (everyday) or *Pro*. Filter with the level switch in the toolbar. |
| 🚀 **Start here** | Four habits to master first: navigation, select & transform, add & edit, “when in doubt”. |
| 🆘 **Help, I'm stuck!** | Problem → key: object vanished, everything is see-through, black faces, stretched bevels… |
| 💡 **Pro tips** | Workflow tips in every category, plus hints under individual shortcuts. |
| ✅ **Progress** | Mark shortcuts as learned. Progress is shown per category and overall, and you can hide what you already know. |
| ★ **My sheet** | Pin shortcuts to build a small personal sheet for the current project. |
| 🎴 **Flashcards** | Quiz yourself on the current view: action → keys or keys → action. “Knew it” marks the card as learned. |
| 🔍 **Smart search** | Search by words (`bevel`, `węzeł`) or by keys (`ctrl b`, `shift+d`, `num 5`, `g`). |
| ⌨️ **Windows / Linux / macOS** | On macOS, keys are shown as ⌘ / ⌥ / ⇧, following Blender's own Ctrl→Cmd rules (for example, Ctrl+Space stays Ctrl). |
| 📖 **Manual links** | Click an action to open its page in the **Blender 5.2** manual. |
| 🖥 **Second-screen friendly** | Compact density, a collapsible header, a sticky toolbar, light/dark/auto themes, and shareable URLs (`#c=sculpt`, `#q=bevel`). |
| 🖨 **Print / PDF** | A clean print layout for a paper copy. |

Settings, progress and pins are saved in your browser (`localStorage`).

> Shortcuts assume Blender's **default keymap** with its default preferences: **left-click select** and **Spacebar = Play**. Keys act on the editor under the mouse. If you chose *Spacebar = Tools*, playback becomes Shift+Space and the toolbar becomes Space.

## Project layout

```
index.html               page skeleton
assets/styles.css        styles (dark/light, compact, print)
assets/app.js            rendering, search, filters, progress, flashcards
assets/data.js           all shortcuts (the single source of truth)
tools/verify_keymap.py   checks data.js against Blender's source keymap + manual
```

### Data format (`assets/data.js`)

`data.js` assigns a JSON object to `window.KB_DATA`, formatted with one shortcut per line. A shortcut looks like this:

```json
{"k": "Ctrl+B", "en": "Bevel edges", "pl": "Fazuj krawędzie (bevel)", "l": 1,
 "h": {"en": "Wheel = segments.", "pl": "Kółko = liczba segmentów."},
 "op": "mesh.bevel", "km": "Mesh", "doc": "modeling/meshes/editing/edge/bevel.html#bpy-ops-mesh-bevel"}
```

| field | meaning |
|---|---|
| `k` | Keys. `+` joins a chord, a space means “then” (`G G`), and `\|` separates alternatives (`X\|Del`). Tokens: `Ctrl Shift Alt`, `A`–`Z`, `0`–`9`, `F1`–`F12`, `Tab Space Enter Esc Del Backspace Home End PgUp PgDn Up Down Left Right`, `Num0`–`Num9 NumDot NumPlus NumMinus NumSlash NumStar`, `Grave Comma Period Slash LBracket RBracket Minus Equal`, mouse `LMB RMB MMB Wheel`, the suffix `-Drag`, the prefix `2x` (double click), and `0-9` (typed numbers). |
| `en`, `pl` | The action in English and Polish. |
| `l` | Level: 1 = Start, 2 = Core, 3 = Pro. |
| `h` | Optional hint (`en` / `pl`). |
| `op` | The Blender operator the keys trigger (or a list with one operator per alternative). For modal keys (inside a running tool), this is the modal item name, for example `AXIS_X`. |
| `km` | The Blender keymap name (`3D View`, `Mesh`, `Sculpt`, `Transform Modal Map`…). |
| `p` | Optional operator properties that must match, such as `{"name": "VIEW3D_MT_pivot_pie"}`. Use a list to give one set per alternative. |
| `hc` | `1` for built-in UI behaviour that isn't in the keymap (skipped by the verifier). |
| `doc` | The page in the Blender manual, relative to `https://docs.blender.org/manual/en/5.2/`. |

## Verifying against Blender (and updating to 5.3+)

```bash
python3 tools/verify_keymap.py              # verify against the version in data.js (5.2)
python3 tools/verify_keymap.py --fill-docs  # add manual links for items that have an operator but no doc
python3 tools/verify_keymap.py --version 5.3 --dump km.txt   # check a newer release and dump its keymap
```

The script downloads `blender_default.py` (the keymap generator) and `_rna_manual_reference.py` (the operator → manual map) from Blender's GitHub mirror for the chosen release branch. It builds the keymap exactly as Blender does with default preferences, then checks that:

- each shortcut's keys trigger the declared operator in the declared keymap,
- each manual link points to a page that exists in that Blender version.

It exits non-zero on any mismatch, and CI runs it on every push (`.github/workflows/verify.yml`). To move to a new Blender release:

1. Run the script with `--version X.Y`.
2. Fix whatever it reports.
3. Bump `meta.blender`, `meta.label` and `meta.manual` in `data.js`.

### Notable 5.x changes already reflected

- **↑ / ↓ keyframe jump swapped in 5.0**: ↑ now goes to the previous keyframe and ↓ to the next.
- **Sculpt brushes are assets** (since 4.3): V Draw, S Smooth, C Clay Strips, G Grab, I Inflate, P Pinch, Shift+T Scrape, Shift+C Crease, K Snake Hook, M Mask; Shift+Space opens the brush popup.
- **Node editor**: J links selected nodes (Shift+J replaces links), F joins them in a new named frame, Shift+S swaps the node type, Ctrl+Shift+Click previews a node.
- **Ctrl+Alt+S** saves incrementally, Alt navigates the view during a transform, and Ctrl+Alt+Z undo history is no longer bound.

## Po polsku

Interaktywna ściąga skrótów Blendera **5.2 LTS** do nauki: trzymaj ją na drugim ekranie, filtruj według trybu i poziomu (Start / Podstawy / Pro), zaznaczaj nauczone skróty, przypinaj własną „Moją ściągę”, ucz się z fiszek i szukaj po polsku lub po klawiszach (`ctrl b`). Każdy skrót z keymapy jest automatycznie sprawdzany względem kodu źródłowego Blendera (`tools/verify_keymap.py`).
