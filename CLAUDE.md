# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hohta is a Finnish marketing website for a B2B service that turns corporate solar panel installations into visible brand assets.
**Language:** Finnish

## Architecture

- `index.html` — Main landing page
- `contact.html` — Contact form page
- `kiitos.html` — Thank you page (post-form submission)
- `styles.css` — All styling (premium minimal aesthetic)
- `main.js` — Scroll animations (IntersectionObserver) and smooth scrolling
- `notes/` — Design documentation (color palette, layout specs)

### Key Design Patterns

**White Room Aesthetic:**
- Clean white background throughout
- Minimal color palette — near-black text on white
- Generous whitespace, restrained typography

**Color System (CSS variables in `:root`):**
- `--text-primary: #0a0a0a` — near black
- `--text-secondary: #525252` — body text
- `--text-muted: #a3a3a3` — subtle text
- `--border-light: #e5e5e5` — dividers
- `--width-content: 1000px` / `--width-text: 640px` — layout constraints

**Typography:**
- Inter (sans-serif) via Google Fonts
- Font weights: 400, 500, 600, 700
- Fluid font sizing with `clamp()`

**Animations:**
- `.fade-in` class with IntersectionObserver for scroll-triggered reveals
- Respects `prefers-reduced-motion`

## Development

Open `index.html` directly in a browser — no server required.

For live reload during development:
```bash
python3 -m http.server 8000
# or
npx serve .
```

Cache-busting: Update the `?v=N` parameter on `styles.css` link when making CSS changes.

## Content Sections

Read the latest version of the layout from `./notes/`. Use the highest version number (currently `layout_1.1.md`).
