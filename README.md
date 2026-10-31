# GTA VI Countdown: Rainmeter Skin

A desktop countdown to the release of **GTA VI**, styled after the [web version](https://gta6-cd.netlify.app/): a dark glass card, neon teal accents, and separate tiles for days, hours, minutes and seconds.

## Features

- Live countdown, updated every second
- Four tiles: **Days / Hours / Minutes / Seconds**
- Dark card with a gradient teal border and faint contour lines
- One-variable resizing of the whole widget
- Shows **"GTA VI Released!"** once the date has passed

## Requirements

- Windows
- [Rainmeter](https://www.rainmeter.net/) 4.5 or newer

## Installation

1. Download or clone this branch.
2. Copy the `GTAVI` folder into your Rainmeter skins folder:
   ```
   Documents\Rainmeter\Skins\
   ```
3. Right-click the Rainmeter tray icon and choose **Refresh all**.
4. Open **Rainmeter → Manage**, select **GTAVI → GTAVI.ini**, and click **Load**.

## Folder structure

```
Documents\Rainmeter\Skins\
└── GTAVI\
    ├── GTAVI.ini    # layout and design
    └── GTAVI.lua    # countdown logic
```

## Customization

### Resize the widget

Open `GTAVI.ini` and change `Scale` under `[Variables]`:

```ini
Scale=1
```

| Value | Result |
|-------|--------|
| `0.7` | Compact |
| `1`   | Default (520×230 px) |
| `1.5` | Large |

Save the file and refresh the skin.

### Change the release date

Open `GTAVI.lua` and edit the `os.time{...}` line inside the `diff()` function:

```lua
local target = os.time{year=2026, month=11, day=19, hour=0, min=0, sec=0}
```

Unlike JavaScript, Lua months start at **1** (`11` = November). Update the footer text in `GTAVI.ini` (the `[Footer]` section) to match.

### Change the colors

In `GTAVI.ini`, under `[Variables]`:

```ini
Bg=9,10,15
Teal=47,224,200
```

Values are `R,G,B`. Change `Teal` to recolor the numbers, borders and glow.

## Differences from the web version

Rainmeter doesn't support some CSS features, so the skin approximates them:

- **Backdrop blur** isn't available. The card is semi-transparent instead.
- **The animated topography background** can't run in a skin. Static contour lines stand in for it.
- **Letter spacing** isn't supported, so the title is slightly tighter.
- **The text glow** is a plain shadow, so it's softer than the CSS version.

## Troubleshooting

- **The skin doesn't appear:** make sure the folder path is `Skins\GTAVI\GTAVI.ini`, then use **Refresh all**.
- **The timer shows nothing or an error:** check the Rainmeter log (**Manage → Log**) and confirm `GTAVI.lua` is in the same folder as `GTAVI.ini`.
- **Text looks off-center after changing `Scale`:** refresh the skin so every value is recalculated.

## Related

- Website version: [gta6-cd.netlify.app](https://gta6-cd.netlify.app/) (see the `main` branch)