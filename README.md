# PixelPlanner

Plan multiscreen video layouts for live events: LED walls, projection screens and monitors. PixelPlanner works out each screen's pixels, builds the content canvas, and exports the guides and templates your content, playback and switcher teams need.

**Open the app:** https://videostuff.github.io/PixelPlanner/

It is a single web page (`index.html`). Nothing to install: open it in a current Chrome, Edge, Firefox or Safari. Your work is saved in your browser and can be saved to and opened from a `.json` file.

## What it does

### Screen Builder
- Add LED walls (by cabinet, columns and rows) and projection screens or displays (by size or diagonal).
- **Pixel density matching**: resizes every screen's content so one pixel covers the same physical area as on a reference screen, then lays all screens out on one content canvas.
- Arrange screens on a to-scale layout with snapping, spacing, row alignment, a ground line, rulers and a measure tool. Dragging near the canvas centre snaps to it and shows a centre line.
- Objects in front of the screens: lecterns, stages, ADA ramps (with handrails), custom rectangles, shapes you draw point by point, and a 6 ft person for scale. Option to keep objects centred on the canvas as screens change.
- Notes, multiple layouts per guide, undo and redo.
- Units in feet, feet and inches, inches or meters.

### Preset Guide
- Uses the screens from the Screen Builder.
- Build presets of PiPs (picture-in-picture windows) on each screen, with mirroring and aspect ratio lock.
- Size a PiP by exact resolution or percentage of its screen, and see or set its X, Y position in that screen's own pixels.
- Exports to PowerPoint and Excel.

### Exports
- Canvas export PNG at exact pixel size, layout snapshot, layout summary and test patterns.
- PDF spec pack, PowerPoint template, layered PSD and SVG.
- Spec sheet as CSV.
- Switcher planning `.xml` (screens, layers and auxes).
- **Advanced → EDID (experimental):** an EDID `.bin` for a screen, with connector, refresh rate, CVT blanking and a split across outputs. Check results on your hardware before you rely on them.

## Using it

1. Open the app link above.
2. Add your screens on the left, or choose **Options → Load example** to see one set up.
3. Arrange them on the layout, then switch to **Preset Guide** to plan PiPs.
4. Use the **Export** tab under the layout for files, and **Options → Save .json** to keep your work.

**Options → Reset app** clears everything PixelPlanner has saved in this browser.

## Hosting

The repository serves `index.html` with GitHub Pages (Settings → Pages → deploy from branch `main`, folder `/ (root)`). To run it elsewhere, put `index.html` on any web server or open the file directly.
