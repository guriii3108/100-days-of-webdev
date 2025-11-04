### Day 42 — Components (NOTES)

---

### Focus
- [ ] Practice creating multiple components
- [ ] Compose components together (layout)
- [ ] Identify where props will be useful tomorrow

---

### Concepts (bullets)
- Components = reusable UI blocks
- Composition = build complex UIs from small pieces
- Cohesion: one responsibility per component
- Split when: file grows, repeated UI, or mixed concerns

---

### Structure (suggested)
```
src/
  components/
    Header.jsx
    Sidebar.jsx
    Content.jsx
  App.jsx
```

---

### Code (usage only)
```jsx
// src/App.jsx
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="layout">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
```

---

### Exercises
- [ ] Build `Header`, `Sidebar`, `Content` as separate components
- [ ] Extract a repeated UI piece (e.g., `NavItem`) to its own component
- [ ] Add minimal CSS to visualize layout regions
- [ ] List 3 props you will pass tomorrow (e.g., `title`, `menuItems`, `article`)

---

### Debugging Notes
- Nothing rendering? Check `#root` mount and component imports
- Component names: use PascalCase (`Header`, not `header`)
- Keep each component’s responsibility clear; avoid mixing layout and content logic

---

### What clicked today
- Building blocks mental model is solid
- Smaller components → cleaner code
- JSX feels natural after repetition
- Reuse is real; components are portable

---

### Open questions
- Ideal folder organization as app grows?
- Clear rules for splitting vs keeping together?

---

### Tomorrow (Props)
- Parent → child data via props
- Make layout dynamic (header title, sidebar items, content text)

---

### Hashtags / Tags
#ReactJS #Day42 #100DaysOfCode #Components


