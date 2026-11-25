# PixelPlanner

Plan multiscreen video layouts for live events: LED walls, projection screens and monitors. PixelPlanner works out each screen's pixels, builds the content canvas, and exports the guides and templates your content, playback and switcher teams need.

**Disclaimer:** PixelPlanner was created by AI and tested by live event industry professionals. Check its numbers against your equipment's specifications before you rely on them for a show.

**Open the app:** https://videostuff.github.io/PixelPlanner/

It is a single web page (`index.html`). Nothing to install: open it in a current Chrome, Edge, Firefox or Safari. Your work is saved in your browser and can be saved to and opened from a `.json` file.

## Install it

PixelPlanner can be installed as an app, so it opens in its own window with its own icon and works without internet:

- **Chrome or Edge (Windows, Mac, Android):** click the install icon at the right end of the address bar, or open the browser's menu and choose **Install PixelPlanner** (on Android: **Add to Home screen** or **Install app**).
- **Safari on iPhone or iPad:** tap **Share**, then **Add to Home Screen**.
- **Safari on Mac:** choose **File → Add to Dock**.

Once it has been opened with internet at least once, PixelPlanner, its fonts and its Excel and PowerPoint exports work offline. When you're online it picks up the latest version by itself. Your work is saved in the browser the same way as on the website.

## What it does

### Screen Builder
- Add LED walls (by cabinet, columns and rows) and projection screens or displays (by size or diagonal).
- **LED wall cutouts**: remove cabinets in a wall's **Cutouts** map (or right-click a cabinet). They become holes, as if the cabinets weren't there: a screen placed behind the wall (lower in the Screens list) shows through them on the layout, in every export and in the Preset Guide, and PiPs in the hole count on the screen behind. Overlaps leave out the holes in either wall: only the strips where the screen behind tucks under remaining cabinets count, each measured across its narrow side, with one label per pair of screens.
- **Curved and reshaped projection screens**: in a screen's **Shape** section, bow each end out (+) or in (−) by typing an amount or using its slider (from fully in to fully out: half the end's length, so ±7.5 ft on a 15 ft high screen), and move any corner by an exact amount. Or turn on **Corner handles** (also in the screen's right-click menu) and drag the corners on the layout, to the nearest inch. The width, height and pixels you type are the flat face; PixelPlanner works out the projector raster (the upright box around the shape, at the face's pixel density) and uses it for the canvas and every export, with the part off the screen face shaded.
- **Pixel density matching**: resizes every screen's content so one pixel covers the same physical area as on a reference screen, then lays all screens out on one content canvas.
- Arrange screens on a to-scale layout with snapping, spacing, row alignment, a ground line, rulers and a measure tool. Dragging near the canvas centre snaps to it and shows a centre line.
- Objects in front of the screens: lecterns, stages, ADA ramps (with handrails), custom rectangles, shapes you draw point by point, and a 6 ft person for scale. Option to keep objects centred on the canvas as screens change.
- Notes, multiple layouts per guide, undo and redo.
- **Options → Clear layout…** (or right-click the layout or its tab) removes every screen, object and note from the open layout after you confirm, so you can build it again from the first screen. A layout can have no screens.
- Units in feet, feet and inches, inches or meters.

### Preset Guide
- Uses the screens from the Screen Builder. Each Screen Builder layout has its own presets, so changes in one layout don't affect another.
- Build presets of PiPs on each screen, with mirroring and aspect ratio lock. **+ New** and **Duplicate** ask for the preset's name; leave it blank for "Preset" and its number.
- Quick layouts: right-click a screen and choose **Create… → Quick layout** to fill it with PiPs (full screen, halves, thirds, 2 × 2, 3 × 3, one large + two small, corner inset), cut on whole pixels.
- Shift- or Ctrl-click to pick several PiPs, then move them together or line them up, space them out and match their sizes. Snap lines show what a PiP snaps to.
- **Page Up / Page Down** step through presets.
- Size a PiP by exact resolution or percentage of its screen, and see or set its X, Y position in that screen's own pixels.
- **Ruler** (or press **M**): drag on the layout to measure a distance in the screen's own pixels: its length, how far across and down, and where each end sits on the screen. Ends snap to screen and PiP edges, centres and other rulers; hold Shift for a straight line. Placed rulers stay in the preset: PiPs snap to their ends, and you can click one to move it, drag its ends, nudge it with the arrow keys or delete it. Each preset has its own rulers (Duplicate copies them), and they don't show in exports.
- **Picture library**: add pictures (or drop image files) and put them in PiPs, shared by every preset. Fill, fit or stretch each one, and choose per PiP type (all PiPs with the same name) whether the name shows on the picture. Pictures are shrunk to at most 1920 px, kept in your browser, saved inside the guide's `.json`, and shown in the PowerPoint and Excel exports.
- Works with touch: pinch to zoom, drag to scroll, double-tap the background to fit, press and hold for the menu.
- **Export…** lets you choose: Excel, PowerPoint, a PNG sheet with every preset of the layout one under the other, or a PDF summary: a cover listing every preset (PiPs, screens used, notes), then a page per preset with its picture, notes and a table of its PiPs in each screen's pixels.

### Exports
- Canvas export PNG at exact pixel size, layout snapshot, layout summary and test patterns.
- PDF spec pack, PowerPoint template, layered PSD and SVG.
- Spec sheet as CSV.
- Switcher planning `.xml` (screens, layers and auxes).
- **Advanced → EDID (experimental):** an EDID `.bin` for a screen, with connector, refresh rate, CVT blanking and a split across outputs. Check results on your hardware before you rely on them.

## Using it

1. Open the app link above.
2. You start with a blank layout. The first time, a welcome box offers to load an example layout instead (it's also in **Options → Load example**): an LED wall standing on its ground support on the ground line, with a projection screen each side. Add your screens on the left.
3. Arrange them on the layout, then switch to **Preset Guide** to plan PiPs.
4. Use the **Export** tab under the layout for files, and **Options → Save .json** to keep your work.

Hover over (or tap) a circled **i** to see what a section does. Press **?** (or **Options → Keyboard shortcuts**) for every shortcut, and use **Options → Layout text size** to make the labels on both layouts smaller or larger.

**Options → Reset app** clears everything PixelPlanner has saved in this browser and starts again with a blank layout and the welcome box.

## Hosting

The repository serves the app with GitHub Pages (Settings → Pages → deploy from branch `main`, folder `/ (root)`). The app is `index.html`. Next to it, `manifest.webmanifest`, `sw.js` and the `icons` folder make it installable and let it work offline. To run it elsewhere, put these files on any web server, or open `index.html` directly (it works, but can't be installed that way).
