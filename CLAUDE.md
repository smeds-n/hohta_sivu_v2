# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hohta is a Finnish marketing website for a B2B service that turns corporate solar panel installations into visible brand assets. 
**Language:** Finnish

## Architecture

- `index.html` — Page structure and content
- `styles.css` — All styling (premium minimal aesthetic)
- `main.js` — Scroll animations and interactions
- `notes/` — Design documentation (color palette, layout specs)
- `plans/` — Feature planning documents

### Key Design Patterns

**White Room Aesthetic:**
- Clean white background throughout
- Minimal color palette — near-black text on white
- Generous whitespace, restrained typography

**Color System:**
- CSS variables defined in `:root`
- `--text-primary: #0a0a0a` — near black
- `--text-secondary: #525252` — body text

**Typography:**
- Inter (sans-serif) throughout via Google Fonts
- Font weights: 400, 500, 600
- Fluid font sizing with `clamp()`

## Development

Open `index.html` directly in a browser — no server required.

For live reload during development:
```bash
python3 -m http.server 8000
# or
npx serve .
```

## Content Sections

read the latest version of the layout from the ./notes/ directory. Use the highest layout version number.
