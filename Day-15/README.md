## Day 15 — BEAT RECORDS: World‑Class Recording & Production (Landing Page)

A polished, single‑page landing experience for a fictional music label, "BEAT RECORDS". Built with semantic HTML and modern, responsive CSS featuring rich gradients, bold typographic hierarchy, and hover interactions.

### What I built
- **Hero section**: Oversized gradient title with a subtle vertical "SCROLL" cue.
- **Records section**: Three album cards with photo overlays, titles, and microcopy.
- **Artists section**: Feature/Popular/Legendary artist cards with image tints and hover scale.
- **Contact section**: Intro text, email input with CTA, and contact details grid.
- **Global nav + side dots**: Fixed top navigation and right‑side anchor dots for quick jumps.
- **Footer**: Lightweight credit strip.

### Highlights / Techniques
- **Gradient typography system** using a reusable `--text-gradient` and `background-clip: text`.
- **Layered background strategy** combining radial and linear gradients for depth.
- **Card overlays** with tinted images to ensure legible white text.
- **Micro‑interactions**: smooth hover scale on cards and buttons.
- **Responsive layout** with CSS Grid and media queries down to 480px.

### Stack
- **HTML5** for structure and anchors (`#projects`, `#artists`, `#contact`).
- **CSS3** (no frameworks): Grid, custom properties, gradient text, and responsive breakpoints.

### Run locally
1. Open `index.html` directly in your browser.
2. Ensure you’re online to load the Unsplash/Pinterest demo images referenced in `style.css`.

### File structure
- `index.html` — Page markup and section anchors.
- `style.css` — All styles, including variables, layout, components, and media queries.
- `README.md` — This file.

### What I practiced today
- Building a cohesive visual system with gradients and typography.
- Designing media‑rich cards with accessible contrast.
- Anchor‑based single‑page navigation patterns.
- Progressive responsiveness (desktop‑first, refined for tablet/mobile).

### Next steps
- Add smooth scroll and active‑dot state with a tiny JS enhancement.
- Hook the email input to a real form backend (e.g., Formspree).
- Animate section entrances (Intersection Observer + subtle transforms).


