# Blender Shortcuts — Cheat Sheet

A static page of the most useful Blender keyboard shortcuts, grouped by mode (Object, Edit, Sculpt, Animation, etc.). Single `index.html`, no dependencies, no build step. English-first with Polish translations underneath.

## Features
- 🔍 Search shortcuts (press `/` to focus, `Esc` to clear) — works in both English and Polish
- 🏷️ Filter by mode/tab: Object, Edit, Sculpt, Animation, Navigation, Selection, General
- 🌗 Light / dark theme (remembered)
- 📱 Responsive layout
- ⚡ G/R/S hero + Top 5 to learn first

## Hosting on GitHub Pages

1. Create a repo on GitHub and push these files:
   ```bash
   git init
   git add .
   git commit -m "Blender shortcuts"
   git branch -M main
   git remote add origin https://github.com/<your-name>/<repo>.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages**.
3. Under *Build and deployment* pick **Source: Deploy from a branch**, branch **main**, folder **/ (root)**.
4. Save. The page will be live at `https://<your-name>.github.io/<repo>/`.

> The page also works opened directly from disk (double-click `index.html`).

> Shortcuts assume Blender's **default keymap**. The industry-compatible keymap differs, and some keys are context-sensitive (they depend on which editor your mouse hovers over).
