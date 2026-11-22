# CLAUDE.md

Notes for Claude sessions working on PixelPlanner.

## About the owner
The owner is not a programmer and doesn't know networking or GitHub well. Explain changes in plain language and in detail, define technical terms when you use them, and say what to click or check rather than assuming knowledge.

## Working branch
**Always work on the `pixelplanner-v4` branch**, even if the session was started on a different (for example `claude/...`) branch. At the start of a session, fetch and check out `pixelplanner-v4`, then commit and push there.

- Push to `main` (which makes the change live) only when the owner says so, for example "push to main" or "make it live".
- This rule stays until the owner starts v5. When they do, create a `pixelplanner-v5` branch from the latest `main` and change this section to name `pixelplanner-v5`.

## The project
PixelPlanner is a single-page web app for planning multiscreen video layouts at live events (LED walls, projection screens, monitors, PiP presets and exports).

- **`index.html` is the whole app**: HTML, CSS and JavaScript in one file, about 700 KB. There is no build step, no package manager and no test suite. Keep the app's code in this one file.
- **Install and offline files** sit next to it and make PixelPlanner installable from the browser (a PWA):
  - `manifest.webmanifest`: the app's name, colors and icons
  - `sw.js`: the service worker, which keeps the page, fonts, icons and export libraries (ExcelJS, PptxGenJS) for offline use. The page is fetched network-first (with a 4-second time limit) so updates show straight away. Everything else is cache-first.
  - `icons/`: app icons cut from the owner's logo (a pixel trail flowing into a screen with color bars on dark navy, `#050B1F`)

  If you add or change an outside library or font, add it to `LIBS` in `sw.js` so it works offline.
- **`README.md`** is the user-facing documentation, shown on GitHub.
- **Live site:** https://videostuff.github.io/PixelPlanner/, served by GitHub Pages from the `main` branch. Anything merged into `main` goes live, so don't push to `main` unless the owner asks.

### Layout of `index.html`
- **Help & README dialog** (`#readme`): it holds an HTML copy of the README between `<!-- README:START -->` and `<!-- README:END -->`.
- **Preset Guide**: its own page inside `<template id="pgSrc">`, run in an iframe so its styles and code stay separate from the Screen Builder. The two talk through `postMessage` (`pgPost`).
- **Main script**: `APP_VERSION` sits near the top of the last big `<script>` block.
- **Saved state**: kept in `localStorage` under `mcg-state-v2`, and saved and opened as `.json` (`format: 'multiscreen-guide-builder', version: 2`). Keep older saved files and browser state loading after any change to the data shape.
- **External libraries**: load only from cdnjs with exact versions (for example, ExcelJS 4.4.0).

## Every change (release checklist)
1. **Bump the version.** Raise `const APP_VERSION = 'X.YY'` by 0.01 and update the matching file name in the comment above it (`pixelplanner-vX.YY.html`). Set `const VERSION` in `sw.js` to the same number, so installed copies replace their saved copy. The `<title>` stays `PixelPlanner v3`.
2. **Update the docs** when a feature or behaviour the user can see changes:
   - `README.md`
   - the README copy in the Help dialog in `index.html` (between `README:START` and `README:END`), kept matching `README.md`
   - any related `data-tip` info tooltips or the keyboard shortcuts list
3. **Test in the browser.** Serve the folder (for example `python3 -m http.server`) and load it with the pre-installed Playwright/Chromium, check there are no console errors, and try the feature you changed. Test both the Screen Builder and the Preset Guide if shared code changed.
4. **Commit** with the message `vX.YY: Short plain description` (sentence case, no full stop). Example: `v3.89: AI disclaimer in the README and Help`. One version per commit.
5. **Push** to the working branch named above, not `main`, unless the owner says otherwise.

## Style
- Wording in the app and README is plain, short and direct, in American English, using live event terms (LED wall, cabinet, PiP, preset, switcher, raster).
- Measurements support feet, feet and inches, inches and meters, so don't assume a unit.
- Code comments explain why, in full sentences, matching the existing style.
- Pixel values are whole numbers. Make sure exports (PNG, PDF, PPTX, PSD, SVG, CSV, XML, EDID) stay consistent with what the layout shows.
