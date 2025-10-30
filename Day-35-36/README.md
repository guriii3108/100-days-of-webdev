## Day 35–36 — GSAP Animations Playground

### Overview
Two focused days exploring GSAP for high-performance, timeline-based animations on the web. Each mini-example demonstrates a specific concept (from basics to ScrollTrigger and SVG), keeping the code minimal and isolated for quick learning.

### What I built
- **Core GSAP**: Tweens and timelines
- **ScrollTrigger**: Scroll-based animations and pinning
- **SVG animations**: Animating paths and strokes
- **Cursor and Nav micro-interactions**
- **Text effects**: Stagger, split, reveal

### Project structure
- **`GSAP/1.INTRO/`**: Basics — tween, easing, timeline composition
- **`GSAP/2.SCROLLTRIGGER/`**: ScrollTrigger setup, markers, start/end, pin
- **`GSAP/3.WITH_SVG/`**: Animate SVG paths, draw effects
- **`GSAP/4.CUSTOM_CURSOR/`**: Follow cursor, scale, hover states
- **`GSAP/5.NAVIGATION_BAR/`**: Nav entrance, underline, hover transitions
- **`GSAP/6.TEXT_ANIMATIONS/`**: Split text and staggered reveals
- **`GSAP/7.SCROLLING_TEXT_ANIMATION/`**: Marquee/scrolling text with GSAP
- **`GSAP/8.SCROLLTRIGGER+TIMELINE/`**: Combining timelines with ScrollTrigger

Each folder contains an `index.html`, `script.js` (or `scriptt.js` as noted), and `style.css` focused on a single concept.

### How to run locally
1. Open any subfolder inside `Day-35-36/GSAP/`.
2. Open `index.html` directly in your browser.
3. Ensure GSAP and ScrollTrigger are loaded via CDN in the HTML. If not, add:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
```

### Demos / Screenshots
- Add GIFs or screenshots per folder once recorded for quick preview.

### Key GSAP concepts practiced
- gsap.to, gsap.from, gsap.fromTo
- Easing, durations, delays
- Timelines: chaining, labels, defaults
- ScrollTrigger: pin, scrub, markers, start/end
- Animating SVG strokes and transforms
- Performance tips: will-change, transform vs top/left

### Notes and gotchas
- Register plugins before use: `gsap.registerPlugin(ScrollTrigger)`.
- Prefer `transform` properties (translate/scale/rotate) for smoother animations.
- Keep motion subtle; use easing thoughtfully to avoid “floaty” feel.
- When combining ScrollTrigger with timelines, define clear `start`/`end` for predictability.

### Resources
- GSAP Docs: `https://gsap.com/docs/`
- ScrollTrigger Guide: `https://gsap.com/docs/v3/Plugins/ScrollTrigger/`
- Ease Visualizer: `https://gsap.com/docs/v3/Eases/`

### Next steps
- Convert some examples into reusable components
- Add accessibility checks (prefers-reduced-motion)
- Replace any blocking image assets with optimized ones

### GitHub
- Repository (to be added): `<your-github-link-here>`



