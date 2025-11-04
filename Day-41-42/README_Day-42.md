### Day 42 — Components Starting to Make Sense

Second day with React and I’m getting more comfortable. Today was all about practice—creating different components and seeing how they fit together.

---

### What clicked today
- Components are like building blocks; mix and match them
- Breaking UI into smaller pieces makes code cleaner and easier to reason about
- JSX feels more natural with practice
- Writing more components = stronger mental model

---

### Mini project: Multi-component layout
- Built a simple layout with `Header`, `Sidebar`, and `Content` components working together
- Key takeaway: components are reusable across projects

Suggested structure:
```
src/
  components/
    Header.jsx
    Sidebar.jsx
    Content.jsx
  App.jsx
```

Example usage in `App.jsx`:
```jsx
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

### Still learning / questions
- When to split a component into smaller ones
- Best practices for organizing component files and folders
- How components will share data (props coming tomorrow)

---

### Practice tasks
- [ ] Create `Header`, `Sidebar`, `Content` as separate files
- [ ] Add basic styles to differentiate regions
- [ ] Move any repeated UI into its own small component (e.g., `NavItem`)
- [ ] Identify at least one place where props would make this dynamic tomorrow

---

### Tomorrow (Day 43): Props
- Pass data from parent to child
- Make components dynamic instead of static displays
- Apply props to the layout (titles, nav items, content text)

---

### Hashtags
#ReactJS #CodingJourney #Day42 #100DaysOfCode


