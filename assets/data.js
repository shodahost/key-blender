window.KB_DATA = {
  "meta": {"blender": "5.2", "label": "5.2 LTS", "keymap": "Blender default (left-click select, Spacebar = Play)", "manual": "https://docs.blender.org/manual/{lang}/5.2/", "verified": "2026-09-28"},
  "start": [
    {"step": {"en": "Look around", "pl": "Rozejrzyj się"}, "keys": ["MMB-Drag", "Shift+MMB-Drag", "Wheel", "NumDot"], "text": {"en": "Orbit, pan, zoom — and frame the selection when lost.", "pl": "Obracaj, przesuwaj, zoomuj — a gdy się zgubisz, wykadruj zaznaczenie."}},
    {"step": {"en": "Select & transform", "pl": "Zaznacz i przekształć"}, "keys": ["LMB", "G", "R", "S"], "text": {"en": "Then X / Y / Z to lock an axis, type a number, Enter.", "pl": "Potem X / Y / Z, by zablokować oś, wpisz liczbę, Enter."}},
    {"step": {"en": "Add & edit", "pl": "Dodaj i edytuj"}, "keys": ["Shift+A", "Tab", "E", "Ctrl+R"], "text": {"en": "Add a mesh, Tab into Edit Mode, extrude and cut loops.", "pl": "Dodaj siatkę, Tab do Edit Mode, wytłaczaj i tnij pętle."}},
    {"step": {"en": "When in doubt", "pl": "W razie wątpliwości"}, "keys": ["F3", "Ctrl+Z", "F9"], "text": {"en": "Search any command, undo, tweak the last operation.", "pl": "Szukaj polecenia, cofnij, popraw ostatnią operację."}}
  ],
  "setup": [
    {"icon": "🖱", "title": {"en": "Emulate 3 Button Mouse", "pl": "Emulacja 3-przyciskowej myszy"}, "text": {"en": "Preferences → Input. On a trackpad or without a middle button, Alt+LMB then orbits, Shift+Alt+LMB pans.", "pl": "Preferencje → Input. Na touchpadzie lub bez środkowego przycisku: Alt+LPM obraca, Shift+Alt+LPM przesuwa."}, "doc": "editors/preferences/input.html"},
    {"icon": "🔢", "title": {"en": "Emulate Numpad", "pl": "Emulacja numpada"}, "text": {"en": "Preferences → Input. Number row acts as numpad views — but 1/2/3 then no longer switch select modes in Edit Mode. The ` pie is often the better choice.", "pl": "Preferencje → Input. Rząd cyfr działa jak numpad — ale 1/2/3 nie przełączają wtedy trybów zaznaczania w Edit Mode. Pie pod ` bywa lepszym wyborem."}, "doc": "editors/preferences/input.html"},
    {"icon": "🎯", "title": {"en": "Orbit Around Selection + Auto Depth", "pl": "Orbit Around Selection + Auto Depth"}, "text": {"en": "Preferences → Navigation. The view rotates around what you work on and zoom never gets stuck.", "pl": "Preferencje → Navigation. Widok obraca się wokół tego, nad czym pracujesz, a zoom się nie zacina."}, "doc": "editors/preferences/navigation.html"},
    {"icon": "⌨️", "title": {"en": "Keymap assumed here", "pl": "Keymapa użyta w ściądze"}, "text": {"en": "Blender default keymap: left-click select, Spacebar = Play. If you chose Spacebar = Tools, playback is Shift+Space and the toolbar is Space.", "pl": "Domyślna keymapa Blendera: zaznaczanie lewym, Spacja = Play. Jeśli wybrałeś Spacebar = Tools, odtwarzanie to Shift+Space, a pasek narzędzi to Space."}, "doc": "editors/preferences/keymap.html"},
    {"icon": "🐍", "title": {"en": "Python Tooltips", "pl": "Podpowiedzi Pythona"}, "text": {"en": "Preferences → Interface → Display. Hover any button to see its Python name — great for learning what things really are.", "pl": "Preferencje → Interface → Display. Po najechaniu na przycisk widzisz jego nazwę w Pythonie — świetne do nauki."}, "doc": "editors/preferences/interface.html"},
    {"icon": "📺", "title": {"en": "Screencast Keys", "pl": "Screencast Keys"}, "text": {"en": "Free extension (Edit → Get Extensions) that shows every key you press on screen — ideal while learning or recording tutorials.", "pl": "Darmowe rozszerzenie (Edit → Get Extensions), które pokazuje na ekranie każdy wciśnięty klawisz — idealne do nauki i nagrywania."}, "doc": "editors/preferences/extensions.html"}
  ],
  "categories": [
    {
      "id": "stuck",
      "icon": "🆘",
      "name": {"en": "Help, I'm stuck!", "pl": "Ratunku, utknąłem!"},
      "where": {"en": "Typical beginner problems and the key that fixes them", "pl": "Typowe problemy początkujących i klawisz, który je rozwiązuje"},
      "tips": [{"en": "Undo (Ctrl+Z) works almost everywhere — experiment freely.", "pl": "Cofanie (Ctrl+Z) działa prawie wszędzie — eksperymentuj śmiało."}, {"en": "Hover any button and press F1 to open its page in the manual.", "pl": "Najedź na dowolny przycisk i wciśnij F1, aby otworzyć jego stronę w manualu."}],
      "groups": [
        {
          "name": {"en": "Lost in the viewport", "pl": "Zgubiony w widoku"},
          "items": [
            {"k": "Home|NumDot", "en": "My object vanished / the viewport is empty", "pl": "Obiekt zniknął / widok jest pusty", "l": 1, "h": {"en": "Home frames everything, Numpad . frames the selection. Still nothing? Alt+H unhides, Numpad / leaves Local View.", "pl": "Home kadruje wszystko, Numpad . kadruje zaznaczenie. Dalej pusto? Alt+H odkrywa, Numpad / wychodzi z widoku lokalnego."}, "op": ["view3d.view_all", "view3d.view_selected"], "km": "3D View", "doc": "editors/3dview/navigate/navigation.html"},
            {"k": "NumDot", "en": "Zoom stops working / view orbits around the wrong point", "pl": "Zoom przestał działać / widok obraca się wokół złego punktu", "l": 1, "h": {"en": "Re-centres the view on the selection. Tip: Preferences → Navigation → Orbit Around Selection + Auto Depth.", "pl": "Wyśrodkowuje widok na zaznaczeniu. Tip: Preferencje → Navigation → Orbit Around Selection + Auto Depth."}, "op": "view3d.view_selected", "km": "3D View", "doc": "editors/3dview/navigate/navigation.html"},
            {"k": "Alt+Z", "en": "Everything is see-through", "pl": "Wszystko jest przezroczyste", "l": 1, "h": {"en": "X-ray is on. Shift+Z toggles wireframe, Z opens the shading pie.", "pl": "Włączony X-ray. Shift+Z przełącza wireframe, Z otwiera pie cieniowania."}, "op": "view3d.toggle_xray", "doc": "editors/3dview/display/shading.html"},
            {"k": "T|N", "en": "Toolbar or side panel disappeared", "pl": "Zniknął pasek narzędzi lub panel boczny", "l": 1, "op": ["wm.context_toggle", "wm.context_toggle"], "km": "3D View Generic", "doc": "interface/window_system/regions.html"},
            {"k": "Ctrl+Space", "en": "One editor fills the whole window", "pl": "Jeden edytor zajmuje całe okno", "l": 1, "h": {"en": "Toggles maximised area. Ctrl+Alt+Space toggles full-screen area.", "pl": "Przełącza maksymalizację. Ctrl+Alt+Space przełącza tryb pełnoekranowy obszaru."}, "op": "screen.screen_full_area", "km": "Screen", "doc": "interface/window_system/areas.html"},
            {"k": "Ctrl+Alt+Num0", "en": "Camera shows the wrong view", "pl": "Kamera pokazuje zły kadr", "l": 1, "h": {"en": "Navigate to a nice view first, then snap the active camera to it.", "pl": "Najpierw ustaw ładny widok, potem przyciągnij do niego aktywną kamerę."}, "op": "view3d.camera_to_view", "km": "3D View", "doc": "editors/3dview/navigate/camera_view.html"}
          ]
        },
        {
          "name": {"en": "Something behaves strangely", "pl": "Coś działa dziwnie"},
          "items": [
            {"k": "F3", "en": "I can't find a command", "pl": "Nie mogę znaleźć polecenia", "l": 1, "h": {"en": "Search every menu by name — works in every editor.", "pl": "Wyszukuje polecenia z każdego menu po nazwie — w każdym edytorze."}, "op": "wm.search_menu", "km": "Window", "doc": "interface/controls/buttons/menus.html"},
            {"k": "F9", "en": "The last tool used the wrong settings", "pl": "Ostatnie narzędzie użyło złych ustawień", "l": 1, "h": {"en": "Re-opens the Adjust Last Operation panel (e.g. bevel segments). Or Ctrl+Z.", "pl": "Otwiera panel Adjust Last Operation (np. segmenty bevela). Albo Ctrl+Z."}, "op": "screen.redo_last", "km": "Screen", "doc": "interface/undo_redo.html"},
            {"k": "Ctrl+A", "en": "Bevel / modifiers look stretched or uneven", "pl": "Bevel / modyfikatory są rozciągnięte lub nierówne", "l": 1, "h": {"en": "Object Mode → Apply → Scale. Unapplied scale distorts bevels, solidify and physics.", "pl": "Object Mode → Apply → Scale. Niezastosowana skala psuje bevel, solidify i fizykę."}, "op": "wm.call_menu", "km": "Object Mode", "p": {"name": "VIEW3D_MT_object_apply"}, "doc": "scene_layout/object/editing/apply.html"},
            {"k": "Shift+N", "en": "Faces look black / shading is broken", "pl": "Ściany są czarne / cieniowanie jest zepsute", "l": 1, "h": {"en": "Edit Mode, select all (A), recalculate normals outside. Check Overlays → Face Orientation (blue = OK, red = flipped).", "pl": "Edit Mode, zaznacz wszystko (A), przelicz normalne na zewnątrz. Sprawdź Overlays → Face Orientation (niebieski = OK, czerwony = odwrócone)."}, "op": "mesh.normals_make_consistent", "km": "Mesh", "doc": "modeling/meshes/editing/mesh/normals.html"},
            {"k": "M", "en": "Doubled vertices after a cancelled extrude", "pl": "Zdublowane wierzchołki po anulowanym wytłoczeniu", "l": 1, "h": {"en": "Right-click cancels the move but keeps the new geometry. M → By Distance cleans it up.", "pl": "PPM anuluje ruch, ale nowa geometria zostaje. M → By Distance ją usuwa."}, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_edit_mesh_merge"}, "doc": "modeling/meshes/editing/mesh/merge.html"},
            {"k": "Period|Comma", "en": "Rotation/scale happens around the wrong point or axis", "pl": "Obrót/skalowanie działa wokół złego punktu lub osi", "l": 1, "h": {"en": "Period = pivot point pie, Comma = transform orientation pie (Global / Local / Normal…).", "pl": "Kropka = pie punktu obrotu, przecinek = pie orientacji (Global / Local / Normal…)."}, "op": ["wm.call_menu_pie", "wm.call_menu_pie"], "km": "3D View", "p": [{"name": "VIEW3D_MT_pivot_pie"}, {"name": "VIEW3D_MT_orientations_pie"}], "doc": "editors/3dview/controls/pivot_point/index.html"},
            {"k": "Shift+Tab", "en": "Objects jump / stick while moving", "pl": "Obiekty skaczą / przyklejają się podczas ruchu", "l": 1, "h": {"en": "Snapping is on. Holding Ctrl while moving temporarily inverts it.", "pl": "Włączone przyciąganie. Przytrzymanie Ctrl podczas ruchu tymczasowo je odwraca."}, "op": "wm.context_toggle", "km": "3D View", "doc": "editors/3dview/controls/snapping.html"},
            {"k": "O", "en": "Moving one vertex drags its neighbours", "pl": "Ruch jednego wierzchołka ciągnie sąsiednie", "l": 1, "h": {"en": "Proportional editing is on — toggle it off. Wheel changes its radius while moving.", "pl": "Włączona edycja proporcjonalna — wyłącz ją. Kółko zmienia promień podczas ruchu."}, "op": "wm.context_toggle", "km": "Mesh", "doc": "editors/3dview/controls/proportional_editing.html"},
            {"k": "Alt+H", "en": "I hid something and can't get it back", "pl": "Ukryłem coś i nie umiem przywrócić", "l": 1, "h": {"en": "Unhides all in Object, Edit and Pose Mode. Also check the eye icons in the Outliner.", "pl": "Odkrywa wszystko w Object, Edit i Pose Mode. Sprawdź też ikony oka w Outlinerze."}, "op": "object.hide_view_clear", "km": "Object Mode", "doc": "scene_layout/object/editing/show_hide.html"},
            {"k": "Ctrl+Tab", "en": "Stuck in a mode (Edit, Sculpt, Weight Paint…)", "pl": "Utknąłem w trybie (Edit, Sculpt, Weight Paint…)", "l": 1, "h": {"en": "Opens the mode pie. Tab toggles Edit Mode.", "pl": "Otwiera pie trybów. Tab przełącza Edit Mode."}, "op": "view3d.object_mode_pie_or_toggle", "km": "Object Non-modal", "doc": "editors/3dview/modes.html"},
            {"k": "Esc", "en": "Animation keeps playing", "pl": "Animacja cały czas się odtwarza", "l": 1, "h": {"en": "Stops and jumps back to where playback started. Space stops in place.", "pl": "Zatrzymuje i wraca do klatki startowej. Spacja zatrzymuje w miejscu."}, "op": "screen.animation_cancel", "km": "Frames", "doc": "editors/timeline.html"}
          ]
        }
      ]
    },
    {
      "id": "general",
      "icon": "🛠",
      "name": {"en": "General & Interface", "pl": "Ogólne i interfejs"},
      "where": {"en": "Anywhere in Blender", "pl": "Wszędzie w Blenderze"},
      "tips": [{"en": "Keys act on the editor under the mouse — hover the 3D view before pressing 3D shortcuts.", "pl": "Klawisze działają w edytorze pod kursorem — najedź na widok 3D zanim użyjesz skrótów 3D."}, {"en": "Every menu shows its shortcut on the right. Right-click an item → Assign Shortcut to make your own.", "pl": "Każde menu pokazuje skrót po prawej. PPM na pozycji → Assign Shortcut, by dodać własny."}],
      "groups": [
        {
          "name": {"en": "Files", "pl": "Pliki"},
          "items": [
            {"k": "Ctrl+N", "en": "New file", "pl": "Nowy plik", "l": 1, "op": "wm.call_menu", "km": "Window", "p": {"name": "TOPBAR_MT_file_new"}, "doc": "files/blend/open_save.html"},
            {"k": "Ctrl+O", "en": "Open file", "pl": "Otwórz plik", "l": 1, "op": "wm.open_mainfile", "km": "Window", "doc": "files/blend/open_save.html#bpy-ops-wm-open-mainfile"},
            {"k": "Ctrl+Shift+O", "en": "Open recent", "pl": "Otwórz ostatnie", "l": 2, "op": "wm.call_menu", "km": "Window", "p": {"name": "TOPBAR_MT_file_open_recent"}, "doc": "files/blend/open_save.html"},
            {"k": "Ctrl+S", "en": "Save", "pl": "Zapisz", "l": 1, "op": "wm.save_mainfile", "km": "Window", "doc": "files/blend/open_save.html#bpy-ops-wm-save-mainfile"},
            {"k": "Ctrl+Shift+S", "en": "Save as…", "pl": "Zapisz jako…", "l": 2, "op": "wm.save_as_mainfile", "km": "Window", "doc": "files/blend/open_save.html#bpy-ops-wm-save-as-mainfile"},
            {"k": "Ctrl+Alt+S", "en": "Save incremental", "pl": "Zapisz przyrostowo", "l": 2, "h": {"en": "Saves name_001.blend, name_002.blend… — cheap version history.", "pl": "Zapisuje nazwa_001.blend, nazwa_002.blend… — tania historia wersji."}, "op": "wm.save_mainfile", "km": "Window", "p": {"incremental": true}, "doc": "files/blend/open_save.html"},
            {"k": "Ctrl+Q", "en": "Quit Blender", "pl": "Zamknij Blendera", "l": 2, "op": "wm.quit_blender", "km": "Window"},
            {"k": "F4", "en": "File context menu", "pl": "Menu kontekstowe pliku", "l": 3, "op": "wm.call_menu", "km": "Window", "p": {"name": "TOPBAR_MT_file_context_menu"}, "doc": "interface/window_system/topbar.html"}
          ]
        },
        {
          "name": {"en": "Undo & repeat", "pl": "Cofanie i powtarzanie"},
          "items": [
            {"k": "Ctrl+Z", "en": "Undo", "pl": "Cofnij", "l": 1, "op": "ed.undo", "km": "Screen", "doc": "interface/undo_redo.html#bpy-ops-ed-undo"},
            {"k": "Ctrl+Shift+Z", "en": "Redo", "pl": "Ponów", "l": 1, "op": "ed.redo", "km": "Screen", "doc": "interface/undo_redo.html#bpy-ops-ed-redo"},
            {"k": "F9", "en": "Adjust last operation", "pl": "Dostosuj ostatnią operację", "l": 1, "h": {"en": "Change a tool's options after using it (segments, offset…).", "pl": "Zmień opcje narzędzia już po użyciu (segmenty, offset…)."}, "op": "screen.redo_last", "km": "Screen", "doc": "interface/undo_redo.html#bpy-ops-screen-redo-last"},
            {"k": "Shift+R", "en": "Repeat last action", "pl": "Powtórz ostatnią akcję", "l": 2, "h": {"en": "Great for arrays by hand: Shift+D, move, then Shift+R Shift+R…", "pl": "Świetne do ręcznych szyków: Shift+D, przesuń, potem Shift+R Shift+R…"}, "op": "screen.repeat_last", "km": "Screen", "doc": "interface/undo_redo.html#bpy-ops-screen-repeat-last"}
          ]
        },
        {
          "name": {"en": "Search & menus", "pl": "Wyszukiwanie i menu"},
          "items": [
            {"k": "F3", "en": "Search menus / commands", "pl": "Szukaj w menu / poleceń", "l": 1, "h": {"en": "The #1 lifesaver: type what you want, e.g. \"subdivide\".", "pl": "Ratunek nr 1: wpisz, czego szukasz, np. „subdivide”."}, "op": "wm.search_menu", "km": "Window", "doc": "interface/operators.html#bpy-ops-wm-search-menu"},
            {"k": "RMB", "en": "Context menu", "pl": "Menu kontekstowe", "l": 1, "h": {"en": "With the default left-click select.", "pl": "Przy domyślnym zaznaczaniu lewym przyciskiem."}, "op": "wm.call_menu", "km": "Object Mode", "p": {"name": "VIEW3D_MT_object_context_menu"}, "doc": "interface/controls/buttons/menus.html"},
            {"k": "Q", "en": "Quick Favorites", "pl": "Szybkie ulubione", "l": 2, "h": {"en": "Right-click any menu item → Add to Quick Favorites.", "pl": "PPM na dowolnej pozycji menu → Add to Quick Favorites."}, "op": "wm.call_menu", "km": "Window", "p": {"name": "SCREEN_MT_user_menu"}, "doc": "interface/controls/buttons/menus.html"},
            {"k": "F2", "en": "Rename active item", "pl": "Zmień nazwę aktywnego elementu", "l": 1, "op": "wm.call_panel", "km": "Window", "p": {"name": "TOPBAR_PT_name"}, "doc": "interface/window_system/topbar.html"},
            {"k": "Ctrl+F2", "en": "Batch rename", "pl": "Zmiana nazw hurtowo", "l": 3, "op": "wm.batch_rename", "km": "Window", "doc": "files/blend/rename.html"},
            {"k": "F1", "en": "Manual page for the hovered button", "pl": "Strona manuala dla przycisku pod kursorem", "l": 2, "op": "wm.doc_view_manual_ui_context", "km": "Window", "doc": "getting_started/help.html"},
            {"k": "Ctrl+Comma", "en": "Preferences", "pl": "Preferencje", "l": 2, "op": "screen.userpref_show", "km": "Screen", "doc": "editors/preferences/introduction.html"}
          ]
        },
        {
          "name": {"en": "Tools", "pl": "Narzędzia"},
          "items": [
            {"k": "Shift+Space", "en": "Toolbar popup", "pl": "Wyskakujący pasek narzędzi", "l": 2, "h": {"en": "Then press the tool's letter. In paint/sculpt modes it opens the brush picker.", "pl": "Potem wciśnij literę narzędzia. W trybach malowania/rzeźby otwiera wybór pędzli."}, "op": "wm.toolbar", "km": "Window", "doc": "interface/tool_system.html"},
            {"k": "W", "en": "Cycle selection tools", "pl": "Przełączaj narzędzia zaznaczania", "l": 2, "h": {"en": "Tweak → Box → Circle → Lasso.", "pl": "Tweak → Box → Circle → Lasso."}, "op": "wm.tool_set_by_id", "km": "3D View", "p": {"name": "builtin.select_box"}, "doc": "interface/tool_system.html"},
            {"k": "Alt+W", "en": "Fallback tool pie", "pl": "Pie narzędzia zapasowego", "l": 3, "op": "wm.toolbar_fallback_pie", "km": "Window", "doc": "interface/tool_system.html"}
          ]
        },
        {
          "name": {"en": "Areas & workspaces", "pl": "Obszary i workspace'y"},
          "items": [
            {"k": "Ctrl+Space", "en": "Maximize / restore area", "pl": "Maksymalizuj / przywróć obszar", "l": 1, "op": "screen.screen_full_area", "km": "Screen", "doc": "interface/window_system/areas.html#bpy-ops-screen-screen-full-area"},
            {"k": "Ctrl+Alt+Space", "en": "Full-screen area (hide UI)", "pl": "Obszar na pełny ekran (bez UI)", "l": 2, "op": "screen.screen_full_area", "km": "Screen", "p": {"use_hide_panels": true}, "doc": "interface/window_system/areas.html"},
            {"k": "Ctrl+PgDn", "en": "Next workspace", "pl": "Następny workspace", "l": 2, "op": "screen.workspace_cycle", "km": "Screen", "p": {"direction": "NEXT"}, "doc": "interface/window_system/workspaces.html"},
            {"k": "Ctrl+PgUp", "en": "Previous workspace", "pl": "Poprzedni workspace", "l": 2, "op": "screen.workspace_cycle", "km": "Screen", "p": {"direction": "PREV"}, "doc": "interface/window_system/workspaces.html"},
            {"k": "T", "en": "Toggle toolbar", "pl": "Przełącz pasek narzędzi", "l": 1, "op": "wm.context_toggle", "km": "3D View Generic", "doc": "interface/window_system/regions.html"},
            {"k": "N", "en": "Toggle sidebar (N panel)", "pl": "Przełącz panel boczny (N)", "l": 1, "op": "wm.context_toggle", "km": "3D View Generic", "doc": "interface/window_system/regions.html"},
            {"k": "Ctrl+Alt+Q", "en": "Toggle quad view", "pl": "Przełącz widok poczwórny", "l": 3, "op": "screen.region_quadview", "km": "Screen", "doc": "interface/window_system/areas.html"}
          ]
        },
        {
          "name": {"en": "Switch editor type (under the mouse)", "pl": "Zmień typ edytora (pod kursorem)"},
          "items": [
            {"k": "Shift+F5", "en": "3D Viewport", "pl": "Widok 3D", "l": 3, "op": "screen.space_type_set_or_cycle", "km": "Window", "p": {"space_type": "VIEW_3D"}, "doc": "interface/window_system/areas.html"},
            {"k": "Shift+F3", "en": "Node editors (press again to cycle)", "pl": "Edytory węzłów (ponownie = następny)", "l": 3, "op": "screen.space_type_set_or_cycle", "km": "Window", "p": {"space_type": "NODE_EDITOR"}, "doc": "interface/window_system/areas.html"},
            {"k": "Shift+F7", "en": "Properties", "pl": "Właściwości", "l": 3, "op": "screen.space_type_set_or_cycle", "km": "Window", "p": {"space_type": "PROPERTIES"}, "doc": "interface/window_system/areas.html"},
            {"k": "Shift+F9", "en": "Outliner", "pl": "Outliner", "l": 3, "op": "screen.space_type_set_or_cycle", "km": "Window", "p": {"space_type": "OUTLINER"}, "doc": "interface/window_system/areas.html"},
            {"k": "Shift+F10", "en": "Image / UV Editor", "pl": "Edytor obrazów / UV", "l": 3, "op": "screen.space_type_set_or_cycle", "km": "Window", "p": {"space_type": "IMAGE_EDITOR"}, "doc": "interface/window_system/areas.html"},
            {"k": "Shift+F12", "en": "Dope Sheet / Timeline", "pl": "Dope Sheet / oś czasu", "l": 3, "op": "screen.space_type_set_or_cycle", "km": "Window", "p": {"space_type": "DOPESHEET_EDITOR"}, "doc": "interface/window_system/areas.html"},
            {"k": "Shift+F6", "en": "Graph Editor / Drivers", "pl": "Graph Editor / Drivers", "l": 3, "op": "screen.space_type_set_or_cycle", "km": "Window", "p": {"space_type": "GRAPH_EDITOR"}, "doc": "interface/window_system/areas.html"},
            {"k": "Shift+F8", "en": "Video Sequencer", "pl": "Edytor wideo (Sequencer)", "l": 3, "op": "screen.space_type_set_or_cycle", "km": "Window", "p": {"space_type": "SEQUENCE_EDITOR"}, "doc": "interface/window_system/areas.html"},
            {"k": "Shift+F11", "en": "Text Editor", "pl": "Edytor tekstu", "l": 3, "op": "screen.space_type_set_or_cycle", "km": "Window", "p": {"space_type": "TEXT_EDITOR"}, "doc": "interface/window_system/areas.html"},
            {"k": "Shift+F4", "en": "Python Console", "pl": "Konsola Pythona", "l": 3, "op": "screen.space_type_set_or_cycle", "km": "Window", "p": {"space_type": "CONSOLE"}, "doc": "interface/window_system/areas.html"},
            {"k": "Shift+F1", "en": "File / Asset Browser", "pl": "Przeglądarka plików / assetów", "l": 3, "op": "screen.space_type_set_or_cycle", "km": "Window", "p": {"space_type": "FILE_BROWSER"}, "doc": "interface/window_system/areas.html"}
          ]
        },
        {
          "name": {"en": "Render", "pl": "Render"},
          "items": [
            {"k": "F12", "en": "Render image", "pl": "Renderuj obraz", "l": 1, "op": "render.render", "km": "Screen", "doc": "render/output/properties/output.html"},
            {"k": "Ctrl+F12", "en": "Render animation", "pl": "Renderuj animację", "l": 2, "op": "render.render", "km": "Screen", "p": {"animation": true}, "doc": "render/output/properties/output.html"},
            {"k": "F11", "en": "Show / hide render window", "pl": "Pokaż / ukryj okno renderu", "l": 2, "op": "render.view_show", "km": "Screen", "doc": "render/output/properties/output.html"},
            {"k": "Ctrl+F11", "en": "Play rendered animation", "pl": "Odtwórz wyrenderowaną animację", "l": 3, "op": "render.play_rendered_anim", "km": "Screen", "doc": "render/output/animation_player.html"},
            {"k": "Ctrl+B", "en": "Render region (box)", "pl": "Region renderu (prostokąt)", "l": 3, "h": {"en": "Render only part of the frame — fast look-dev. Ctrl+Alt+B clears.", "pl": "Renderuj tylko fragment kadru — szybki look-dev. Ctrl+Alt+B czyści."}, "op": "view3d.render_border", "km": "3D View", "doc": "editors/3dview/navigate/regions.html#bpy-ops-view3d-render-border"},
            {"k": "J", "en": "Cycle render slots (Image Editor)", "pl": "Przełączaj sloty renderu (Image Editor)", "l": 3, "h": {"en": "Compare renders A/B. 1–9 picks a slot.", "pl": "Porównuj rendery A/B. 1–9 wybiera slot."}, "op": "image.cycle_render_slot", "km": "Image Generic"}
          ]
        }
      ]
    },
    {
      "id": "fields",
      "icon": "🎛",
      "name": {"en": "Properties & Fields", "pl": "Właściwości i pola"},
      "where": {"en": "Hover any value, checkbox or panel in the interface", "pl": "Najedź na dowolną wartość, checkbox lub panel w interfejsie"},
      "tips": [{"en": "Hold Ctrl while dragging a value to snap to round steps, Shift for fine control.", "pl": "Przytrzymaj Ctrl przy przeciąganiu wartości, by skakać o okrągłe kroki; Shift daje precyzję."}, {"en": "Hover a value and press I, then change the frame and press I again — that's animation.", "pl": "Najedź na wartość i wciśnij I, zmień klatkę, wciśnij I ponownie — to już animacja."}],
      "groups": [
        {
          "name": {"en": "Values", "pl": "Wartości"},
          "items": [
            {"k": "2xLMB|Enter", "en": "Type an exact value", "pl": "Wpisz dokładną wartość", "l": 1, "h": {"en": "Math and units work: 2*pi, 10cm, 45°, 1/3.", "pl": "Działa matematyka i jednostki: 2*pi, 10cm, 45°, 1/3."}, "hc": 1, "doc": "interface/controls/buttons/fields.html"},
            {"k": "Ctrl+C|Ctrl+V", "en": "Copy / paste a value", "pl": "Kopiuj / wklej wartość", "l": 2, "hc": 1, "doc": "interface/controls/buttons/buttons.html"},
            {"k": "Ctrl+Alt+C|Ctrl+Alt+V", "en": "Copy / paste a whole vector or colour", "pl": "Kopiuj / wklej cały wektor lub kolor", "l": 3, "hc": 1, "doc": "interface/controls/buttons/buttons.html"},
            {"k": "Backspace", "en": "Reset to default value", "pl": "Przywróć wartość domyślną", "l": 2, "op": "ui.reset_default_button", "km": "User Interface", "doc": "interface/controls/buttons/buttons.html"},
            {"k": "Minus", "en": "Negate a number", "pl": "Zmień znak liczby", "l": 3, "hc": 1, "doc": "interface/controls/buttons/fields.html"},
            {"k": "Ctrl+Wheel", "en": "Change value / cycle dropdown options", "pl": "Zmień wartość / przełączaj opcje listy", "l": 2, "hc": 1, "doc": "interface/controls/buttons/buttons.html"},
            {"k": "Alt+Enter", "en": "Apply the change to all selected objects", "pl": "Zastosuj zmianę do wszystkich zaznaczonych", "l": 2, "h": {"en": "Or hold Alt while dragging a value.", "pl": "Albo przytrzymaj Alt, przeciągając wartość."}, "hc": 1, "doc": "interface/controls/buttons/buttons.html"},
            {"k": "LMB-Drag", "en": "Drag-toggle many checkboxes / eye icons", "pl": "Przełącz wiele checkboxów / oczek jednym ruchem", "l": 2, "h": {"en": "Press on the first one and drag over the rest.", "pl": "Kliknij pierwszy i przeciągnij po pozostałych."}, "hc": 1, "doc": "interface/controls/buttons/buttons.html"},
            {"k": "E", "en": "Eyedropper (colour, object, depth…)", "pl": "Pipeta (kolor, obiekt, głębia…)", "l": 2, "op": "ui.eyedropper_color", "km": "User Interface", "doc": "interface/controls/buttons/eyedropper.html"}
          ]
        },
        {
          "name": {"en": "Animate a property", "pl": "Animowanie właściwości"},
          "items": [
            {"k": "I", "en": "Insert keyframe on hovered property", "pl": "Wstaw klatkę kluczową na właściwości", "l": 1, "op": "anim.keyframe_insert_button", "km": "User Interface", "doc": "animation/keyframes/editing.html"},
            {"k": "Alt+I", "en": "Delete keyframe on hovered property", "pl": "Usuń klatkę kluczową z właściwości", "l": 2, "op": "anim.keyframe_delete_button", "km": "User Interface", "doc": "animation/keyframes/editing.html"},
            {"k": "Shift+Alt+I", "en": "Clear all keyframes of the property", "pl": "Usuń wszystkie klatki właściwości", "l": 3, "op": "anim.keyframe_clear_button", "km": "User Interface", "doc": "animation/keyframes/editing.html"},
            {"k": "Ctrl+D", "en": "Add driver", "pl": "Dodaj driver", "l": 3, "op": "anim.driver_button_add", "km": "User Interface", "doc": "animation/drivers/usage.html"},
            {"k": "Ctrl+Alt+D", "en": "Remove driver", "pl": "Usuń driver", "l": 3, "op": "anim.driver_button_remove", "km": "User Interface", "doc": "animation/drivers/usage.html"}
          ]
        },
        {
          "name": {"en": "Properties editor & lists", "pl": "Edytor właściwości i listy"},
          "items": [
            {"k": "Ctrl+F", "en": "Search properties / filter a list", "pl": "Szukaj właściwości / filtruj listę", "l": 2, "op": "buttons.start_filter", "km": "Property Editor", "doc": "editors/properties_editor.html"},
            {"k": "Ctrl+Wheel", "en": "Cycle Properties tabs", "pl": "Przełączaj zakładki Properties", "l": 3, "op": "screen.space_context_cycle", "km": "Property Editor", "doc": "editors/properties_editor.html"},
            {"k": "Shift+A", "en": "Add modifier (hover the Modifiers tab)", "pl": "Dodaj modyfikator (kursor nad zakładką)", "l": 2, "op": "object.add_modifier_menu", "km": "Property Editor", "doc": "scene_layout/object/editing/modifiers.html"},
            {"k": "Ctrl+A", "en": "Apply hovered modifier", "pl": "Zastosuj modyfikator pod kursorem", "l": 2, "op": "object.modifier_apply", "km": "Property Editor", "doc": "scene_layout/object/editing/modifiers.html"},
            {"k": "Shift+D", "en": "Duplicate hovered modifier", "pl": "Duplikuj modyfikator pod kursorem", "l": 3, "op": "object.modifier_copy", "km": "Property Editor", "doc": "scene_layout/object/editing/modifiers.html"},
            {"k": "X|Del", "en": "Remove hovered modifier", "pl": "Usuń modyfikator pod kursorem", "l": 2, "op": ["object.modifier_remove", "object.modifier_remove"], "km": "Property Editor", "doc": "scene_layout/object/editing/modifiers.html"},
            {"k": "Ctrl+Shift+C", "en": "Copy data path (for Python / drivers)", "pl": "Kopiuj ścieżkę danych (Python / drivery)", "l": 3, "op": "ui.copy_data_path_button", "km": "User Interface", "doc": "interface/controls/buttons/buttons.html"}
          ]
        }
      ]
    },
    {
      "id": "navigation",
      "icon": "🧭",
      "name": {"en": "Navigation & View", "pl": "Nawigacja i widok"},
      "where": {"en": "3D Viewport, any mode", "pl": "Widok 3D, dowolny tryb"},
      "tips": [{"en": "Trackpad or no middle button? Preferences → Input → Emulate 3 Button Mouse (Alt+LMB orbits).", "pl": "Touchpad lub brak środkowego przycisku? Preferencje → Input → Emulate 3 Button Mouse (Alt+LPM obraca)."}, {"en": "Lock Camera to View (N panel → View) lets you frame a shot by simply navigating in camera view.", "pl": "Lock Camera to View (panel N → View) pozwala kadrować ujęcie zwykłą nawigacją w widoku kamery."}],
      "groups": [
        {
          "name": {"en": "Orbit, pan, zoom", "pl": "Obrót, przesuwanie, zoom"},
          "items": [
            {"k": "MMB-Drag", "en": "Orbit view", "pl": "Obracaj widok", "l": 1, "op": "view3d.rotate", "km": "3D View", "doc": "editors/3dview/navigate/navigation.html"},
            {"k": "Shift+MMB-Drag", "en": "Pan view", "pl": "Przesuń widok", "l": 1, "op": "view3d.move", "km": "3D View", "doc": "editors/3dview/navigate/navigation.html"},
            {"k": "Wheel", "en": "Zoom", "pl": "Przybliż / oddal", "l": 1, "op": "view3d.zoom", "km": "3D View", "doc": "editors/3dview/navigate/navigation.html"},
            {"k": "Ctrl+MMB-Drag", "en": "Smooth zoom", "pl": "Płynny zoom", "l": 3, "op": "view3d.zoom", "km": "3D View", "doc": "editors/3dview/navigate/navigation.html"},
            {"k": "NumDot", "en": "Frame selected", "pl": "Wykadruj zaznaczone", "l": 1, "op": "view3d.view_selected", "km": "3D View", "doc": "editors/3dview/navigate/navigation.html#bpy-ops-view3d-view-selected"},
            {"k": "Home", "en": "Frame all", "pl": "Wykadruj wszystko", "l": 1, "op": "view3d.view_all", "km": "3D View", "doc": "editors/3dview/navigate/navigation.html#bpy-ops-view3d-view-all"},
            {"k": "Shift+C", "en": "Reset 3D cursor and frame all", "pl": "Zresetuj kursor 3D i wykadruj wszystko", "l": 2, "op": "view3d.view_all", "km": "3D View", "p": {"center": true}, "doc": "editors/3dview/navigate/navigation.html"},
            {"k": "Shift+B", "en": "Zoom to a box region", "pl": "Przybliż do zaznaczonego obszaru", "l": 2, "op": "view3d.zoom_border", "km": "3D View", "doc": "editors/3dview/navigate/navigation.html"},
            {"k": "Alt+MMB", "en": "Center view on clicked point", "pl": "Wyśrodkuj widok na klikniętym punkcie", "l": 3, "op": "view3d.view_center_pick", "km": "3D View", "doc": "editors/3dview/navigate/navigation.html"},
            {"k": "Alt+MMB-Drag", "en": "Snap to nearest axis view", "pl": "Przyciągnij do najbliższego widoku osi", "l": 2, "h": {"en": "Drag up/down/left/right while holding Alt.", "pl": "Przeciągnij w górę/dół/bok z wciśniętym Alt."}, "op": "view3d.view_axis", "km": "3D View", "doc": "editors/3dview/navigate/viewpoint.html"}
          ]
        },
        {
          "name": {"en": "Numpad views", "pl": "Widoki z klawiatury numerycznej"},
          "items": [
            {"k": "Num1", "en": "Front view", "pl": "Widok z przodu", "l": 1, "op": "view3d.view_axis", "km": "3D View", "p": {"type": "FRONT"}, "doc": "editors/3dview/navigate/viewpoint.html"},
            {"k": "Num3", "en": "Right view", "pl": "Widok z prawej", "l": 1, "op": "view3d.view_axis", "km": "3D View", "p": {"type": "RIGHT"}, "doc": "editors/3dview/navigate/viewpoint.html"},
            {"k": "Num7", "en": "Top view", "pl": "Widok z góry", "l": 1, "op": "view3d.view_axis", "km": "3D View", "p": {"type": "TOP"}, "doc": "editors/3dview/navigate/viewpoint.html"},
            {"k": "Ctrl+Num1|Ctrl+Num3|Ctrl+Num7", "en": "Back / left / bottom view", "pl": "Widok z tyłu / z lewej / z dołu", "l": 2, "op": "view3d.view_axis", "km": "3D View", "p": [{"type": "BACK"}, {"type": "LEFT"}, {"type": "BOTTOM"}], "doc": "editors/3dview/navigate/viewpoint.html"},
            {"k": "Num9", "en": "Opposite side", "pl": "Widok z przeciwnej strony", "l": 2, "op": "view3d.view_orbit", "km": "3D View", "doc": "editors/3dview/navigate/viewpoint.html"},
            {"k": "Num5", "en": "Toggle perspective / orthographic", "pl": "Przełącz perspektywę / ortho", "l": 1, "op": "view3d.view_persportho", "km": "3D View", "doc": "editors/3dview/navigate/projections.html"},
            {"k": "Num4|Num6|Num8|Num2", "en": "Orbit in 15° steps", "pl": "Obracaj co 15°", "l": 2, "op": "view3d.view_orbit", "km": "3D View", "doc": "editors/3dview/navigate/navigation.html"},
            {"k": "Shift+Num4|Shift+Num6", "en": "Roll view", "pl": "Przechyl widok", "l": 3, "op": "view3d.view_roll", "km": "3D View", "doc": "editors/3dview/navigate/navigation.html"},
            {"k": "Ctrl+Num4|Ctrl+Num6|Ctrl+Num8|Ctrl+Num2", "en": "Pan in steps", "pl": "Przesuwaj skokowo", "l": 3, "op": "view3d.view_pan", "km": "3D View", "doc": "editors/3dview/navigate/navigation.html"},
            {"k": "Shift+Num7", "en": "Align view to active (face / object)", "pl": "Wyrównaj widok do aktywnego (ściana / obiekt)", "l": 3, "h": {"en": "Also Shift+Num1 / Shift+Num3.", "pl": "Również Shift+Num1 / Shift+Num3."}, "op": "view3d.view_axis", "km": "3D View", "p": {"type": "TOP", "align_active": true}, "doc": "editors/3dview/navigate/align.html"}
          ]
        },
        {
          "name": {"en": "No numpad? (laptops)", "pl": "Brak numpada? (laptopy)"},
          "items": [
            {"k": "Grave", "en": "View pie (front, top, camera…)", "pl": "Pie widoków (przód, góra, kamera…)", "l": 1, "h": {"en": "The ` / ~ key under Esc. Or enable Preferences → Input → Emulate Numpad.", "pl": "Klawisz ` / ~ pod Esc. Albo włącz Preferencje → Input → Emulate Numpad."}, "op": "wm.call_menu_pie", "km": "3D View", "p": {"name": "VIEW3D_MT_view_pie"}, "doc": "editors/3dview/navigate/viewpoint.html"},
            {"k": "Ctrl+Grave", "en": "Toggle gizmos", "pl": "Przełącz gizmo", "l": 3, "op": "wm.context_toggle", "km": "3D View", "doc": "editors/3dview/display/gizmo.html"}
          ]
        },
        {
          "name": {"en": "Camera", "pl": "Kamera"},
          "items": [
            {"k": "Num0", "en": "Camera view", "pl": "Widok z kamery", "l": 1, "op": "view3d.view_camera", "km": "3D View", "doc": "editors/3dview/navigate/camera_view.html"},
            {"k": "Ctrl+Alt+Num0", "en": "Align active camera to view", "pl": "Ustaw aktywną kamerę jak widok", "l": 1, "op": "view3d.camera_to_view", "km": "3D View", "doc": "editors/3dview/navigate/align.html#bpy-ops-view3d-camera-to-view"},
            {"k": "Ctrl+Num0", "en": "Make active object the camera", "pl": "Ustaw aktywny obiekt jako kamerę", "l": 2, "op": "view3d.object_as_camera", "km": "3D View", "doc": "editors/3dview/navigate/camera_view.html"},
            {"k": "Home", "en": "Fit camera frame to the viewport (in camera view)", "pl": "Dopasuj kadr kamery do okna (w widoku kamery)", "l": 3, "op": "view3d.view_center_camera", "km": "3D View", "doc": "editors/3dview/navigate/camera_view.html"}
          ]
        },
        {
          "name": {"en": "Focus", "pl": "Skupienie"},
          "items": [
            {"k": "NumSlash|Slash", "en": "Local view (isolate selected)", "pl": "Widok lokalny (izoluj zaznaczone)", "l": 1, "op": ["view3d.localview", "view3d.localview"], "km": "3D View", "doc": "editors/3dview/navigate/local_view.html#bpy-ops-view3d-localview"},
            {"k": "Alt+NumSlash", "en": "Remove from local view", "pl": "Usuń z widoku lokalnego", "l": 3, "op": "view3d.localview_remove_from", "km": "3D View", "doc": "editors/3dview/navigate/local_view.html"},
            {"k": "Alt+B", "en": "Clipping region (cut away the view)", "pl": "Region przycinania widoku", "l": 3, "h": {"en": "Box-select what stays visible. Alt+B again clears it.", "pl": "Zaznacz prostokątem, co ma zostać. Ponowne Alt+B czyści."}, "op": "view3d.clip_border", "km": "3D View", "doc": "editors/3dview/navigate/navigation.html"}
          ]
        },
        {
          "name": {"en": "Walk / fly navigation", "pl": "Nawigacja chodzenie / lot"},
          "items": [
            {"k": "Shift+Grave", "en": "Start walk / fly mode", "pl": "Włącz tryb chodzenia / lotu", "l": 2, "h": {"en": "Great for placing cameras inside interiors.", "pl": "Świetne do ustawiania kamer we wnętrzach."}, "op": "view3d.navigate", "km": "3D View", "doc": "editors/3dview/navigate/index.html#bpy-ops-view3d-navigate"},
            {"k": "W|A|S|D", "en": "Move forward / left / back / right", "pl": "Ruch przód / lewo / tył / prawo", "l": 2, "op": ["FORWARD", "LEFT", "BACKWARD", "RIGHT"], "km": "View3D Walk Modal", "doc": "editors/3dview/navigate/walk_fly.html"},
            {"k": "E|Q", "en": "Move up / down", "pl": "Ruch w górę / w dół", "l": 3, "op": ["UP", "DOWN"], "km": "View3D Walk Modal", "doc": "editors/3dview/navigate/walk_fly.html"},
            {"k": "Shift|Alt", "en": "Faster / slower (hold)", "pl": "Szybciej / wolniej (przytrzymaj)", "l": 3, "op": ["FAST_ENABLE", "SLOW_ENABLE"], "km": "View3D Walk Modal", "doc": "editors/3dview/navigate/walk_fly.html"},
            {"k": "Wheel", "en": "Change walk speed", "pl": "Zmień prędkość chodzenia", "l": 3, "op": "ACCELERATE", "km": "View3D Walk Modal", "doc": "editors/3dview/navigate/walk_fly.html"},
            {"k": "Tab|G", "en": "Toggle gravity", "pl": "Przełącz grawitację", "l": 3, "op": ["GRAVITY_TOGGLE", "GRAVITY_TOGGLE"], "km": "View3D Walk Modal", "doc": "editors/3dview/navigate/walk_fly.html"},
            {"k": "Space", "en": "Teleport to the point under the cursor", "pl": "Teleportuj do punktu pod kursorem", "l": 3, "op": "TELEPORT", "km": "View3D Walk Modal", "doc": "editors/3dview/navigate/walk_fly.html"}
          ]
        },
        {
          "name": {"en": "Display & shading", "pl": "Wyświetlanie i cieniowanie"},
          "items": [
            {"k": "Z", "en": "Shading pie (wireframe, solid, material, rendered)", "pl": "Pie cieniowania (wireframe, solid, material, rendered)", "l": 1, "op": "wm.call_menu_pie", "km": "3D View", "p": {"name": "VIEW3D_MT_shading_pie"}, "doc": "editors/3dview/display/shading.html"},
            {"k": "Shift+Z", "en": "Toggle wireframe", "pl": "Przełącz wireframe", "l": 2, "op": "view3d.toggle_shading", "km": "3D View", "p": {"type": "WIREFRAME"}, "doc": "editors/3dview/display/shading.html"},
            {"k": "Alt+Z", "en": "Toggle X-ray", "pl": "Przełącz X-ray", "l": 1, "h": {"en": "Also lets box select grab hidden faces in Edit Mode.", "pl": "Pozwala też zaznaczać prostokątem ukryte ściany w Edit Mode."}, "op": "view3d.toggle_xray", "km": "3D View", "doc": "editors/3dview/display/shading.html"},
            {"k": "Shift+Alt+Z", "en": "Toggle overlays", "pl": "Przełącz nakładki (overlays)", "l": 2, "h": {"en": "Hide grid, outlines and gizmos for a clean preview.", "pl": "Ukryj siatkę, obrysy i gizmo dla czystego podglądu."}, "op": "wm.context_toggle", "km": "3D View", "doc": "editors/3dview/display/overlays.html"}
          ]
        }
      ]
    },
    {
      "id": "selection",
      "icon": "🎯",
      "name": {"en": "Selection", "pl": "Zaznaczanie"},
      "where": {"en": "3D Viewport — Object & Edit Mode", "pl": "Widok 3D — Object i Edit Mode"},
      "tips": [{"en": "The active object (lighter outline) is the one tools act on first — e.g. Ctrl+L copies FROM it.", "pl": "Aktywny obiekt (jaśniejszy obrys) jest źródłem dla narzędzi — np. Ctrl+L kopiuje Z NIEGO."}],
      "groups": [
        {
          "name": {"en": "Basics", "pl": "Podstawy"},
          "items": [
            {"k": "LMB", "en": "Select", "pl": "Zaznacz", "l": 1, "op": "view3d.select", "km": "3D View", "doc": "scene_layout/object/selecting.html"},
            {"k": "Shift+LMB", "en": "Add / remove from selection", "pl": "Dodaj / usuń z zaznaczenia", "l": 1, "h": {"en": "Click a selected item once more to make it active; again to deselect.", "pl": "Kliknij zaznaczony ponownie, by stał się aktywny; jeszcze raz, by odznaczyć."}, "op": "view3d.select", "km": "3D View", "p": {"toggle": true}, "doc": "scene_layout/object/selecting.html"},
            {"k": "A", "en": "Select all", "pl": "Zaznacz wszystko", "l": 1, "op": "object.select_all", "km": "Object Mode", "doc": "scene_layout/object/selecting.html"},
            {"k": "Alt+A", "en": "Deselect all", "pl": "Odznacz wszystko", "l": 1, "op": "object.select_all", "km": "Object Mode", "p": {"action": "DESELECT"}, "doc": "scene_layout/object/selecting.html"},
            {"k": "2xA", "en": "Deselect all (double-tap)", "pl": "Odznacz wszystko (dwuklik A)", "l": 2, "op": "object.select_all", "km": "Object Mode", "p": {"action": "DESELECT"}, "doc": "scene_layout/object/selecting.html"},
            {"k": "Ctrl+I", "en": "Invert selection", "pl": "Odwróć zaznaczenie", "l": 2, "op": "object.select_all", "km": "Object Mode", "p": {"action": "INVERT"}, "doc": "scene_layout/object/selecting.html"},
            {"k": "Alt+LMB", "en": "Pick from a list of overlapping objects", "pl": "Wybierz z listy nakładających się obiektów", "l": 3, "h": {"en": "Object Mode. (In Edit Mode Alt+Click selects loops.)", "pl": "Object Mode. (W Edit Mode Alt+klik zaznacza pętle.)"}, "op": "view3d.select", "km": "3D View", "p": {"enumerate": true}, "doc": "scene_layout/object/selecting.html"}
          ]
        },
        {
          "name": {"en": "Selection tools", "pl": "Narzędzia zaznaczania"},
          "items": [
            {"k": "B", "en": "Box select", "pl": "Zaznaczanie prostokątem", "l": 1, "h": {"en": "Shift+drag or MMB-drag removes from the selection.", "pl": "Shift+przeciągnij lub ŚPM-przeciągnij odejmuje od zaznaczenia."}, "op": "view3d.select_box", "km": "3D View", "doc": "scene_layout/object/selecting.html"},
            {"k": "C", "en": "Circle select", "pl": "Zaznaczanie okręgiem", "l": 1, "h": {"en": "Wheel = radius, MMB/Shift = deselect, RMB/Enter = done.", "pl": "Kółko = promień, ŚPM/Shift = odznaczaj, PPM/Enter = koniec."}, "op": "view3d.select_circle", "km": "3D View", "doc": "scene_layout/object/selecting.html"},
            {"k": "Ctrl+RMB-Drag", "en": "Lasso select", "pl": "Zaznaczanie lasso", "l": 2, "op": "view3d.select_lasso", "km": "3D View", "doc": "scene_layout/object/selecting.html"},
            {"k": "Ctrl+Shift+RMB-Drag", "en": "Lasso deselect", "pl": "Odznaczanie lasso", "l": 3, "op": "view3d.select_lasso", "km": "3D View", "p": {"mode": "SUB"}, "doc": "scene_layout/object/selecting.html"}
          ]
        },
        {
          "name": {"en": "Grow & related", "pl": "Powiększanie i powiązane"},
          "items": [
            {"k": "Ctrl+NumPlus", "en": "Grow selection", "pl": "Powiększ zaznaczenie", "l": 2, "op": "mesh.select_more", "km": "Mesh", "doc": "modeling/meshes/selecting/more_less.html#bpy-ops-mesh-select-more"},
            {"k": "Ctrl+NumMinus", "en": "Shrink selection", "pl": "Zmniejsz zaznaczenie", "l": 2, "op": "mesh.select_less", "km": "Mesh", "doc": "modeling/meshes/selecting/more_less.html#bpy-ops-mesh-select-less"},
            {"k": "Shift+G", "en": "Select grouped / similar", "pl": "Zaznacz pogrupowane / podobne", "l": 2, "h": {"en": "Same type, collection, material… In Edit Mode: similar length, normal, area…", "pl": "Ten sam typ, kolekcja, materiał… W Edit Mode: podobna długość, normalna, pole…"}, "op": "object.select_grouped", "km": "Object Mode", "doc": "scene_layout/object/selecting.html"},
            {"k": "Shift+L", "en": "Select linked (same data, material…)", "pl": "Zaznacz powiązane (te same dane, materiał…)", "l": 3, "op": "object.select_linked", "km": "Object Mode", "doc": "scene_layout/object/selecting.html"},
            {"k": "LBracket|RBracket", "en": "Select parent / child", "pl": "Zaznacz rodzica / dziecko", "l": 3, "h": {"en": "Add Shift to extend the selection.", "pl": "Z Shift rozszerza zaznaczenie."}, "op": ["object.select_hierarchy", "object.select_hierarchy"], "km": "Object Mode", "doc": "scene_layout/object/selecting.html"}
          ]
        }
      ]
    },
    {
      "id": "transform",
      "icon": "🔧",
      "name": {"en": "Transform", "pl": "Transformacje"},
      "where": {"en": "Object, Edit and Pose Mode", "pl": "Object, Edit i Pose Mode"},
      "tips": [{"en": "G → Z → 2 → Enter moves exactly 2 m up. Numbers beat dragging for clean models.", "pl": "G → Z → 2 → Enter przesuwa dokładnie 2 m w górę. Liczby wygrywają z przeciąganiem."}, {"en": "Pivot = 3D Cursor + Shift+S → Cursor to Selected is the classic trick to rotate around any point.", "pl": "Pivot = 3D Cursor + Shift+S → Cursor to Selected to klasyczny trik na obrót wokół dowolnego punktu."}],
      "groups": [
        {
          "name": {"en": "Core", "pl": "Podstawy"},
          "items": [
            {"k": "G", "en": "Move (grab)", "pl": "Przesuń", "l": 1, "op": "transform.translate", "km": "Object Mode", "doc": "scene_layout/object/editing/transform/move.html"},
            {"k": "R", "en": "Rotate", "pl": "Obróć", "l": 1, "h": {"en": "Press R twice for trackball rotation.", "pl": "Wciśnij R dwa razy — obrót trackball."}, "op": "transform.rotate", "km": "Object Mode", "doc": "scene_layout/object/editing/transform/rotate.html"},
            {"k": "S", "en": "Scale", "pl": "Skaluj", "l": 1, "op": "transform.resize", "km": "Object Mode", "doc": "scene_layout/object/editing/transform/scale.html"},
            {"k": "LMB-Drag", "en": "Move by dragging the selection", "pl": "Przesuń przeciągając zaznaczenie", "l": 1, "h": {"en": "With the Tweak / Select tool active.", "pl": "Przy aktywnym narzędziu Tweak / Select."}, "op": "transform.translate", "km": "Object Mode", "doc": "scene_layout/object/editing/transform/move.html"},
            {"k": "Alt+G", "en": "Clear location", "pl": "Wyzeruj położenie", "l": 1, "op": "object.location_clear", "km": "Object Mode", "doc": "scene_layout/object/editing/clear.html"},
            {"k": "Alt+R", "en": "Clear rotation", "pl": "Wyzeruj obrót", "l": 1, "op": "object.rotation_clear", "km": "Object Mode", "doc": "scene_layout/object/editing/clear.html"},
            {"k": "Alt+S", "en": "Clear scale", "pl": "Wyzeruj skalę", "l": 1, "h": {"en": "Object Mode. In Edit Mode Alt+S is Shrink/Fatten.", "pl": "Object Mode. W Edit Mode Alt+S to Shrink/Fatten."}, "op": "object.scale_clear", "km": "Object Mode", "doc": "scene_layout/object/editing/clear.html"},
            {"k": "Ctrl+M", "en": "Mirror", "pl": "Odbicie lustrzane", "l": 2, "h": {"en": "Then X / Y / Z and Enter.", "pl": "Potem X / Y / Z i Enter."}, "op": "transform.mirror", "km": "Object Mode", "doc": "scene_layout/object/editing/mirror.html"}
          ]
        },
        {
          "name": {"en": "While moving / rotating / scaling", "pl": "Podczas przesuwania / obrotu / skalowania"},
          "items": [
            {"k": "X|Y|Z", "en": "Lock to axis", "pl": "Zablokuj do osi", "l": 1, "h": {"en": "Press twice for the local axis (e.g. G Z Z).", "pl": "Wciśnij dwa razy dla osi lokalnej (np. G Z Z)."}, "op": ["AXIS_X", "AXIS_Y", "AXIS_Z"], "km": "Transform Modal Map", "doc": "scene_layout/object/editing/transform/index.html"},
            {"k": "Shift+X|Shift+Y|Shift+Z", "en": "Exclude axis (move on a plane)", "pl": "Wyklucz oś (ruch w płaszczyźnie)", "l": 2, "op": ["PLANE_X", "PLANE_Y", "PLANE_Z"], "km": "Transform Modal Map", "doc": "scene_layout/object/editing/transform/index.html"},
            {"k": "0-9", "en": "Type an exact amount", "pl": "Wpisz dokładną wartość", "l": 1, "h": {"en": "e.g. G Z 2 Enter, R X 90 Enter, S 0.5 Enter. Minus flips direction.", "pl": "np. G Z 2 Enter, R X 90 Enter, S 0.5 Enter. Minus odwraca kierunek."}, "hc": 1, "doc": "scene_layout/object/editing/transform/index.html"},
            {"k": "Ctrl", "en": "Snap while held (inverts snapping)", "pl": "Przyciągaj, dopóki trzymasz", "l": 1, "op": "SNAP_INV_ON", "km": "Transform Modal Map", "doc": "editors/3dview/controls/snapping.html"},
            {"k": "Shift", "en": "Precision / slow movement (hold)", "pl": "Precyzja / wolny ruch (przytrzymaj)", "l": 1, "op": "PRECISION", "km": "Transform Modal Map", "doc": "scene_layout/object/editing/transform/index.html"},
            {"k": "Alt", "en": "Navigate the view without cancelling (hold)", "pl": "Nawiguj widokiem bez anulowania (przytrzymaj)", "l": 2, "h": {"en": "Orbit, pan or zoom in the middle of a move.", "pl": "Obracaj, przesuwaj lub zoomuj w trakcie ruchu."}, "op": "PASSTHROUGH_NAVIGATE", "km": "Transform Modal Map", "doc": "scene_layout/object/editing/transform/index.html"},
            {"k": "MMB", "en": "Constrain to the axis you drag towards", "pl": "Ogranicz do osi w kierunku ruchu myszy", "l": 3, "op": "AUTOCONSTRAIN", "km": "Transform Modal Map", "doc": "scene_layout/object/editing/transform/index.html"},
            {"k": "B", "en": "Pick the snap base point", "pl": "Wybierz punkt bazowy przyciągania", "l": 3, "h": {"en": "Snap exactly this corner onto a target.", "pl": "Przyciągnij dokładnie ten narożnik do celu."}, "op": "EDIT_SNAP_SOURCE_ON", "km": "Transform Modal Map", "doc": "editors/3dview/controls/snapping.html"},
            {"k": "G|R|S", "en": "Switch to move / rotate / scale mid-way", "pl": "Przełącz na ruch / obrót / skalę w trakcie", "l": 3, "op": ["TRANSLATE", "ROTATE", "RESIZE"], "km": "Transform Modal Map", "doc": "scene_layout/object/editing/transform/index.html"},
            {"k": "PgUp|PgDn", "en": "Proportional editing radius", "pl": "Promień edycji proporcjonalnej", "l": 2, "h": {"en": "Or the mouse wheel.", "pl": "Albo kółko myszy."}, "op": ["PROPORTIONAL_SIZE_UP", "PROPORTIONAL_SIZE_DOWN"], "km": "Transform Modal Map", "doc": "editors/3dview/controls/proportional_editing.html"},
            {"k": "Enter|LMB", "en": "Confirm", "pl": "Zatwierdź", "l": 1, "op": ["CONFIRM", "CONFIRM"], "km": "Transform Modal Map", "doc": "scene_layout/object/editing/transform/index.html"},
            {"k": "Esc|RMB", "en": "Cancel", "pl": "Anuluj", "l": 1, "op": ["CANCEL", "CANCEL"], "km": "Transform Modal Map", "doc": "scene_layout/object/editing/transform/index.html"}
          ]
        },
        {
          "name": {"en": "Pivot, orientation & snapping", "pl": "Punkt obrotu, orientacja i przyciąganie"},
          "items": [
            {"k": "Period", "en": "Pivot point pie", "pl": "Pie punktu obrotu", "l": 1, "op": "wm.call_menu_pie", "km": "3D View", "p": {"name": "VIEW3D_MT_pivot_pie"}, "doc": "editors/3dview/controls/pivot_point/index.html"},
            {"k": "Comma", "en": "Transform orientation pie", "pl": "Pie orientacji transformacji", "l": 2, "op": "wm.call_menu_pie", "km": "3D View", "p": {"name": "VIEW3D_MT_orientations_pie"}, "doc": "editors/3dview/controls/orientation.html"},
            {"k": "Shift+S", "en": "Snap pie (cursor ↔ selection)", "pl": "Pie przyciągania (kursor ↔ zaznaczenie)", "l": 1, "h": {"en": "Cursor to Selected, Selection to Cursor, Cursor to World Origin…", "pl": "Cursor to Selected, Selection to Cursor, Cursor to World Origin…"}, "op": "wm.call_menu_pie", "km": "3D View", "p": {"name": "VIEW3D_MT_snap_pie"}, "doc": "scene_layout/object/editing/snap.html"},
            {"k": "Shift+Tab", "en": "Toggle snapping", "pl": "Przełącz przyciąganie", "l": 2, "op": "wm.context_toggle", "km": "3D View", "doc": "editors/3dview/controls/snapping.html"},
            {"k": "Ctrl+Shift+Tab", "en": "Snapping options popover", "pl": "Opcje przyciągania", "l": 3, "op": "wm.call_panel", "km": "3D View", "p": {"name": "VIEW3D_PT_snapping"}, "doc": "editors/3dview/controls/snapping.html"},
            {"k": "O", "en": "Toggle proportional editing", "pl": "Przełącz edycję proporcjonalną", "l": 2, "op": "wm.context_toggle", "km": "Object Mode", "doc": "editors/3dview/controls/proportional_editing.html"},
            {"k": "Shift+O", "en": "Proportional falloff pie", "pl": "Pie spadku edycji proporcjonalnej", "l": 3, "op": "wm.call_menu_pie", "km": "Object Mode", "p": {"name": "VIEW3D_MT_proportional_editing_falloff_pie"}, "doc": "editors/3dview/controls/proportional_editing.html"},
            {"k": "Ctrl+Period", "en": "Affect only origins", "pl": "Działaj tylko na originy", "l": 3, "h": {"en": "Move the origin without moving the mesh. Press again to turn off.", "pl": "Przesuń origin bez ruszania siatki. Wciśnij ponownie, by wyłączyć."}, "op": "wm.context_toggle", "km": "Object Mode", "doc": "scene_layout/object/origin.html"}
          ]
        },
        {
          "name": {"en": "3D cursor", "pl": "Kursor 3D"},
          "items": [
            {"k": "Shift+RMB", "en": "Place the 3D cursor", "pl": "Ustaw kursor 3D", "l": 1, "h": {"en": "New objects appear at the cursor.", "pl": "Nowe obiekty pojawiają się w miejscu kursora."}, "op": "view3d.cursor3d", "km": "3D View", "doc": "editors/3dview/3d_cursor.html"},
            {"k": "Shift+RMB-Drag", "en": "Drag the 3D cursor along surfaces", "pl": "Przeciągnij kursor 3D po powierzchniach", "l": 2, "op": "transform.translate", "km": "3D View", "p": {"cursor_transform": true}, "doc": "editors/3dview/3d_cursor.html"}
          ]
        }
      ]
    },
    {
      "id": "object",
      "icon": "📦",
      "name": {"en": "Object Mode", "pl": "Tryb Object"},
      "where": {"en": "3D Viewport → Object Mode", "pl": "Widok 3D → Object Mode"},
      "tips": [{"en": "Model once, then Alt+D for every repeated part — change the original and all copies update.", "pl": "Wymodeluj raz, potem Alt+D dla każdej powtarzalnej części — zmiana oryginału aktualizuje kopie."}, {"en": "Ctrl+P → Armature With Automatic Weights is the fastest way to rig a simple character.", "pl": "Ctrl+P → Armature With Automatic Weights to najszybszy sposób na prosty rig postaci."}],
      "groups": [
        {
          "name": {"en": "Add, duplicate, delete", "pl": "Dodawanie, duplikowanie, usuwanie"},
          "items": [
            {"k": "Shift+A", "en": "Add menu (mesh, light, camera…)", "pl": "Menu dodawania (siatka, światło, kamera…)", "l": 1, "op": "wm.call_menu", "km": "Object Mode", "p": {"name": "VIEW3D_MT_add"}, "doc": "scene_layout/object/index.html"},
            {"k": "Shift+D", "en": "Duplicate", "pl": "Duplikuj", "l": 1, "op": "object.duplicate_move", "km": "Object Mode", "doc": "scene_layout/object/editing/duplicate.html"},
            {"k": "Alt+D", "en": "Linked duplicate (shares mesh data)", "pl": "Duplikat połączony (wspólna siatka)", "l": 2, "h": {"en": "Edit one and all copies change — ideal for repeated parts.", "pl": "Edytujesz jeden — zmieniają się wszystkie. Idealne do powtarzalnych elementów."}, "op": "object.duplicate_move_linked", "km": "Object Mode", "doc": "scene_layout/object/editing/duplicate_linked.html#bpy-ops-object-duplicate-move-linked"},
            {"k": "X", "en": "Delete (with confirmation)", "pl": "Usuń (z potwierdzeniem)", "l": 1, "op": "object.delete", "km": "Object Mode", "doc": "scene_layout/object/editing/delete.html#bpy-ops-object-delete"},
            {"k": "Del", "en": "Delete immediately", "pl": "Usuń od razu", "l": 2, "op": "object.delete", "km": "Object Mode", "doc": "scene_layout/object/editing/delete.html"},
            {"k": "Ctrl+J", "en": "Join into the active object", "pl": "Połącz w aktywny obiekt", "l": 1, "op": "object.join", "km": "Object Mode", "doc": "scene_layout/object/editing/join.html#bpy-ops-object-join"},
            {"k": "Ctrl+C|Ctrl+V", "en": "Copy / paste objects (even between files)", "pl": "Kopiuj / wklej obiekty (także między plikami)", "l": 2, "op": ["view3d.copybuffer", "view3d.pastebuffer"], "km": "3D View", "doc": "editors/3dview/index.html"}
          ]
        },
        {
          "name": {"en": "Modes", "pl": "Tryby"},
          "items": [
            {"k": "Tab", "en": "Toggle Edit Mode", "pl": "Przełącz Edit Mode", "l": 1, "op": "object.mode_set", "km": "Object Non-modal", "doc": "editors/3dview/modes.html"},
            {"k": "Ctrl+Tab", "en": "Mode pie (Pose Mode for armatures)", "pl": "Pie trybów (Pose Mode dla armatur)", "l": 1, "op": "view3d.object_mode_pie_or_toggle", "km": "Object Non-modal", "doc": "editors/3dview/modes.html"},
            {"k": "Alt+Q", "en": "Switch the edited object to the one under the cursor", "pl": "Przełącz edytowany obiekt na ten pod kursorem", "l": 3, "h": {"en": "Stay in Edit/Sculpt Mode and jump between objects.", "pl": "Zostań w Edit/Sculpt Mode i skacz między obiektami."}, "op": "object.transfer_mode", "km": "Object Non-modal", "doc": "editors/3dview/modes.html"}
          ]
        },
        {
          "name": {"en": "Relations & apply", "pl": "Relacje i zastosowanie"},
          "items": [
            {"k": "Ctrl+A", "en": "Apply menu (scale, rotation, modifiers…)", "pl": "Menu Apply (skala, obrót, modyfikatory…)", "l": 1, "h": {"en": "Apply Scale before bevelling, UVs or physics!", "pl": "Zastosuj skalę przed bevelem, UV czy fizyką!"}, "op": "wm.call_menu", "km": "Object Mode", "p": {"name": "VIEW3D_MT_object_apply"}, "doc": "scene_layout/object/editing/apply.html"},
            {"k": "Ctrl+P", "en": "Set parent to active", "pl": "Ustaw rodzica (aktywny obiekt)", "l": 2, "h": {"en": "Select children first, parent last.", "pl": "Najpierw zaznacz dzieci, rodzica na końcu."}, "op": "object.parent_set", "km": "Object Mode", "doc": "scene_layout/object/editing/parent.html#bpy-ops-object-parent-set"},
            {"k": "Alt+P", "en": "Clear parent", "pl": "Usuń rodzica", "l": 2, "op": "object.parent_clear", "km": "Object Mode", "doc": "scene_layout/object/editing/parent.html#bpy-ops-object-parent-clear"},
            {"k": "Ctrl+L", "en": "Link / transfer data (materials, modifiers…)", "pl": "Połącz / przenieś dane (materiały, modyfikatory…)", "l": 2, "h": {"en": "Copies from the active object to all selected.", "pl": "Kopiuje z aktywnego obiektu do wszystkich zaznaczonych."}, "op": "wm.call_menu", "km": "Object Mode", "p": {"name": "VIEW3D_MT_make_links"}, "doc": "scene_layout/object/editing/link_transfer/link_data.html"},
            {"k": "Ctrl+1|Ctrl+2|Ctrl+3", "en": "Add Subdivision Surface (level 1–3)", "pl": "Dodaj Subdivision Surface (poziom 1–3)", "l": 2, "h": {"en": "Ctrl+0…5 — adds the modifier if missing.", "pl": "Ctrl+0…5 — dodaje modyfikator, jeśli go brak."}, "op": "object.subdivision_set", "km": "Object Mode", "p": [{"level": 1}, {"level": 2}, {"level": 3}], "doc": "scene_layout/object/editing/modifiers.html"},
            {"k": "Shift+T", "en": "Aim object/light at a point", "pl": "Wyceluj obiekt/światło w punkt", "l": 3, "h": {"en": "Drag over a surface — perfect for pointing lights.", "pl": "Przeciągnij po powierzchni — idealne do celowania światłami."}, "op": "object.transform_axis_target", "km": "Object Mode", "doc": "scene_layout/object/editing/transform/index.html"}
          ]
        },
        {
          "name": {"en": "Collections & visibility", "pl": "Kolekcje i widoczność"},
          "items": [
            {"k": "M", "en": "Move to collection", "pl": "Przenieś do kolekcji", "l": 1, "op": "wm.call_menu", "km": "Object Mode", "p": {"name": "OBJECT_MT_move_to_collection"}, "doc": "scene_layout/collections/collections.html"},
            {"k": "Shift+M", "en": "Link to another collection too", "pl": "Dołącz także do innej kolekcji", "l": 3, "op": "wm.call_menu", "km": "Object Mode", "p": {"name": "OBJECT_MT_link_to_collection"}, "doc": "scene_layout/collections/collections.html"},
            {"k": "H", "en": "Hide selected", "pl": "Ukryj zaznaczone", "l": 1, "op": "object.hide_view_set", "km": "Object Mode", "doc": "scene_layout/object/editing/show_hide.html"},
            {"k": "Shift+H", "en": "Hide unselected (isolate)", "pl": "Ukryj niezaznaczone (izoluj)", "l": 2, "op": "object.hide_view_set", "km": "Object Mode", "p": {"unselected": true}, "doc": "scene_layout/object/editing/show_hide.html"},
            {"k": "Alt+H", "en": "Unhide all", "pl": "Odkryj wszystko", "l": 1, "op": "object.hide_view_clear", "km": "Object Mode", "doc": "scene_layout/object/editing/show_hide.html#bpy-ops-object-hide-view"},
            {"k": "Ctrl+H", "en": "Hide collection popup", "pl": "Okno ukrywania kolekcji", "l": 3, "op": "object.hide_collection", "km": "Object Mode", "doc": "scene_layout/object/editing/show_hide.html"}
          ]
        }
      ]
    },
    {
      "id": "edit",
      "icon": "🔺",
      "name": {"en": "Edit Mode (Mesh)", "pl": "Tryb Edit (siatka)"},
      "where": {"en": "3D Viewport → Tab into Edit Mode", "pl": "Widok 3D → Tab do Edit Mode"},
      "tips": [{"en": "Keep quads: avoid long thin triangles and n-gons on curved surfaces that will be subdivided.", "pl": "Trzymaj się quadów: unikaj długich trójkątów i n-gonów na zakrzywionych powierzchniach pod subdivision."}, {"en": "Enable Mirror (the butterfly icon, top-right of the viewport) to model symmetric objects on one side only.", "pl": "Włącz Mirror (ikona motyla, prawy górny róg widoku), by modelować symetryczne obiekty z jednej strony."}, {"en": "Alt+Z (X-ray) before box select to grab the back faces too.", "pl": "Alt+Z (X-ray) przed zaznaczaniem prostokątem, by złapać też tylne ściany."}],
      "groups": [
        {
          "name": {"en": "Select mode", "pl": "Tryb zaznaczania"},
          "items": [
            {"k": "1", "en": "Vertex select", "pl": "Zaznaczanie wierzchołków", "l": 1, "op": "mesh.select_mode", "km": "Mesh", "p": {"type": "VERT"}, "doc": "modeling/meshes/selecting/introduction.html"},
            {"k": "2", "en": "Edge select", "pl": "Zaznaczanie krawędzi", "l": 1, "op": "mesh.select_mode", "km": "Mesh", "p": {"type": "EDGE"}, "doc": "modeling/meshes/selecting/introduction.html"},
            {"k": "3", "en": "Face select", "pl": "Zaznaczanie ścian", "l": 1, "op": "mesh.select_mode", "km": "Mesh", "p": {"type": "FACE"}, "doc": "modeling/meshes/selecting/introduction.html"},
            {"k": "Shift+1|Shift+2|Shift+3", "en": "Add a select mode (mixed)", "pl": "Dodaj tryb zaznaczania (mieszany)", "l": 3, "op": "mesh.select_mode", "km": "Mesh", "p": [{"type": "VERT", "use_extend": true}, {"type": "EDGE", "use_extend": true}, {"type": "FACE", "use_extend": true}], "doc": "modeling/meshes/selecting/introduction.html"}
          ]
        },
        {
          "name": {"en": "Selecting", "pl": "Zaznaczanie"},
          "items": [
            {"k": "Alt+LMB", "en": "Select edge / face loop", "pl": "Zaznacz pętlę krawędzi / ścian", "l": 1, "h": {"en": "Add Shift to extend.", "pl": "Z Shift dodaje do zaznaczenia."}, "op": "mesh.loop_select", "km": "Mesh", "doc": "modeling/meshes/selecting/loops.html#bpy-ops-mesh-loop-select"},
            {"k": "Ctrl+Alt+LMB", "en": "Select edge ring", "pl": "Zaznacz pierścień krawędzi", "l": 2, "op": "mesh.edgering_select", "km": "Mesh", "doc": "modeling/meshes/selecting/loops.html"},
            {"k": "Ctrl+LMB", "en": "Select shortest path", "pl": "Zaznacz najkrótszą ścieżkę", "l": 2, "h": {"en": "Ctrl+Shift+Click fills the region between.", "pl": "Ctrl+Shift+klik wypełnia region pomiędzy."}, "op": "mesh.shortest_path_pick", "km": "Mesh", "doc": "modeling/meshes/selecting/linked.html#bpy-ops-mesh-shortest-path-pick"},
            {"k": "L", "en": "Select linked under cursor", "pl": "Zaznacz połączone pod kursorem", "l": 1, "h": {"en": "Shift+L deselects linked.", "pl": "Shift+L odznacza połączone."}, "op": "mesh.select_linked_pick", "km": "Mesh", "doc": "modeling/meshes/selecting/linked.html#bpy-ops-mesh-select-linked-pick"},
            {"k": "Ctrl+L", "en": "Select all linked to selection", "pl": "Zaznacz wszystko połączone z zaznaczeniem", "l": 2, "op": "mesh.select_linked", "km": "Mesh", "doc": "modeling/meshes/selecting/linked.html#bpy-ops-mesh-select-linked"},
            {"k": "Shift+G", "en": "Select similar menu", "pl": "Menu zaznacz podobne", "l": 2, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_edit_mesh_select_similar"}, "doc": "modeling/meshes/selecting/similar.html"},
            {"k": "Ctrl+Shift+M", "en": "Select mirror", "pl": "Zaznacz lustrzane", "l": 3, "op": "mesh.select_mirror", "km": "Mesh", "doc": "modeling/meshes/selecting/mirror.html#bpy-ops-mesh-select-mirror"}
          ]
        },
        {
          "name": {"en": "Modeling tools", "pl": "Narzędzia modelowania"},
          "items": [
            {"k": "E", "en": "Extrude", "pl": "Wytłocz (extrude)", "l": 1, "op": "view3d.edit_mesh_extrude_move_normal", "km": "Mesh", "doc": "modeling/meshes/editing/mesh/extrude.html"},
            {"k": "Alt+E", "en": "Extrude menu (individual, along normals…)", "pl": "Menu wytłaczania (indywidualnie, wzdłuż normalnych…)", "l": 2, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_edit_mesh_extrude"}, "doc": "modeling/meshes/editing/mesh/extrude.html"},
            {"k": "I", "en": "Inset faces", "pl": "Wstaw ściany (inset)", "l": 1, "h": {"en": "Press I again for individual insets.", "pl": "Wciśnij I ponownie, by wstawić osobno."}, "op": "mesh.inset", "km": "Mesh", "doc": "modeling/meshes/editing/face/inset_faces.html#bpy-ops-mesh-inset"},
            {"k": "Ctrl+B", "en": "Bevel edges", "pl": "Fazuj krawędzie (bevel)", "l": 1, "h": {"en": "Wheel = segments.", "pl": "Kółko = liczba segmentów."}, "op": "mesh.bevel", "km": "Mesh", "doc": "modeling/meshes/editing/edge/bevel.html#bpy-ops-mesh-bevel"},
            {"k": "Ctrl+Shift+B", "en": "Bevel vertices", "pl": "Fazuj wierzchołki", "l": 2, "op": "mesh.bevel", "km": "Mesh", "p": {"affect": "VERTICES"}, "doc": "modeling/meshes/editing/edge/bevel.html#bpy-ops-mesh-bevel"},
            {"k": "Ctrl+R", "en": "Loop cut and slide", "pl": "Cięcie pętlą i przesunięcie", "l": 1, "h": {"en": "Wheel = number of cuts, click, then slide. Right-click keeps it centred.", "pl": "Kółko = liczba cięć, klik, potem przesuń. PPM zostawia na środku."}, "op": "mesh.loopcut_slide", "km": "Mesh", "doc": "modeling/meshes/editing/edge/loopcut_slide.html#bpy-ops-mesh-loopcut-slide"},
            {"k": "Ctrl+Shift+R", "en": "Offset edge loops", "pl": "Przesunięte pętle krawędzi", "l": 3, "op": "mesh.offset_edge_loops_slide", "km": "Mesh", "doc": "modeling/meshes/editing/edge/offset_edge_slide.html"},
            {"k": "K", "en": "Knife", "pl": "Nóż", "l": 1, "h": {"en": "Enter to confirm. Shift+K cuts only selected.", "pl": "Enter zatwierdza. Shift+K tnie tylko zaznaczone."}, "op": "mesh.knife_tool", "km": "Mesh", "doc": "modeling/meshes/editing/mesh/knife_topology_tool.html#bpy-ops-mesh-knife"},
            {"k": "F", "en": "Fill: make edge / face", "pl": "Wypełnij: utwórz krawędź / ścianę", "l": 1, "op": "mesh.edge_face_add", "km": "Mesh", "doc": "modeling/meshes/editing/vertex/make_face_edge.html"},
            {"k": "J", "en": "Connect vertex path", "pl": "Połącz wierzchołki ścieżką", "l": 2, "op": "mesh.vert_connect_path", "km": "Mesh", "doc": "modeling/meshes/editing/vertex/connect_vertex_path.html#bpy-ops-mesh-vert-connect-path"},
            {"k": "Ctrl+RMB", "en": "Extrude to mouse cursor", "pl": "Wytłocz do kursora myszy", "l": 2, "op": "mesh.dupli_extrude_cursor", "km": "Mesh", "doc": "modeling/meshes/editing/vertex/extrude_cursor.html"},
            {"k": "Shift+D", "en": "Duplicate", "pl": "Duplikuj", "l": 1, "op": "mesh.duplicate_move", "km": "Mesh", "doc": "modeling/meshes/editing/mesh/duplicate.html"},
            {"k": "P", "en": "Separate into a new object", "pl": "Oddziel do nowego obiektu", "l": 2, "op": "mesh.separate", "km": "Mesh", "doc": "modeling/meshes/editing/mesh/separate.html#bpy-ops-mesh-separate"},
            {"k": "Y", "en": "Split (disconnect)", "pl": "Rozdziel (odłącz)", "l": 3, "op": "mesh.split", "km": "Mesh", "doc": "modeling/meshes/editing/mesh/split.html"},
            {"k": "V", "en": "Rip", "pl": "Rozerwij (rip)", "l": 3, "h": {"en": "Alt+V rips and fills.", "pl": "Alt+V rozrywa i wypełnia."}, "op": "mesh.rip_move", "km": "Mesh", "doc": "modeling/meshes/editing/vertex/rip_vertices.html#bpy-ops-mesh-rip-move"}
          ]
        },
        {
          "name": {"en": "Sliding & shaping", "pl": "Przesuwanie i kształtowanie"},
          "items": [
            {"k": "G G", "en": "Edge / vertex slide", "pl": "Przesuń wzdłuż krawędzi", "l": 2, "h": {"en": "Press G twice.", "pl": "Wciśnij G dwa razy."}, "op": "transform.translate", "km": "Mesh", "doc": "modeling/meshes/editing/edge/edge_slide.html"},
            {"k": "Shift+V", "en": "Vertex slide", "pl": "Przesuń wierzchołek", "l": 2, "op": "transform.vert_slide", "km": "Mesh", "doc": "modeling/meshes/editing/vertex/slide_vertices.html"},
            {"k": "Shift+E", "en": "Edge crease (for subdivision)", "pl": "Zagięcie krawędzi (crease dla subdivision)", "l": 2, "op": "transform.edge_crease", "km": "Mesh", "doc": "modeling/meshes/editing/edge/edge_data.html#bpy-ops-transform-edge-crease"},
            {"k": "Alt+S", "en": "Shrink / fatten along normals", "pl": "Skurcz / pogrub wzdłuż normalnych", "l": 2, "op": "transform.shrink_fatten", "km": "Mesh", "doc": "modeling/meshes/editing/mesh/transform/shrink-fatten.html"},
            {"k": "Shift+Alt+S", "en": "To sphere", "pl": "Do kuli", "l": 3, "op": "transform.tosphere", "km": "Mesh", "doc": "modeling/meshes/editing/mesh/transform/to_sphere.html"},
            {"k": "Shift+W", "en": "Bend", "pl": "Zegnij", "l": 3, "op": "transform.bend", "km": "Mesh", "doc": "modeling/meshes/editing/mesh/transform/bend.html"},
            {"k": "Ctrl+Shift+Alt+S", "en": "Shear", "pl": "Pochylenie (shear)", "l": 3, "op": "transform.shear", "km": "Mesh", "doc": "modeling/meshes/editing/mesh/transform/shear.html"},
            {"k": "O", "en": "Toggle proportional editing", "pl": "Przełącz edycję proporcjonalną", "l": 2, "op": "wm.context_toggle", "km": "Mesh", "doc": "editors/3dview/controls/proportional_editing.html"}
          ]
        },
        {
          "name": {"en": "Delete & merge", "pl": "Usuwanie i scalanie"},
          "items": [
            {"k": "X", "en": "Delete menu", "pl": "Menu usuwania", "l": 1, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_edit_mesh_delete"}, "doc": "modeling/meshes/editing/mesh/delete.html"},
            {"k": "Ctrl+X", "en": "Dissolve (keeps surface)", "pl": "Rozpuść (zachowuje powierzchnię)", "l": 2, "op": "mesh.dissolve_mode", "km": "Mesh", "doc": "modeling/meshes/editing/mesh/delete.html"},
            {"k": "M", "en": "Merge menu (center, by distance…)", "pl": "Menu scalania (środek, wg odległości…)", "l": 1, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_edit_mesh_merge"}, "doc": "modeling/meshes/editing/mesh/merge.html"},
            {"k": "Alt+M", "en": "Split menu", "pl": "Menu rozdzielania", "l": 3, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_edit_mesh_split"}, "doc": "modeling/meshes/editing/mesh/split.html"}
          ]
        },
        {
          "name": {"en": "Menus", "pl": "Menu"},
          "items": [
            {"k": "Ctrl+V", "en": "Vertex menu", "pl": "Menu wierzchołków", "l": 2, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_edit_mesh_vertices"}},
            {"k": "Ctrl+E", "en": "Edge menu (seams, sharp, bridge…)", "pl": "Menu krawędzi (seam, sharp, bridge…)", "l": 2, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_edit_mesh_edges"}, "doc": "modeling/meshes/editing/edge/edge_data.html"},
            {"k": "Ctrl+F", "en": "Face menu", "pl": "Menu ścian", "l": 2, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_edit_mesh_faces"}},
            {"k": "Alt+N", "en": "Normals menu", "pl": "Menu normalnych", "l": 2, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_edit_mesh_normals"}, "doc": "modeling/meshes/editing/mesh/normals.html"},
            {"k": "U", "en": "UV unwrap menu", "pl": "Menu rozwijania UV", "l": 2, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_uv_map"}, "doc": "modeling/meshes/uv/editing.html"},
            {"k": "Ctrl+G", "en": "Vertex groups menu", "pl": "Menu grup wierzchołków", "l": 3, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_vertex_group"}, "doc": "modeling/meshes/editing/vertex/vertex_groups.html"},
            {"k": "Ctrl+H", "en": "Hooks menu", "pl": "Menu hooków", "l": 3, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_hook"}, "doc": "modeling/meshes/editing/vertex/hooks.html"}
          ]
        },
        {
          "name": {"en": "Normals & topology", "pl": "Normalne i topologia"},
          "items": [
            {"k": "Shift+N", "en": "Recalculate normals outside", "pl": "Przelicz normalne na zewnątrz", "l": 1, "op": "mesh.normals_make_consistent", "km": "Mesh", "doc": "modeling/meshes/editing/mesh/normals.html#bpy-ops-mesh-normals-make-consistent"},
            {"k": "Ctrl+Shift+N", "en": "Recalculate normals inside", "pl": "Przelicz normalne do środka", "l": 3, "op": "mesh.normals_make_consistent", "km": "Mesh", "p": {"inside": true}, "doc": "modeling/meshes/editing/mesh/normals.html"},
            {"k": "Alt+J", "en": "Triangles to quads", "pl": "Trójkąty na czworokąty", "l": 2, "op": "mesh.tris_convert_to_quads", "km": "Mesh", "doc": "modeling/meshes/editing/face/triangles_quads.html#bpy-ops-mesh-tris-convert-to-quads"},
            {"k": "Ctrl+T", "en": "Triangulate faces", "pl": "Trianguluj ściany", "l": 3, "op": "mesh.quads_convert_to_tris", "km": "Mesh", "doc": "modeling/meshes/editing/face/triangulate_faces.html#bpy-ops-mesh-quads-convert-to-tris"},
            {"k": "H|Shift+H|Alt+H", "en": "Hide / hide unselected / reveal", "pl": "Ukryj / ukryj niezaznaczone / odkryj", "l": 2, "op": ["mesh.hide", "mesh.hide", "mesh.reveal"], "km": "Mesh"}
          ]
        },
        {
          "name": {"en": "While beveling (Ctrl+B)", "pl": "Podczas bevela (Ctrl+B)"},
          "items": [
            {"k": "Wheel", "en": "More / fewer segments", "pl": "Więcej / mniej segmentów", "l": 2, "op": "SEGMENTS_UP", "km": "Bevel Modal Map", "doc": "modeling/meshes/editing/edge/bevel.html"},
            {"k": "P", "en": "Adjust profile shape", "pl": "Dostosuj kształt profilu", "l": 3, "op": "VALUE_PROFILE", "km": "Bevel Modal Map", "doc": "modeling/meshes/editing/edge/bevel.html"},
            {"k": "V", "en": "Switch vertices / edges", "pl": "Przełącz wierzchołki / krawędzie", "l": 3, "op": "AFFECT_CHANGE", "km": "Bevel Modal Map", "doc": "modeling/meshes/editing/edge/bevel.html"},
            {"k": "C", "en": "Toggle clamp overlap", "pl": "Przełącz clamp overlap", "l": 3, "op": "CLAMP_OVERLAP_TOGGLE", "km": "Bevel Modal Map", "doc": "modeling/meshes/editing/edge/bevel.html"},
            {"k": "H", "en": "Toggle harden normals", "pl": "Przełącz harden normals", "l": 3, "op": "HARDEN_NORMALS_TOGGLE", "km": "Bevel Modal Map", "doc": "modeling/meshes/editing/edge/bevel.html"}
          ]
        },
        {
          "name": {"en": "While using the knife (K)", "pl": "Podczas cięcia nożem (K)"},
          "items": [
            {"k": "C", "en": "Cut through (all layers)", "pl": "Tnij na wylot", "l": 2, "op": "CUT_THROUGH_TOGGLE", "km": "Knife Tool Modal Map", "doc": "modeling/meshes/editing/mesh/knife_topology_tool.html"},
            {"k": "Shift|Ctrl", "en": "Snap to midpoints / ignore snapping (hold)", "pl": "Przyciągaj do środków / ignoruj przyciąganie", "l": 3, "op": ["SNAP_MIDPOINTS_ON", "IGNORE_SNAP_ON"], "km": "Knife Tool Modal Map", "doc": "modeling/meshes/editing/mesh/knife_topology_tool.html"},
            {"k": "A", "en": "Angle snapping", "pl": "Przyciąganie kąta", "l": 3, "op": "ANGLE_SNAP_TOGGLE", "km": "Knife Tool Modal Map", "doc": "modeling/meshes/editing/mesh/knife_topology_tool.html"},
            {"k": "X|Y|Z", "en": "Constrain the cut to an axis", "pl": "Ogranicz cięcie do osi", "l": 3, "op": ["X_AXIS", "Y_AXIS", "Z_AXIS"], "km": "Knife Tool Modal Map", "doc": "modeling/meshes/editing/mesh/knife_topology_tool.html"},
            {"k": "Enter|Space", "en": "Confirm cut", "pl": "Zatwierdź cięcie", "l": 1, "op": ["CONFIRM", "CONFIRM"], "km": "Knife Tool Modal Map", "doc": "modeling/meshes/editing/mesh/knife_topology_tool.html"}
          ]
        }
      ]
    },
    {
      "id": "sculpt",
      "icon": "🗿",
      "name": {"en": "Sculpt Mode", "pl": "Tryb Sculpt"},
      "where": {"en": "3D Viewport → Sculpt Mode (Blender 5.2 brush assets)", "pl": "Widok 3D → Sculpt Mode (pędzle-assety Blendera 5.2)"},
      "tips": [{"en": "Block out with big brushes and low resolution, remesh (Ctrl+R), then add detail — never start with millions of polygons.", "pl": "Zacznij od dużych pędzli i niskiej rozdzielczości, remesh (Ctrl+R), potem detal — nigdy od milionów poligonów."}, {"en": "X/Y/Z symmetry buttons live in the header (top-right). X is on by default.", "pl": "Przyciski symetrii X/Y/Z są w nagłówku (prawy górny róg). X jest domyślnie włączony."}, {"en": "A graphics tablet with pressure makes sculpting dramatically easier.", "pl": "Tablet graficzny z naciskiem ogromnie ułatwia rzeźbienie."}],
      "groups": [
        {
          "name": {"en": "Brush control", "pl": "Sterowanie pędzlem"},
          "items": [
            {"k": "F", "en": "Brush radius", "pl": "Promień pędzla", "l": 1, "h": {"en": "Move the mouse, click to set — or type a number.", "pl": "Rusz myszą, kliknij — albo wpisz liczbę."}, "op": "wm.radial_control", "km": "Sculpt", "doc": "sculpt_paint/brush/brush_settings.html"},
            {"k": "Shift+F", "en": "Brush strength", "pl": "Siła pędzla", "l": 1, "op": "wm.radial_control", "km": "Sculpt", "doc": "sculpt_paint/brush/brush_settings.html"},
            {"k": "LBracket|RBracket", "en": "Smaller / bigger brush", "pl": "Mniejszy / większy pędzel", "l": 2, "op": ["brush.scale_size", "brush.scale_size"], "km": "Sculpt", "doc": "sculpt_paint/brush/brush_settings.html"},
            {"k": "Ctrl+LMB", "en": "Invert brush (add ↔ subtract)", "pl": "Odwróć pędzel (dodaj ↔ odejmij)", "l": 1, "op": "sculpt.brush_stroke", "km": "Sculpt", "p": {"mode": "INVERT"}, "doc": "sculpt_paint/sculpting/controls.html"},
            {"k": "Shift+LMB", "en": "Smooth while held", "pl": "Wygładzaj, dopóki trzymasz", "l": 1, "op": "sculpt.brush_stroke", "km": "Sculpt", "p": {"brush_toggle": "SMOOTH"}, "doc": "sculpt_paint/sculpting/controls.html"},
            {"k": "Alt+LMB", "en": "Paint mask while held", "pl": "Maluj maskę, dopóki trzymasz", "l": 2, "h": {"en": "Ctrl+Alt+drag erases the mask.", "pl": "Ctrl+Alt+przeciągnij wymazuje maskę."}, "op": "sculpt.brush_stroke", "km": "Sculpt", "p": {"brush_toggle": "MASK"}, "doc": "sculpt_paint/sculpting/controls.html"},
            {"k": "Shift+Space", "en": "Brush asset popup", "pl": "Okno pędzli (assety)", "l": 1, "h": {"en": "All brushes, searchable — just start typing.", "pl": "Wszystkie pędzle z wyszukiwarką — zacznij pisać."}, "op": "wm.call_asset_shelf_popover", "km": "Sculpt", "doc": "sculpt_paint/brush/brush_management.html"},
            {"k": "Ctrl+F", "en": "Rotate brush texture", "pl": "Obróć teksturę pędzla", "l": 3, "op": "wm.radial_control", "km": "Sculpt", "doc": "sculpt_paint/brush/texture.html"},
            {"k": "Shift+S", "en": "Toggle stabilize stroke", "pl": "Przełącz stabilizację pociągnięcia", "l": 3, "op": "wm.context_toggle", "km": "Sculpt", "doc": "sculpt_paint/brush/stroke.html"},
            {"k": "Shift+RMB", "en": "Set rotation pivot on the surface", "pl": "Ustaw punkt obrotu na powierzchni", "l": 3, "op": "sculpt.set_pivot_position", "km": "Sculpt", "doc": "sculpt_paint/sculpting/editing/sculpt.html"}
          ]
        },
        {
          "name": {"en": "Brushes (Essentials)", "pl": "Pędzle (Essentials)"},
          "items": [
            {"k": "V", "en": "Draw", "pl": "Draw (rysowanie)", "l": 1, "op": "brush.asset_activate", "km": "Sculpt", "p": {"relative_asset_identifier": "brushes/essentials_brushes-mesh_sculpt.blend/Brush/Draw"}, "doc": "sculpt_paint/sculpting/brushes/brush_types.html"},
            {"k": "S", "en": "Smooth", "pl": "Smooth (wygładzanie)", "l": 1, "op": "brush.asset_activate", "km": "Sculpt", "p": {"relative_asset_identifier": "brushes/essentials_brushes-mesh_sculpt.blend/Brush/Smooth"}, "doc": "sculpt_paint/sculpting/brushes/smooth.html"},
            {"k": "C", "en": "Clay Strips", "pl": "Clay Strips (paski gliny)", "l": 1, "op": "brush.asset_activate", "km": "Sculpt", "p": {"relative_asset_identifier": "brushes/essentials_brushes-mesh_sculpt.blend/Brush/Clay Strips"}, "doc": "sculpt_paint/sculpting/brushes/brush_types.html"},
            {"k": "G", "en": "Grab", "pl": "Grab (chwytanie)", "l": 1, "op": "brush.asset_activate", "km": "Sculpt", "p": {"relative_asset_identifier": "brushes/essentials_brushes-mesh_sculpt.blend/Brush/Grab"}, "doc": "sculpt_paint/sculpting/brushes/grab.html"},
            {"k": "I", "en": "Inflate / Deflate", "pl": "Inflate / Deflate (nadmuchaj)", "l": 2, "op": "brush.asset_activate", "km": "Sculpt", "p": {"relative_asset_identifier": "brushes/essentials_brushes-mesh_sculpt.blend/Brush/Inflate/Deflate"}, "doc": "sculpt_paint/sculpting/brushes/brush_types.html"},
            {"k": "P", "en": "Pinch / Magnify", "pl": "Pinch / Magnify (ściśnij)", "l": 2, "op": "brush.asset_activate", "km": "Sculpt", "p": {"relative_asset_identifier": "brushes/essentials_brushes-mesh_sculpt.blend/Brush/Pinch/Magnify"}, "doc": "sculpt_paint/sculpting/brushes/brush_types.html"},
            {"k": "Shift+C", "en": "Crease Polish", "pl": "Crease Polish (zagięcie)", "l": 2, "op": "brush.asset_activate", "km": "Sculpt", "p": {"relative_asset_identifier": "brushes/essentials_brushes-mesh_sculpt.blend/Brush/Crease Polish"}, "doc": "sculpt_paint/sculpting/brushes/brush_types.html"},
            {"k": "Shift+T", "en": "Scrape / Fill", "pl": "Scrape / Fill (zeskrob / wypełnij)", "l": 2, "op": "brush.asset_activate", "km": "Sculpt", "p": {"relative_asset_identifier": "brushes/essentials_brushes-mesh_sculpt.blend/Brush/Scrape/Fill"}, "doc": "sculpt_paint/sculpting/brushes/brush_types.html"},
            {"k": "K", "en": "Snake Hook", "pl": "Snake Hook (wyciąganie)", "l": 2, "op": "brush.asset_activate", "km": "Sculpt", "p": {"relative_asset_identifier": "brushes/essentials_brushes-mesh_sculpt.blend/Brush/Snake Hook"}, "doc": "sculpt_paint/sculpting/brushes/snake_hook.html"},
            {"k": "M", "en": "Mask brush (press again to go back)", "pl": "Pędzel maski (ponownie = powrót)", "l": 2, "op": "brush.asset_activate", "km": "Sculpt", "p": {"relative_asset_identifier": "brushes/essentials_brushes-mesh_sculpt.blend/Brush/Mask"}, "doc": "sculpt_paint/sculpting/brushes/mask.html"}
          ]
        },
        {
          "name": {"en": "Masking", "pl": "Maskowanie"},
          "items": [
            {"k": "A", "en": "Mask pie menu", "pl": "Pie menu maski", "l": 2, "op": "wm.call_menu_pie", "km": "Sculpt", "p": {"name": "VIEW3D_MT_sculpt_mask_edit_pie"}, "doc": "sculpt_paint/sculpting/editing/mask.html"},
            {"k": "Alt+M", "en": "Clear mask", "pl": "Wyczyść maskę", "l": 1, "op": "paint.mask_flood_fill", "km": "Sculpt", "p": {"mode": "VALUE", "value": 0.0}, "doc": "sculpt_paint/sculpting/editing/mask.html"},
            {"k": "Ctrl+I", "en": "Invert mask", "pl": "Odwróć maskę", "l": 2, "op": "paint.mask_flood_fill", "km": "Sculpt", "p": {"mode": "INVERT"}, "doc": "sculpt_paint/sculpting/editing/mask.html"},
            {"k": "B", "en": "Box mask", "pl": "Maska prostokątem", "l": 2, "op": "paint.mask_box_gesture", "km": "Sculpt", "doc": "sculpt_paint/sculpting/editing/mask.html"},
            {"k": "Ctrl+Shift+RMB-Drag", "en": "Lasso mask", "pl": "Maska lasso", "l": 3, "h": {"en": "Ctrl+RMB-drag removes mask.", "pl": "Ctrl+PPM-przeciągnij usuwa maskę."}, "op": "paint.mask_lasso_gesture", "km": "Sculpt", "p": {"value": 1.0}, "doc": "sculpt_paint/sculpting/editing/mask.html"},
            {"k": "Shift+A", "en": "Expand mask from cursor", "pl": "Rozszerz maskę od kursora", "l": 2, "h": {"en": "Move the mouse to grow, click to confirm.", "pl": "Ruszaj myszą, by rosła; klik zatwierdza."}, "op": "sculpt.expand", "km": "Sculpt", "p": {"target": "MASK", "falloff_type": "GEODESIC"}, "doc": "sculpt_paint/sculpting/editing/expand.html"},
            {"k": "Alt+A", "en": "Auto-masking pie", "pl": "Pie auto-maskowania", "l": 3, "op": "wm.call_menu_pie", "km": "Sculpt", "p": {"name": "VIEW3D_MT_sculpt_automasking_pie"}, "doc": "sculpt_paint/sculpting/controls.html"}
          ]
        },
        {
          "name": {"en": "Face sets & visibility", "pl": "Face sety i widoczność"},
          "items": [
            {"k": "H", "en": "Hide the face set under the cursor", "pl": "Ukryj face set pod kursorem", "l": 2, "op": "sculpt.face_set_change_visibility", "km": "Sculpt", "p": {"mode": "HIDE_ACTIVE"}, "doc": "sculpt_paint/sculpting/editing/face_sets.html"},
            {"k": "Shift+H", "en": "Isolate the face set under the cursor (toggle)", "pl": "Izoluj face set pod kursorem (przełącz)", "l": 2, "op": "sculpt.face_set_change_visibility", "km": "Sculpt", "p": {"mode": "TOGGLE"}, "doc": "sculpt_paint/sculpting/editing/face_sets.html"},
            {"k": "Alt+H", "en": "Reveal all", "pl": "Odkryj wszystko", "l": 2, "op": "paint.hide_show_all", "km": "Sculpt", "doc": "sculpt_paint/selection_visibility.html"},
            {"k": "Alt+W", "en": "Face sets pie", "pl": "Pie face setów", "l": 3, "op": "wm.call_menu_pie", "km": "Sculpt", "p": {"name": "VIEW3D_MT_sculpt_face_sets_edit_pie"}, "doc": "sculpt_paint/sculpting/editing/face_sets.html"},
            {"k": "Shift+W", "en": "Expand a new face set from cursor", "pl": "Rozszerz nowy face set od kursora", "l": 3, "op": "sculpt.expand", "km": "Sculpt", "p": {"target": "FACE_SETS"}, "doc": "sculpt_paint/sculpting/editing/expand.html"},
            {"k": "Ctrl+W|Ctrl+Alt+W", "en": "Grow / shrink face set", "pl": "Powiększ / zmniejsz face set", "l": 3, "op": ["sculpt.face_set_edit", "sculpt.face_set_edit"], "km": "Sculpt", "doc": "sculpt_paint/sculpting/editing/face_sets.html"},
            {"k": "PgUp|PgDn", "en": "Grow / shrink the visible area", "pl": "Powiększ / zmniejsz widoczny obszar", "l": 3, "op": ["paint.visibility_filter", "paint.visibility_filter"], "km": "Sculpt", "doc": "sculpt_paint/selection_visibility.html"}
          ]
        },
        {
          "name": {"en": "Topology", "pl": "Topologia"},
          "items": [
            {"k": "R", "en": "Set voxel size (or Dyntopo detail)", "pl": "Ustaw rozmiar voksela (lub detal Dyntopo)", "l": 2, "op": "object.voxel_size_edit", "km": "Sculpt", "doc": "sculpt_paint/sculpting/tool_settings/dyntopo.html"},
            {"k": "Ctrl+R", "en": "Voxel remesh (uniform new topology)", "pl": "Voxel remesh (nowa, równa topologia)", "l": 1, "h": {"en": "Set the size with R first — smaller = more detail.", "pl": "Najpierw ustaw rozmiar klawiszem R — mniejszy = więcej detalu."}, "op": "object.voxel_remesh", "km": "Sculpt", "doc": "sculpt_paint/sculpting/tool_settings/dyntopo.html"},
            {"k": "Alt+1|Alt+2", "en": "Multires level down / up", "pl": "Poziom multires w dół / w górę", "l": 3, "op": ["object.subdivision_set", "object.subdivision_set"], "km": "Sculpt", "p": [{"level": -1, "relative": true}, {"level": 1, "relative": true}], "doc": "scene_layout/object/editing/modifiers.html"}
          ]
        }
      ]
    },
    {
      "id": "paint",
      "icon": "🖌",
      "name": {"en": "Paint Modes", "pl": "Tryby malowania"},
      "where": {"en": "Texture, Vertex and Weight Paint", "pl": "Texture, Vertex i Weight Paint"},
      "tips": [{"en": "Weight Paint with the armature in Pose Mode lets you move bones while painting and see the effect instantly.", "pl": "Weight Paint z armaturą w Pose Mode pozwala ruszać kośćmi w trakcie malowania i od razu widzieć efekt."}],
      "groups": [
        {
          "name": {"en": "Brush", "pl": "Pędzel"},
          "items": [
            {"k": "F", "en": "Brush radius", "pl": "Promień pędzla", "l": 1, "op": "wm.radial_control", "km": "Image Paint", "doc": "sculpt_paint/brush/brush_settings.html"},
            {"k": "Shift+F", "en": "Brush strength", "pl": "Siła pędzla", "l": 1, "op": "wm.radial_control", "km": "Image Paint", "doc": "sculpt_paint/brush/brush_settings.html"},
            {"k": "LBracket|RBracket", "en": "Smaller / bigger brush", "pl": "Mniejszy / większy pędzel", "l": 2, "op": ["brush.scale_size", "brush.scale_size"], "km": "Image Paint", "doc": "sculpt_paint/brush/brush_settings.html"},
            {"k": "Shift+Space", "en": "Brush asset popup", "pl": "Okno pędzli (assety)", "l": 1, "op": "wm.call_asset_shelf_popover", "km": "Image Paint", "doc": "sculpt_paint/brush/brush_management.html"},
            {"k": "Ctrl+LMB", "en": "Paint inverted (subtract / erase)", "pl": "Maluj odwrotnie (odejmij / wymaż)", "l": 2, "op": "paint.image_paint", "km": "Image Paint", "p": {"mode": "INVERT"}, "doc": "sculpt_paint/texture_paint/index.html"},
            {"k": "Shift+LMB", "en": "Smooth / blur while held", "pl": "Wygładzaj / rozmywaj, dopóki trzymasz", "l": 2, "op": "paint.image_paint", "km": "Image Paint", "p": {"brush_toggle": "SMOOTH"}, "doc": "sculpt_paint/texture_paint/index.html"},
            {"k": "Alt+E", "en": "Stroke method menu", "pl": "Menu metody pociągnięcia", "l": 3, "op": "wm.context_menu_enum", "km": "Image Paint", "doc": "sculpt_paint/brush/stroke.html"}
          ]
        },
        {
          "name": {"en": "Colour", "pl": "Kolor"},
          "items": [
            {"k": "Shift+X", "en": "Sample colour under cursor", "pl": "Pobierz kolor spod kursora", "l": 1, "op": "paint.sample_color", "km": "Image Paint", "doc": "sculpt_paint/texture_paint/index.html"},
            {"k": "Ctrl+Shift+X", "en": "Sample merged (what you see)", "pl": "Pobierz scalony kolor (to, co widać)", "l": 3, "op": "paint.sample_color", "km": "Image Paint", "p": {"merged": true}, "doc": "sculpt_paint/texture_paint/index.html"},
            {"k": "X", "en": "Swap primary / secondary colour", "pl": "Zamień kolor główny / drugi", "l": 2, "op": "paint.brush_colors_flip", "km": "Image Paint", "doc": "sculpt_paint/texture_paint/index.html"},
            {"k": "Ctrl+X", "en": "Fill selection with colour (Vertex Paint)", "pl": "Wypełnij zaznaczenie kolorem (Vertex Paint)", "l": 3, "op": "paint.vertex_color_set", "km": "Vertex Paint", "doc": "sculpt_paint/vertex_paint/editing.html"}
          ]
        },
        {
          "name": {"en": "Weight Paint", "pl": "Weight Paint"},
          "items": [
            {"k": "Shift+X", "en": "Sample weight", "pl": "Pobierz wagę", "l": 2, "op": "paint.weight_sample", "km": "Weight Paint", "doc": "sculpt_paint/weight_paint/editing.html"},
            {"k": "Ctrl+Shift+X", "en": "Pick vertex group under cursor", "pl": "Wybierz grupę wierzchołków spod kursora", "l": 3, "op": "paint.weight_sample_group", "km": "Weight Paint", "doc": "sculpt_paint/weight_paint/editing.html"},
            {"k": "Ctrl+X", "en": "Set weight on selection", "pl": "Ustaw wagę na zaznaczeniu", "l": 3, "op": "paint.weight_set", "km": "Weight Paint", "doc": "sculpt_paint/weight_paint/editing.html"},
            {"k": "Shift+A|Shift+Alt+A", "en": "Linear / radial gradient", "pl": "Gradient liniowy / radialny", "l": 3, "op": ["paint.weight_gradient", "paint.weight_gradient"], "km": "Weight Paint", "doc": "sculpt_paint/weight_paint/editing.html"},
            {"k": "K", "en": "Vertex group lock pie", "pl": "Pie blokady grup wierzchołków", "l": 3, "op": "wm.call_menu_pie", "km": "Weight Paint", "p": {"name": "VIEW3D_MT_wpaint_vgroup_lock_pie"}, "doc": "sculpt_paint/weight_paint/editing.html"}
          ]
        },
        {
          "name": {"en": "Selection masks", "pl": "Maski zaznaczenia"},
          "items": [
            {"k": "1", "en": "Toggle face selection mask", "pl": "Przełącz maskę zaznaczenia ścian", "l": 3, "op": "wm.context_toggle", "km": "Image Paint", "doc": "sculpt_paint/texture_paint/tool_settings/mask.html"},
            {"k": "2", "en": "Toggle vertex selection mask", "pl": "Przełącz maskę zaznaczenia wierzchołków", "l": 3, "op": "wm.context_toggle", "km": "Weight Paint", "doc": "sculpt_paint/texture_paint/tool_settings/mask.html"}
          ]
        }
      ]
    },
    {
      "id": "animation",
      "icon": "🎞",
      "name": {"en": "Animation", "pl": "Animacja"},
      "where": {"en": "3D Viewport, Timeline, Dope Sheet, Graph Editor", "pl": "Widok 3D, oś czasu, Dope Sheet, Graph Editor"},
      "tips": [{"en": "Block the poses first with Constant interpolation (T → Constant), then switch to Bézier — the pro 'blocking → spline' workflow.", "pl": "Najpierw ustaw kluczowe pozy z interpolacją Constant (T → Constant), potem przełącz na Bézier — profesjonalny workflow „blocking → spline”."}, {"en": "Animation lives on the object, not in the viewport: select the object to see its keys in the Timeline.", "pl": "Animacja należy do obiektu: zaznacz go, by zobaczyć jego klatki na osi czasu."}],
      "groups": [
        {
          "name": {"en": "Keyframes (3D Viewport)", "pl": "Klatki kluczowe (widok 3D)"},
          "items": [
            {"k": "I", "en": "Insert keyframe", "pl": "Wstaw klatkę kluczową", "l": 1, "h": {"en": "Keys the channels set in Preferences → Animation (location, rotation, scale by default).", "pl": "Kluczuje kanały z Preferencje → Animation (domyślnie położenie, obrót, skala)."}, "op": "anim.keyframe_insert", "km": "Object Mode", "doc": "animation/keyframes/editing.html"},
            {"k": "K", "en": "Insert keyframe menu (keying sets)", "pl": "Menu wstawiania klatek (keying sets)", "l": 2, "op": "anim.keyframe_insert_menu", "km": "Object Mode", "doc": "animation/keyframes/keying_sets.html"},
            {"k": "Alt+I", "en": "Delete keyframe", "pl": "Usuń klatkę kluczową", "l": 1, "op": "anim.keyframe_delete_v3d", "km": "Object Mode", "doc": "animation/keyframes/editing.html"},
            {"k": "Shift+K", "en": "Set active keying set", "pl": "Ustaw aktywny keying set", "l": 3, "op": "anim.keying_set_active_set", "km": "Object Mode", "doc": "animation/keyframes/keying_sets.html"}
          ]
        },
        {
          "name": {"en": "Playback", "pl": "Odtwarzanie"},
          "items": [
            {"k": "Space", "en": "Play / pause", "pl": "Odtwórz / pauza", "l": 1, "op": "screen.animation_play", "km": "Frames", "doc": "editors/timeline.html"},
            {"k": "Ctrl+Shift+Space", "en": "Play in reverse", "pl": "Odtwórz wstecz", "l": 2, "op": "screen.animation_play", "km": "Frames", "p": {"reverse": true}, "doc": "editors/timeline.html"},
            {"k": "Esc", "en": "Stop and return to start frame", "pl": "Zatrzymaj i wróć do klatki startowej", "l": 2, "op": "screen.animation_cancel", "km": "Frames", "doc": "editors/timeline.html"},
            {"k": "Left|Right", "en": "Previous / next frame", "pl": "Poprzednia / następna klatka", "l": 1, "op": ["screen.frame_offset", "screen.frame_offset"], "km": "Frames", "doc": "editors/timeline.html"},
            {"k": "Up|Down", "en": "Previous / next keyframe", "pl": "Poprzednia / następna klatka kluczowa", "l": 1, "h": {"en": "Changed in Blender 5.0: ↑ now jumps back, ↓ forward.", "pl": "Zmiana w Blenderze 5.0: ↑ skacze wstecz, ↓ do przodu."}, "op": ["screen.keyframe_jump", "screen.keyframe_jump"], "km": "Frames", "p": [{"next": false}, {"next": true}], "doc": "animation/animation_editors.html#bpy-ops-screen-keyframe-jump"},
            {"k": "Shift+Left|Shift+Right", "en": "Jump to start / end frame", "pl": "Skok do pierwszej / ostatniej klatki", "l": 2, "op": ["screen.frame_jump", "screen.frame_jump"], "km": "Frames", "doc": "editors/timeline.html"},
            {"k": "Ctrl+Left|Ctrl+Right", "en": "Jump back / forward by a time step", "pl": "Skok wstecz / naprzód o krok czasu", "l": 3, "op": ["screen.time_jump", "screen.time_jump"], "km": "Frames", "doc": "editors/timeline.html"},
            {"k": "Alt+Wheel", "en": "Scrub frames", "pl": "Przewijaj klatki", "l": 2, "op": "screen.frame_offset", "km": "Frames", "doc": "editors/timeline.html"}
          ]
        },
        {
          "name": {"en": "Timeline & markers", "pl": "Oś czasu i markery"},
          "items": [
            {"k": "M", "en": "Add marker", "pl": "Dodaj marker", "l": 2, "op": "marker.add", "km": "Markers", "doc": "animation/markers.html"},
            {"k": "Ctrl+B", "en": "Bind camera to marker (camera switching)", "pl": "Przypnij kamerę do markera (przełączanie kamer)", "l": 3, "op": "marker.camera_bind", "km": "Markers", "doc": "animation/markers.html"},
            {"k": "P", "en": "Set preview range", "pl": "Ustaw zakres podglądu", "l": 3, "op": "anim.previewrange_set", "km": "Animation", "doc": "editors/timeline.html"},
            {"k": "Alt+P", "en": "Clear preview range", "pl": "Wyczyść zakres podglądu", "l": 3, "op": "anim.previewrange_clear", "km": "Animation", "doc": "editors/timeline.html"},
            {"k": "Ctrl+Home|Ctrl+End", "en": "Set start / end frame to current", "pl": "Ustaw klatkę początkową / końcową na bieżącą", "l": 3, "op": ["anim.start_frame_set", "anim.end_frame_set"], "km": "Animation", "doc": "editors/timeline.html"},
            {"k": "Ctrl+T", "en": "Show frames / seconds", "pl": "Pokaż klatki / sekundy", "l": 3, "op": "wm.context_toggle", "km": "Animation", "doc": "editors/timeline.html"}
          ]
        },
        {
          "name": {"en": "Dope Sheet & Graph Editor", "pl": "Dope Sheet i Graph Editor"},
          "items": [
            {"k": "Ctrl+Tab", "en": "Switch Dope Sheet ↔ Graph Editor", "pl": "Przełącz Dope Sheet ↔ Graph Editor", "l": 2, "op": "wm.context_set_enum", "km": "Dopesheet Generic", "doc": "editors/graph_editor/introduction.html"},
            {"k": "T", "en": "Interpolation (constant, linear, Bézier…)", "pl": "Interpolacja (stała, liniowa, Bézier…)", "l": 1, "op": "action.interpolation_type", "km": "Dopesheet", "doc": "editors/graph_editor/fcurves/editing.html"},
            {"k": "Ctrl+E", "en": "Easing (ease in / out)", "pl": "Wygładzenie (ease in / out)", "l": 2, "op": "action.easing_type", "km": "Dopesheet", "doc": "editors/graph_editor/fcurves/editing.html"},
            {"k": "V", "en": "Handle type", "pl": "Typ uchwytów", "l": 2, "op": "action.handle_type", "km": "Dopesheet", "doc": "editors/graph_editor/fcurves/editing.html"},
            {"k": "Shift+E", "en": "Extrapolation (make cyclic…)", "pl": "Ekstrapolacja (zapętlenie…)", "l": 2, "op": "action.extrapolation_type", "km": "Dopesheet", "doc": "editors/graph_editor/fcurves/editing.html"},
            {"k": "R", "en": "Keyframe type (key, breakdown…)", "pl": "Typ klatki (key, breakdown…)", "l": 3, "op": "action.keyframe_type", "km": "Dopesheet", "doc": "editors/dope_sheet/editing.html"},
            {"k": "G|S", "en": "Move / scale keys in time", "pl": "Przesuń / skaluj klatki w czasie", "l": 1, "op": ["transform.transform", "transform.transform"], "km": "Dopesheet", "doc": "editors/dope_sheet/editing.html"},
            {"k": "Shift+D", "en": "Duplicate keys", "pl": "Duplikuj klatki", "l": 2, "op": "action.duplicate_move", "km": "Dopesheet", "doc": "editors/dope_sheet/editing.html"},
            {"k": "Ctrl+C|Ctrl+V", "en": "Copy / paste keys", "pl": "Kopiuj / wklej klatki", "l": 2, "op": ["action.copy", "action.paste"], "km": "Dopesheet", "doc": "editors/dope_sheet/editing.html"},
            {"k": "Ctrl+Shift+V", "en": "Paste flipped (mirror pose)", "pl": "Wklej odbite (lustrzana poza)", "l": 3, "op": "action.paste", "km": "Dopesheet", "p": {"flipped": true}, "doc": "editors/dope_sheet/editing.html"},
            {"k": "K", "en": "Select keys in the same frame column", "pl": "Zaznacz klatki w tej samej kolumnie", "l": 3, "op": "action.select_column", "km": "Dopesheet", "doc": "editors/dope_sheet/editing.html"},
            {"k": "LBracket|RBracket", "en": "Select all keys before / after the playhead", "pl": "Zaznacz klatki przed / za głowicą", "l": 3, "op": ["action.select_leftright", "action.select_leftright"], "km": "Dopesheet", "doc": "editors/dope_sheet/editing.html"},
            {"k": "Ctrl+G", "en": "Jump to selected keys", "pl": "Skocz do zaznaczonych klatek", "l": 3, "op": "action.frame_jump", "km": "Dopesheet", "doc": "editors/dope_sheet/editing.html"},
            {"k": "Home|NumDot", "en": "View all / view selected", "pl": "Pokaż wszystko / zaznaczone", "l": 1, "op": ["action.view_all", "action.view_selected"], "km": "Dopesheet", "doc": "editors/dope_sheet/navigating.html"},
            {"k": "Alt+S", "en": "Smoothing menu (Graph Editor)", "pl": "Menu wygładzania (Graph Editor)", "l": 3, "op": "wm.call_menu", "km": "Graph Editor", "p": {"name": "GRAPH_MT_key_smoothing"}, "doc": "editors/graph_editor/fcurves/editing.html"},
            {"k": "Alt+D", "en": "Blending menu (Graph Editor)", "pl": "Menu mieszania (Graph Editor)", "l": 3, "op": "wm.call_menu", "km": "Graph Editor", "p": {"name": "GRAPH_MT_key_blending"}, "doc": "editors/graph_editor/fcurves/editing.html"},
            {"k": "Ctrl+H", "en": "Toggle curve handles (Graph Editor)", "pl": "Pokaż / ukryj uchwyty (Graph Editor)", "l": 3, "op": "wm.context_toggle", "km": "Graph Editor", "doc": "editors/graph_editor/introduction.html"}
          ]
        }
      ]
    },
    {
      "id": "rigging",
      "icon": "🦴",
      "name": {"en": "Rigging & Posing", "pl": "Rigging i pozowanie"},
      "where": {"en": "Armature Edit Mode and Pose Mode", "pl": "Armatura w Edit Mode i Pose Mode"},
      "tips": [{"en": "Name bones with .L / .R suffixes — then mirror tools, symmetrize and flipped paste just work.", "pl": "Nazywaj kości z sufiksami .L / .R — wtedy lustrzane narzędzia, symetryzacja i wklejanie odbite działają same."}],
      "groups": [
        {
          "name": {"en": "Armature (Edit Mode)", "pl": "Armatura (Edit Mode)"},
          "items": [
            {"k": "Shift+A", "en": "Add bone", "pl": "Dodaj kość", "l": 1, "op": "armature.bone_primitive_add", "km": "Armature", "doc": "animation/armatures/bones/editing/index.html"},
            {"k": "E", "en": "Extrude bone", "pl": "Wytłocz kość", "l": 1, "op": "armature.extrude_move", "km": "Armature", "doc": "animation/armatures/bones/editing/extrude.html#bpy-ops-armature-extrude-move"},
            {"k": "Shift+E", "en": "Mirrored extrude (X-Axis Mirror)", "pl": "Wytłocz lustrzanie (X-Axis Mirror)", "l": 2, "op": "armature.extrude_forked", "km": "Armature", "doc": "animation/armatures/bones/editing/extrude.html"},
            {"k": "Ctrl+P", "en": "Parent bones (connected / keep offset)", "pl": "Rodzic kości (połączone / z przesunięciem)", "l": 1, "op": "armature.parent_set", "km": "Armature", "doc": "animation/armatures/bones/editing/parenting.html#bpy-ops-armature-parent-set"},
            {"k": "Alt+P", "en": "Clear bone parent", "pl": "Usuń rodzica kości", "l": 2, "op": "armature.parent_clear", "km": "Armature", "doc": "animation/armatures/bones/editing/parenting.html#bpy-ops-armature-parent-clear"},
            {"k": "Ctrl+R", "en": "Bone roll", "pl": "Obrót kości (roll)", "l": 2, "op": "transform.transform", "km": "Armature", "p": {"mode": "BONE_ROLL"}, "doc": "animation/armatures/bones/editing/bone_roll.html"},
            {"k": "Shift+N", "en": "Recalculate roll", "pl": "Przelicz roll", "l": 2, "op": "armature.calculate_roll", "km": "Armature", "doc": "animation/armatures/bones/editing/bone_roll.html"},
            {"k": "Alt+F", "en": "Switch bone direction", "pl": "Odwróć kierunek kości", "l": 2, "op": "armature.switch_direction", "km": "Armature", "doc": "animation/armatures/bones/editing/switch_direction.html#bpy-ops-armature-switch-direction"},
            {"k": "F", "en": "Fill between joints", "pl": "Wypełnij między stawami", "l": 3, "op": "armature.fill", "km": "Armature", "doc": "animation/armatures/bones/editing/fill_between_joints.html#bpy-ops-armature-fill"},
            {"k": "Ctrl+RMB", "en": "Extrude bone to mouse", "pl": "Wytłocz kość do kursora", "l": 3, "op": "armature.click_extrude", "km": "Armature", "doc": "animation/armatures/bones/editing/extrude.html"}
          ]
        },
        {
          "name": {"en": "Pose Mode", "pl": "Pose Mode"},
          "items": [
            {"k": "Ctrl+Tab", "en": "Toggle Pose Mode (armature selected)", "pl": "Przełącz Pose Mode (zaznaczona armatura)", "l": 1, "op": "view3d.object_mode_pie_or_toggle", "km": "Object Non-modal", "doc": "animation/armatures/posing/index.html"},
            {"k": "Alt+G|Alt+R|Alt+S", "en": "Clear bone location / rotation / scale", "pl": "Wyzeruj położenie / obrót / skalę kości", "l": 1, "op": ["pose.loc_clear", "pose.rot_clear", "pose.scale_clear"], "km": "Pose", "doc": "animation/armatures/posing/editing/clear.html"},
            {"k": "Ctrl+C|Ctrl+V", "en": "Copy / paste pose", "pl": "Kopiuj / wklej pozę", "l": 2, "op": ["pose.copy", "pose.paste"], "km": "Pose", "doc": "animation/armatures/posing/editing/copy_paste.html"},
            {"k": "Ctrl+Shift+V", "en": "Paste flipped (mirror left ↔ right)", "pl": "Wklej odbite (lewo ↔ prawo)", "l": 2, "op": "pose.paste", "km": "Pose", "p": {"flipped": true}, "doc": "animation/armatures/posing/editing/copy_paste.html"},
            {"k": "Shift+I", "en": "Add IK to bone", "pl": "Dodaj IK do kości", "l": 2, "op": "pose.ik_add", "km": "Pose", "doc": "animation/armatures/posing/editing/inverse_kinematics.html#bpy-ops-pose-ik-add"},
            {"k": "Ctrl+Alt+I", "en": "Remove IK", "pl": "Usuń IK", "l": 3, "op": "pose.ik_clear", "km": "Pose", "doc": "animation/armatures/posing/editing/inverse_kinematics.html"},
            {"k": "Ctrl+Shift+C", "en": "Add constraint with targets", "pl": "Dodaj więz z celami", "l": 3, "op": "pose.constraint_add_with_targets", "km": "Pose", "doc": "animation/constraints/index.html"},
            {"k": "LBracket|RBracket", "en": "Select parent / child bone", "pl": "Zaznacz kość rodzica / dziecka", "l": 2, "op": ["pose.select_hierarchy", "pose.select_hierarchy"], "km": "Pose", "doc": "animation/armatures/posing/selecting.html"},
            {"k": "Ctrl+Shift+M", "en": "Select mirrored bone", "pl": "Zaznacz lustrzaną kość", "l": 2, "op": "pose.select_mirror", "km": "Pose", "doc": "animation/armatures/posing/selecting.html"},
            {"k": "M", "en": "Move to bone collection", "pl": "Przenieś do kolekcji kości", "l": 2, "op": "armature.move_to_collection", "km": "Pose", "doc": "animation/armatures/bones/bone_collections.html"},
            {"k": "Shift+E", "en": "Breakdowner (in-between pose)", "pl": "Breakdowner (poza pośrednia)", "l": 3, "op": "pose.breakdown", "km": "Pose", "doc": "animation/armatures/posing/editing/in_betweens.html#bpy-ops-pose-breakdown"},
            {"k": "Ctrl+E|Alt+E", "en": "Push / relax pose", "pl": "Wzmocnij / rozluźnij pozę", "l": 3, "op": ["pose.push", "pose.relax"], "km": "Pose", "doc": "animation/armatures/posing/editing/in_betweens.html"},
            {"k": "Alt+P", "en": "Propagate pose menu", "pl": "Menu propagacji pozy", "l": 3, "op": "wm.call_menu", "km": "Pose", "p": {"name": "VIEW3D_MT_pose_propagate"}, "doc": "animation/armatures/posing/editing/propagate.html"},
            {"k": "Ctrl+A", "en": "Apply pose menu (e.g. pose as rest pose)", "pl": "Menu Apply (np. poza jako spoczynkowa)", "l": 3, "op": "wm.call_menu", "km": "Pose", "p": {"name": "VIEW3D_MT_pose_apply"}, "doc": "animation/armatures/posing/editing/apply.html"}
          ]
        }
      ]
    },
    {
      "id": "nodes",
      "icon": "🎨",
      "name": {"en": "Node Editors", "pl": "Edytory węzłów"},
      "where": {"en": "Shader, Geometry Nodes and Compositor", "pl": "Shader, Geometry Nodes i Compositor"},
      "tips": [{"en": "Ctrl+Shift+Click any node to preview it — the fastest way to understand a node tree.", "pl": "Ctrl+Shift+klik na dowolnym węźle pokazuje jego wynik — najszybszy sposób, by zrozumieć drzewo węzłów."}, {"en": "Frames (F) with clear names make node trees readable weeks later.", "pl": "Ramki (F) z czytelnymi nazwami sprawiają, że drzewo węzłów da się zrozumieć po tygodniach."}],
      "groups": [
        {
          "name": {"en": "Add & connect", "pl": "Dodawanie i łączenie"},
          "items": [
            {"k": "Shift+A", "en": "Add node", "pl": "Dodaj węzeł", "l": 1, "h": {"en": "Start typing to search.", "pl": "Zacznij pisać, by wyszukać."}, "op": "wm.call_menu", "km": "Node Editor", "p": {"name": "NODE_MT_add"}, "doc": "interface/controls/nodes/editing.html"},
            {"k": "LMB-Drag", "en": "Drag from a socket to connect", "pl": "Przeciągnij z gniazda, by połączyć", "l": 1, "op": "node.link", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html"},
            {"k": "J", "en": "Link selected nodes", "pl": "Połącz zaznaczone węzły", "l": 2, "h": {"en": "Shift+J replaces existing links.", "pl": "Shift+J zastępuje istniejące połączenia."}, "op": "node.link_make", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html#bpy-ops-node-link-make"},
            {"k": "Ctrl+RMB-Drag", "en": "Cut links", "pl": "Przetnij połączenia", "l": 1, "op": "node.links_cut", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html#bpy-ops-node-links-cut"},
            {"k": "Ctrl+Alt+RMB-Drag", "en": "Mute links", "pl": "Wycisz połączenia", "l": 3, "op": "node.links_mute", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html#bpy-ops-node-links-mute"},
            {"k": "Shift+RMB-Drag", "en": "Add reroute points", "pl": "Dodaj punkty przekierowania (reroute)", "l": 2, "op": "node.add_reroute", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html"},
            {"k": "Alt+LMB-Drag", "en": "Move node and detach its links", "pl": "Przesuń węzeł i odłącz połączenia", "l": 3, "op": "node.move_detach_links", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html"},
            {"k": "Shift+S", "en": "Swap node type (keeps links)", "pl": "Zamień typ węzła (zachowuje połączenia)", "l": 2, "op": "wm.call_menu", "km": "Node Editor", "p": {"name": "NODE_MT_swap"}, "doc": "interface/controls/nodes/editing.html"}
          ]
        },
        {
          "name": {"en": "Preview", "pl": "Podgląd"},
          "items": [
            {"k": "Ctrl+Shift+LMB", "en": "Preview node (connect to viewer / output)", "pl": "Podgląd węzła (połącz z viewerem / wyjściem)", "l": 1, "h": {"en": "Click again to cycle through outputs. Built in — no add-on needed.", "pl": "Klikaj ponownie, by przełączać wyjścia. Wbudowane — bez dodatków."}, "op": "node.select_link_viewer", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html"},
            {"k": "Shift+Alt+LMB", "en": "Connect to group / material output", "pl": "Połącz z wyjściem grupy / materiału", "l": 3, "op": "node.connect_to_output", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html"},
            {"k": "Ctrl+1|Ctrl+2|Ctrl+3", "en": "Store viewer slot 1–3", "pl": "Zapisz slot viewera 1–3", "l": 3, "h": {"en": "Then 1, 2, 3 jump the viewer back to that node.", "pl": "Potem 1, 2, 3 przełącza viewer z powrotem na ten węzeł."}, "op": "node.viewer_shortcut_set", "km": "Node Editor", "p": [{"viewer_index": 1}, {"viewer_index": 2}, {"viewer_index": 3}], "doc": "interface/controls/nodes/editing.html"}
          ]
        },
        {
          "name": {"en": "Edit & organize", "pl": "Edycja i porządek"},
          "items": [
            {"k": "G", "en": "Move nodes", "pl": "Przesuń węzły", "l": 1, "h": {"en": "Drop a node on a link to insert it.", "pl": "Upuść węzeł na połączenie, by go wstawić."}, "op": "node.translate_attach", "km": "Node Editor", "doc": "interface/controls/nodes/arranging.html"},
            {"k": "Shift+D", "en": "Duplicate", "pl": "Duplikuj", "l": 1, "op": "node.duplicate_move", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html"},
            {"k": "X|Del", "en": "Delete", "pl": "Usuń", "l": 1, "op": ["node.delete", "node.delete"], "km": "Node Editor", "doc": "interface/controls/nodes/editing.html"},
            {"k": "Ctrl+X", "en": "Delete and keep links (dissolve)", "pl": "Usuń i zachowaj połączenia", "l": 1, "op": "node.delete_reconnect", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html"},
            {"k": "M", "en": "Mute node", "pl": "Wycisz węzeł", "l": 2, "op": "node.mute_toggle", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html"},
            {"k": "H", "en": "Collapse node", "pl": "Zwiń węzeł", "l": 2, "op": "node.hide_toggle", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html"},
            {"k": "Ctrl+H", "en": "Hide unused sockets", "pl": "Ukryj nieużywane gniazda", "l": 2, "op": "node.hide_socket_toggle", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html"},
            {"k": "Shift+H", "en": "Toggle node preview", "pl": "Przełącz podgląd węzła", "l": 3, "op": "node.preview_toggle", "km": "Node Editor", "doc": "interface/controls/nodes/editing.html"},
            {"k": "F", "en": "Put selected in a new frame and name it", "pl": "Wstaw zaznaczone do nowej ramki i nazwij", "l": 2, "op": "node.join_named", "km": "Node Editor", "doc": "interface/controls/nodes/types/layout/frame.html#bpy-ops-node-join-named"},
            {"k": "Alt+P", "en": "Remove from frame", "pl": "Usuń z ramki", "l": 3, "op": "node.detach", "km": "Node Editor", "doc": "interface/controls/nodes/types/layout/frame.html"},
            {"k": "Ctrl+F", "en": "Find node", "pl": "Znajdź węzeł", "l": 2, "op": "node.find_node", "km": "Node Editor", "doc": "interface/controls/nodes/selecting.html"},
            {"k": "Home|NumDot", "en": "View all / view selected", "pl": "Pokaż wszystko / zaznaczone", "l": 1, "op": ["node.view_all", "node.view_selected"], "km": "Node Editor", "doc": "interface/controls/nodes/node_editors.html"}
          ]
        },
        {
          "name": {"en": "Node groups", "pl": "Grupy węzłów"},
          "items": [
            {"k": "Ctrl+G", "en": "Make group", "pl": "Utwórz grupę", "l": 1, "op": "node.group_make", "km": "Node Editor", "doc": "interface/controls/nodes/groups.html#bpy-ops-node-group-make"},
            {"k": "Tab", "en": "Enter / exit group", "pl": "Wejdź do / wyjdź z grupy", "l": 1, "op": "node.group_edit", "km": "Node Editor", "doc": "interface/controls/nodes/groups.html"},
            {"k": "Ctrl+Alt+G", "en": "Ungroup", "pl": "Rozgrupuj", "l": 2, "op": "node.group_ungroup", "km": "Node Editor", "doc": "interface/controls/nodes/groups.html#bpy-ops-node-group-ungroup"},
            {"k": "Ctrl+Tab", "en": "Exit group", "pl": "Wyjdź z grupy", "l": 3, "op": "node.group_edit", "km": "Node Editor", "p": {"exit": true}, "doc": "interface/controls/nodes/groups.html"}
          ]
        }
      ]
    },
    {
      "id": "uv",
      "icon": "🗺",
      "name": {"en": "UV Editing", "pl": "Edycja UV"},
      "where": {"en": "3D Viewport Edit Mode + UV Editor", "pl": "Widok 3D w Edit Mode + UV Editor"},
      "tips": [{"en": "Place seams where a real object would have them (like clothing seams), in hidden spots.", "pl": "Stawiaj szwy tam, gdzie miałby je prawdziwy obiekt (jak szwy ubrań), w niewidocznych miejscach."}, {"en": "Use a checker texture to spot stretching: squares should stay square.", "pl": "Użyj tekstury szachownicy, by wykryć rozciąganie: kwadraty powinny zostać kwadratami."}],
      "groups": [
        {
          "name": {"en": "Unwrap (3D Viewport, Edit Mode)", "pl": "Rozwijanie (widok 3D, Edit Mode)"},
          "items": [
            {"k": "U", "en": "Unwrap menu", "pl": "Menu rozwijania", "l": 1, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_uv_map"}, "doc": "modeling/meshes/uv/editing.html"},
            {"k": "Ctrl+E", "en": "Edge menu → Mark / Clear Seam", "pl": "Menu krawędzi → Mark / Clear Seam", "l": 1, "op": "wm.call_menu", "km": "Mesh", "p": {"name": "VIEW3D_MT_edit_mesh_edges"}, "doc": "modeling/meshes/uv/unwrapping/seams.html"}
          ]
        },
        {
          "name": {"en": "Select (UV Editor)", "pl": "Zaznaczanie (UV Editor)"},
          "items": [
            {"k": "1|2|3", "en": "Vertex / edge / face select", "pl": "Zaznaczanie wierzchołków / krawędzi / ścian", "l": 2, "op": ["uv.select_mode", "uv.select_mode", "uv.select_mode"], "km": "UV Editor", "doc": "editors/uv/selecting.html"},
            {"k": "4", "en": "Toggle island selection", "pl": "Przełącz zaznaczanie wysp", "l": 2, "op": "wm.context_toggle", "km": "UV Editor", "doc": "editors/uv/selecting.html"},
            {"k": "L", "en": "Select island under cursor", "pl": "Zaznacz wyspę pod kursorem", "l": 1, "op": "uv.select_linked_pick", "km": "UV Editor", "doc": "editors/uv/selecting.html"},
            {"k": "Ctrl+L", "en": "Select linked", "pl": "Zaznacz połączone", "l": 2, "op": "uv.select_linked", "km": "UV Editor", "doc": "editors/uv/selecting.html"},
            {"k": "Alt+LMB", "en": "Select UV loop", "pl": "Zaznacz pętlę UV", "l": 2, "op": "uv.select_loop", "km": "UV Editor", "doc": "editors/uv/selecting.html"},
            {"k": "Shift+P", "en": "Select pinned", "pl": "Zaznacz przypięte", "l": 3, "op": "uv.select_pinned", "km": "UV Editor", "doc": "editors/uv/selecting.html"}
          ]
        },
        {
          "name": {"en": "Edit UVs", "pl": "Edycja UV"},
          "items": [
            {"k": "G|R|S", "en": "Move / rotate / scale UVs", "pl": "Przesuń / obróć / skaluj UV", "l": 1, "op": ["transform.translate", "transform.rotate", "transform.resize"], "km": "UV Editor", "doc": "modeling/meshes/uv/editing.html"},
            {"k": "P", "en": "Pin", "pl": "Przypnij", "l": 2, "h": {"en": "Pinned UVs stay put when you unwrap again.", "pl": "Przypięte UV zostają na miejscu przy ponownym rozwinięciu."}, "op": "uv.pin", "km": "UV Editor", "doc": "modeling/meshes/uv/editing.html"},
            {"k": "Alt+P", "en": "Unpin", "pl": "Odepnij", "l": 2, "op": "uv.pin", "km": "UV Editor", "p": {"clear": true}, "doc": "modeling/meshes/uv/editing.html"},
            {"k": "Alt+V", "en": "Stitch", "pl": "Zszyj (stitch)", "l": 2, "op": "uv.stitch", "km": "UV Editor", "doc": "modeling/meshes/uv/editing.html#bpy-ops-uv-stitch"},
            {"k": "V", "en": "Rip", "pl": "Rozerwij (rip)", "l": 3, "op": "uv.rip_move", "km": "UV Editor", "doc": "modeling/meshes/uv/tools/rip.html"},
            {"k": "M", "en": "Merge menu", "pl": "Menu scalania", "l": 2, "op": "wm.call_menu", "km": "UV Editor", "p": {"name": "IMAGE_MT_uvs_merge"}, "doc": "modeling/meshes/uv/editing.html"},
            {"k": "Shift+W", "en": "Align menu", "pl": "Menu wyrównania", "l": 3, "op": "wm.call_menu", "km": "UV Editor", "p": {"name": "IMAGE_MT_uvs_align"}, "doc": "modeling/meshes/uv/editing.html"},
            {"k": "Shift+S", "en": "Snap pie", "pl": "Pie przyciągania", "l": 2, "op": "wm.call_menu_pie", "km": "UV Editor", "p": {"name": "IMAGE_MT_uvs_snap_pie"}, "doc": "modeling/meshes/uv/editing.html"},
            {"k": "Ctrl+C|Ctrl+V", "en": "Copy / paste UVs", "pl": "Kopiuj / wklej UV", "l": 3, "op": ["uv.copy", "uv.paste"], "km": "UV Editor", "doc": "modeling/meshes/uv/editing.html"},
            {"k": "Num4|Num6|Num8|Num2", "en": "Move UVs by one UDIM tile", "pl": "Przesuń UV o jeden kafel UDIM", "l": 3, "op": "uv.move_on_axis", "km": "UV Editor", "doc": "modeling/meshes/uv/workflows/udims.html"}
          ]
        }
      ]
    },
    {
      "id": "gpencil",
      "icon": "✏️",
      "name": {"en": "Grease Pencil", "pl": "Grease Pencil"},
      "where": {"en": "Grease Pencil object — Draw & Edit Mode", "pl": "Obiekt Grease Pencil — Draw i Edit Mode"},
      "tips": [{"en": "Hold D and drag in any editor to draw quick annotations — handy for notes and planning.", "pl": "Przytrzymaj D i przeciągnij w dowolnym edytorze, by rysować szybkie adnotacje — idealne do notatek."}],
      "groups": [
        {
          "name": {"en": "Draw Mode", "pl": "Draw Mode"},
          "items": [
            {"k": "F|Shift+F", "en": "Brush radius / strength", "pl": "Promień / siła pędzla", "l": 1, "op": ["wm.radial_control", "wm.radial_control"], "km": "Grease Pencil Draw Mode", "doc": "grease_pencil/modes/draw/introduction.html"},
            {"k": "Shift+Space", "en": "Brush asset popup", "pl": "Okno pędzli (assety)", "l": 1, "op": "wm.call_asset_shelf_popover", "km": "Grease Pencil Draw Mode", "doc": "grease_pencil/modes/draw/introduction.html"},
            {"k": "B", "en": "Box erase", "pl": "Wymaż prostokątem", "l": 2, "op": "grease_pencil.erase_box", "km": "Grease Pencil Draw Mode", "doc": "grease_pencil/modes/draw/tools/erase.html"},
            {"k": "Ctrl+Alt+RMB-Drag", "en": "Lasso erase", "pl": "Wymaż lasso", "l": 3, "op": "grease_pencil.erase_lasso", "km": "Grease Pencil Draw Mode", "doc": "grease_pencil/modes/draw/tools/erase.html"},
            {"k": "U", "en": "Active material menu", "pl": "Menu aktywnego materiału", "l": 2, "op": "wm.call_menu", "km": "Grease Pencil Draw Mode", "p": {"name": "VIEW3D_MT_greasepencil_material_active"}, "doc": "grease_pencil/modes/draw/introduction.html"},
            {"k": "Y", "en": "Active layer menu", "pl": "Menu aktywnej warstwy", "l": 2, "op": "wm.call_menu", "km": "Grease Pencil Draw Mode", "p": {"name": "GREASE_PENCIL_MT_layer_active"}, "doc": "grease_pencil/modes/draw/introduction.html"},
            {"k": "I", "en": "Insert keyframe menu", "pl": "Menu wstawiania klatki", "l": 2, "op": "wm.call_menu", "km": "Grease Pencil Draw Mode", "p": {"name": "VIEW3D_MT_edit_greasepencil_animation"}, "doc": "grease_pencil/modes/draw/introduction.html"},
            {"k": "Shift+I", "en": "Insert blank frame", "pl": "Wstaw pustą klatkę", "l": 3, "op": "grease_pencil.insert_blank_frame", "km": "Grease Pencil Draw Mode", "doc": "grease_pencil/modes/draw/introduction.html"},
            {"k": "Ctrl+E", "en": "Interpolate between frames", "pl": "Interpoluj między klatkami", "l": 3, "op": "grease_pencil.interpolate", "km": "Grease Pencil Draw Mode", "doc": "grease_pencil/modes/draw/introduction.html"},
            {"k": "Shift+X", "en": "Sample colour", "pl": "Pobierz kolor", "l": 3, "op": "paint.sample_color", "km": "Grease Pencil Draw Mode", "doc": "grease_pencil/modes/draw/introduction.html"}
          ]
        },
        {
          "name": {"en": "Edit Mode", "pl": "Edit Mode"},
          "items": [
            {"k": "1|2|3", "en": "Point / stroke / segment select", "pl": "Zaznaczanie punktów / linii / segmentów", "l": 2, "op": ["grease_pencil.set_selection_mode", "grease_pencil.set_selection_mode", "grease_pencil.set_selection_mode"], "km": "Grease Pencil Edit Mode", "doc": "grease_pencil/modes/edit/selecting.html"},
            {"k": "F", "en": "Close stroke", "pl": "Zamknij linię", "l": 2, "op": "grease_pencil.cyclical_set", "km": "Grease Pencil Edit Mode", "doc": "grease_pencil/modes/edit/stroke_menu.html"},
            {"k": "Alt+C", "en": "Toggle cyclic", "pl": "Przełącz zapętlenie", "l": 3, "op": "grease_pencil.cyclical_set", "km": "Grease Pencil Edit Mode", "doc": "grease_pencil/modes/edit/stroke_menu.html"},
            {"k": "E", "en": "Extrude points", "pl": "Wytłocz punkty", "l": 2, "op": "grease_pencil.extrude_move", "km": "Grease Pencil Edit Mode", "doc": "grease_pencil/modes/edit/point_menu.html"},
            {"k": "Ctrl+J", "en": "Join strokes", "pl": "Połącz linie", "l": 3, "op": "grease_pencil.join_selection", "km": "Grease Pencil Edit Mode", "doc": "grease_pencil/modes/edit/stroke_menu.html"},
            {"k": "M", "en": "Move to layer", "pl": "Przenieś na warstwę", "l": 2, "op": "wm.call_menu", "km": "Grease Pencil Edit Mode", "p": {"name": "GREASE_PENCIL_MT_move_to_layer"}, "doc": "grease_pencil/modes/edit/stroke_menu.html"},
            {"k": "Alt+S", "en": "Stroke thickness", "pl": "Grubość linii", "l": 3, "op": "transform.transform", "km": "Grease Pencil Edit Mode", "p": {"mode": "CURVE_SHRINKFATTEN"}, "doc": "grease_pencil/modes/edit/point_menu.html"},
            {"k": "Shift+F", "en": "Stroke opacity", "pl": "Krycie linii", "l": 3, "op": "transform.transform", "km": "Grease Pencil Edit Mode", "p": {"mode": "GPENCIL_OPACITY"}, "doc": "grease_pencil/modes/edit/point_menu.html"},
            {"k": "Ctrl+Up|Ctrl+Down", "en": "Bring stroke forward / backward", "pl": "Przesuń linię do przodu / do tyłu", "l": 3, "op": ["grease_pencil.reorder", "grease_pencil.reorder"], "km": "Grease Pencil Edit Mode", "doc": "grease_pencil/modes/edit/stroke_menu.html"}
          ]
        }
      ]
    },
    {
      "id": "vse",
      "icon": "🎬",
      "name": {"en": "Video Editing", "pl": "Montaż wideo"},
      "where": {"en": "Video Sequencer — timeline", "pl": "Video Sequencer — oś czasu"},
      "tips": [{"en": "Set the project frame rate and resolution in Output Properties before importing clips.", "pl": "Ustaw liczbę klatek i rozdzielczość w Output Properties przed importem klipów."}],
      "groups": [
        {
          "name": {"en": "Cut & arrange", "pl": "Cięcie i układanie"},
          "items": [
            {"k": "K", "en": "Split strips at playhead", "pl": "Przetnij klipy na głowicy", "l": 1, "h": {"en": "Shift+K = hard split.", "pl": "Shift+K = twarde cięcie."}, "op": "sequencer.split", "km": "Sequencer", "doc": "video_editing/edit/montage/editing.html"},
            {"k": "Shift+D", "en": "Duplicate strips", "pl": "Duplikuj klipy", "l": 1, "op": "sequencer.duplicate_move", "km": "Sequencer", "doc": "video_editing/edit/montage/editing.html"},
            {"k": "X|Del", "en": "Delete strips", "pl": "Usuń klipy", "l": 1, "op": ["sequencer.delete", "sequencer.delete"], "km": "Sequencer", "doc": "video_editing/edit/montage/editing.html"},
            {"k": "Backspace", "en": "Remove gap at playhead", "pl": "Usuń przerwę na głowicy", "l": 2, "h": {"en": "Shift+Backspace removes all gaps.", "pl": "Shift+Backspace usuwa wszystkie przerwy."}, "op": "sequencer.gap_remove", "km": "Sequencer", "doc": "video_editing/edit/montage/editing.html"},
            {"k": "Shift+S", "en": "Snap strips to playhead", "pl": "Przyciągnij klipy do głowicy", "l": 2, "op": "sequencer.snap", "km": "Sequencer", "doc": "video_editing/edit/montage/editing.html"},
            {"k": "Alt+Left|Alt+Right", "en": "Swap with neighbouring strip", "pl": "Zamień z sąsiednim klipem", "l": 3, "op": ["sequencer.swap", "sequencer.swap"], "km": "Sequencer", "doc": "video_editing/edit/montage/editing.html"},
            {"k": "Ctrl+Alt+C", "en": "Connect / disconnect strips", "pl": "Połącz / rozłącz klipy", "l": 3, "op": "sequencer.connect", "km": "Sequencer", "doc": "video_editing/edit/montage/editing.html"}
          ]
        },
        {
          "name": {"en": "Organize", "pl": "Porządek"},
          "items": [
            {"k": "H|Alt+H", "en": "Mute / unmute strips", "pl": "Wycisz / włącz klipy", "l": 2, "op": ["sequencer.mute", "sequencer.unmute"], "km": "Sequencer", "doc": "video_editing/edit/montage/editing.html"},
            {"k": "Ctrl+H", "en": "Lock strips", "pl": "Zablokuj klipy", "l": 3, "op": "sequencer.lock", "km": "Sequencer", "doc": "video_editing/edit/montage/editing.html"},
            {"k": "Ctrl+G", "en": "Make meta strip", "pl": "Utwórz meta klip", "l": 2, "op": "sequencer.meta_make", "km": "Sequencer", "doc": "video_editing/edit/montage/meta.html"},
            {"k": "Tab", "en": "Enter / exit meta strip", "pl": "Wejdź do / wyjdź z meta klipu", "l": 2, "op": "sequencer.meta_toggle", "km": "Sequencer", "doc": "video_editing/edit/montage/meta.html"},
            {"k": "PgUp|PgDn", "en": "Jump to previous / next cut", "pl": "Skocz do poprzedniego / następnego cięcia", "l": 2, "op": ["sequencer.strip_jump", "sequencer.strip_jump"], "km": "Sequencer", "doc": "editors/video_sequencer/sequencer/navigating.html"},
            {"k": "LBracket|RBracket", "en": "Select strips left / right of playhead", "pl": "Zaznacz klipy na lewo / prawo od głowicy", "l": 3, "op": ["sequencer.select_side_of_frame", "sequencer.select_side_of_frame"], "km": "Sequencer", "doc": "video_editing/edit/montage/selecting.html"},
            {"k": "Ctrl+Tab", "en": "Toggle timeline / preview", "pl": "Przełącz oś czasu / podgląd", "l": 3, "op": "wm.context_toggle_enum", "km": "Video Sequence Editor", "doc": "editors/video_sequencer/index.html"}
          ]
        }
      ]
    },
    {
      "id": "outliner",
      "icon": "🗂",
      "name": {"en": "Outliner", "pl": "Outliner"},
      "where": {"en": "Outliner editor (scene tree)", "pl": "Edytor Outliner (drzewo sceny)"},
      "tips": [{"en": "Ctrl+Click the eye icon to isolate one object or collection; Shift+Click affects children too.", "pl": "Ctrl+klik na ikonie oka izoluje jeden obiekt lub kolekcję; Shift+klik działa też na dzieci."}],
      "groups": [
        {
          "name": {"en": "Select & rename", "pl": "Zaznaczanie i nazwy"},
          "items": [
            {"k": "F2|2xLMB", "en": "Rename", "pl": "Zmień nazwę", "l": 1, "op": ["outliner.item_rename", "outliner.item_rename"], "km": "Outliner", "doc": "editors/outliner/editing.html"},
            {"k": "Ctrl+LMB", "en": "Add to selection", "pl": "Dodaj do zaznaczenia", "l": 1, "op": "outliner.item_activate", "km": "Outliner", "p": {"extend": true}, "doc": "editors/outliner/interface.html"},
            {"k": "Shift+LMB", "en": "Select range", "pl": "Zaznacz zakres", "l": 2, "op": "outliner.item_activate", "km": "Outliner", "p": {"extend_range": true}, "doc": "editors/outliner/interface.html"},
            {"k": "Period|NumDot", "en": "Show the active object in the tree", "pl": "Pokaż aktywny obiekt w drzewie", "l": 1, "op": ["outliner.show_active", "outliner.show_active"], "km": "Outliner", "doc": "editors/outliner/interface.html"},
            {"k": "Ctrl+F", "en": "Search / filter", "pl": "Szukaj / filtruj", "l": 2, "op": "outliner.start_filter", "km": "Outliner", "doc": "editors/outliner/interface.html"}
          ]
        },
        {
          "name": {"en": "Tree & collections", "pl": "Drzewo i kolekcje"},
          "items": [
            {"k": "Shift+LMB", "en": "Expand / collapse all children (click the arrow)", "pl": "Rozwiń / zwiń wszystkie dzieci (klik strzałki)", "l": 2, "op": "outliner.item_openclose", "km": "Outliner", "p": {"all": true}, "doc": "editors/outliner/interface.html"},
            {"k": "NumPlus|NumMinus", "en": "Expand / collapse one level", "pl": "Rozwiń / zwiń jeden poziom", "l": 3, "op": ["outliner.show_one_level", "outliner.show_one_level"], "km": "Outliner", "doc": "editors/outliner/interface.html"},
            {"k": "Home", "en": "Show hierarchy", "pl": "Pokaż hierarchię", "l": 3, "op": "outliner.show_hierarchy", "km": "Outliner", "doc": "editors/outliner/interface.html"},
            {"k": "C", "en": "New collection", "pl": "Nowa kolekcja", "l": 2, "op": "outliner.collection_new", "km": "Outliner", "doc": "editors/outliner/editing.html"},
            {"k": "M", "en": "Move to collection", "pl": "Przenieś do kolekcji", "l": 2, "op": "wm.call_menu", "km": "Outliner", "p": {"name": "OBJECT_MT_move_to_collection"}, "doc": "scene_layout/collections/collections.html"},
            {"k": "E|Alt+E", "en": "Exclude / include collection", "pl": "Wyklucz / włącz kolekcję", "l": 3, "op": ["outliner.collection_exclude_set", "outliner.collection_exclude_clear"], "km": "Outliner", "doc": "editors/outliner/editing.html"},
            {"k": "H|Alt+H", "en": "Hide / unhide all", "pl": "Ukryj / odkryj wszystko", "l": 2, "op": ["outliner.hide", "outliner.unhide_all"], "km": "Outliner", "doc": "editors/outliner/editing.html"},
            {"k": "X|Del", "en": "Delete", "pl": "Usuń", "l": 1, "op": ["outliner.delete", "outliner.delete"], "km": "Outliner", "doc": "editors/outliner/editing.html"},
            {"k": "1|2|3", "en": "Show only collection 1 / 2 / 3…", "pl": "Pokaż tylko kolekcję 1 / 2 / 3…", "l": 3, "h": {"en": "Shift + number adds collections. Hover the Outliner.", "pl": "Shift + cyfra dodaje kolekcje. Kursor nad Outlinerem."}, "op": ["object.hide_collection", "object.hide_collection", "object.hide_collection"], "km": "Outliner", "doc": "scene_layout/object/editing/show_hide.html"}
          ]
        }
      ]
    },
    {
      "id": "scripting",
      "icon": "🐍",
      "name": {"en": "Scripting", "pl": "Skrypty (Python)"},
      "where": {"en": "Text Editor & Python Console", "pl": "Edytor tekstu i konsola Pythona"},
      "tips": [{"en": "Preferences → Interface → Python Tooltips shows the Python path of every button you hover.", "pl": "Preferencje → Interface → Python Tooltips pokazuje ścieżkę Pythona każdego przycisku pod kursorem."}, {"en": "The Info editor logs every operator you run as Python — copy them to start a script.", "pl": "Edytor Info zapisuje każdy użyty operator jako kod Pythona — skopiuj go, by zacząć skrypt."}],
      "groups": [
        {
          "name": {"en": "Text Editor", "pl": "Edytor tekstu"},
          "items": [
            {"k": "Alt+P", "en": "Run script", "pl": "Uruchom skrypt", "l": 1, "op": "text.run_script", "km": "Text", "doc": "editors/text_editor.html"},
            {"k": "Ctrl+F", "en": "Find", "pl": "Znajdź", "l": 2, "op": "text.start_find", "km": "Text Generic", "doc": "editors/text_editor.html"},
            {"k": "Ctrl+H", "en": "Find & replace", "pl": "Znajdź i zamień", "l": 3, "op": "text.replace", "km": "Text Generic", "doc": "editors/text_editor.html"},
            {"k": "Ctrl+J", "en": "Jump to line", "pl": "Skocz do linii", "l": 3, "op": "text.jump", "km": "Text Generic", "doc": "editors/text_editor.html"},
            {"k": "Ctrl+Slash", "en": "Toggle comment", "pl": "Przełącz komentarz", "l": 2, "op": "text.comment_toggle", "km": "Text", "doc": "editors/text_editor.html"},
            {"k": "Tab|Shift+Tab", "en": "Indent (or autocomplete) / unindent", "pl": "Wcięcie (lub autouzupełnianie) / cofnij wcięcie", "l": 2, "op": ["text.indent_or_autocomplete", "text.unindent"], "km": "Text", "doc": "editors/text_editor.html"},
            {"k": "Ctrl+D", "en": "Duplicate line", "pl": "Duplikuj linię", "l": 3, "op": "text.duplicate_line", "km": "Text", "doc": "editors/text_editor.html"},
            {"k": "Ctrl+Shift+Up|Ctrl+Shift+Down", "en": "Move lines up / down", "pl": "Przesuń linie w górę / w dół", "l": 3, "op": ["text.move_lines", "text.move_lines"], "km": "Text", "doc": "editors/text_editor.html"},
            {"k": "Alt+N|Alt+O|Alt+S", "en": "New / open / save text", "pl": "Nowy / otwórz / zapisz tekst", "l": 3, "op": ["text.new", "text.open", "text.save"], "km": "Text", "doc": "editors/text_editor.html"}
          ]
        },
        {
          "name": {"en": "Python Console", "pl": "Konsola Pythona"},
          "items": [
            {"k": "Tab", "en": "Autocomplete", "pl": "Autouzupełnianie", "l": 1, "op": "console.indent_or_autocomplete", "km": "Console", "doc": "editors/python_console.html"},
            {"k": "Up|Down", "en": "Command history", "pl": "Historia poleceń", "l": 1, "op": ["console.history_cycle", "console.history_cycle"], "km": "Console", "doc": "editors/python_console.html"},
            {"k": "Shift+Enter", "en": "Clear line", "pl": "Wyczyść linię", "l": 3, "op": "console.clear_line", "km": "Console", "doc": "editors/python_console.html"},
            {"k": "Ctrl+Shift+C", "en": "Copy as script", "pl": "Kopiuj jako skrypt", "l": 3, "op": "console.copy_as_script", "km": "Console", "doc": "editors/python_console.html"}
          ]
        }
      ]
    }
  ]
};
