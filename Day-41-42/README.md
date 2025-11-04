### Day 41 — React Setup, Components, and JSX

**Goal**: Set up a React project, understand components, and write JSX.

---

### What I did today
- Installed a fresh React app with Vite
- Explored project structure and dev commands
- Created my first component
- Practiced JSX rules and expressions
---

### Setup (Vite)
```bash
# Node 18+ recommended
npm create vite@latest my-react-app -- --template react
# or for TypeScript: --template react-ts
cd my-react-app
npm install
npm run dev
```

- **Dev server** runs at the URL printed in the terminal.
- Open the project in your editor and start from `src/`.

---

### Project structure (quick tour)
- `index.html`: single HTML entry, mounts the React app
- `src/main.jsx`: bootstraps React and renders `<App />`
- `src/App.jsx`: root component (good place to start)
- `src/assets/`: static assets

---

### First component
```jsx
// src/components/Hello.jsx
export default function Hello({ name = "React Learner" }) {
  return <h2>Hello, {name}! 👋</h2>;
}
```

Use it in `App.jsx`:
```jsx
import Hello from "./components/Hello";

export default function App() {
  const today = new Date().toLocaleDateString();
  return (
    <main>
      <h1>Day 41: React + JSX</h1>
      <Hello name="Guriii" />
      <p>Today is {today}.</p>
    </main>
  );
}
```

---

### JSX essentials (quick notes)
- **Looks like HTML, runs in JS**. You can put expressions inside `{}`.
- Components must **return a single root element** (wrap siblings in a parent or `<>...</>`).
- Use `className` instead of `class`, and `htmlFor` instead of `for`.
- Props are read-only. Pass data from parent → child like attributes.
- Self-close empty tags: `<img />`, `<input />`.

---

### Mini tasks (done today)
- [ ] Create Vite app and run dev server
- [ ] Clean default styles and content in `App.jsx`
- [ ] Make a `components/` folder and add `Hello.jsx`
- [ ] Pass different `name` props and verify output
- [ ] Add a simple style (inline or CSS file) to the `<h2>`

---

### Commands cheat sheet
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview built app locally

---

### Helpful resources
- Official React docs: [react.dev/learn](https://react.dev/learn)
- Vite docs: [vitejs.dev/guide](https://vitejs.dev/guide)

---

### Tomorrow (Day 42) preview
- Deeper dive into components
- File organization + props practice
- Quick styling approaches (CSS modules, plain CSS)


