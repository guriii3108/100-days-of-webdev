# ⚛️ React Revision — Days 55–56

Brushing up the React fundamentals before diving into Advanced Topics

## 🔹 What is React?

React is a JavaScript library for building interactive UIs.

It uses a component‑based architecture, meaning your UI is split into small, reusable pieces that manage their own logic and rendering.

## 🔹 JSX

**JSX** = **JavaScript XML**, a syntax to write HTML inside JavaScript.

```jsx
const element = <h2>Hello, React!</h2>;
```

JSX makes UI structure easier to visualize.

## 🔹 Components

Building blocks of every React app.

**Functional Components** (the modern standard)

Can accept props (inputs) and manage state (local data).

## 🔹 Props & State

- **Props**: Send data child → parent or component → component
- **State**: Internal data that changes over time

**Example:**

```jsx
const [count, setCount] = useState(0);
```

State changes automatically trigger a re‑render.

## 🔹 useState & useEffect

- **useState** → Store and update data inside components.
- **useEffect** → Run side effects like fetching data or localStorage updates.

```jsx
useEffect(() => {
  console.log("Effect runs after render!");
}, []);
```

## 🔹 Lists, Forms & Conditional Rendering

- Render dynamic data with `.map()`
- Use controlled inputs for forms
- Show elements conditionally using `? :` or `&&`

**Example:**

```jsx
{todos.length ? <TodoList/> : <p>No tasks yet!</p>}
```

## 🔹 Fetch & Axios (Handling APIs)

- **Fetch API** → native method for HTTP requests.
- **Axios** → library with simpler syntax and auto JSON parsing.

**Example:**

```jsx
useEffect(() => {
  axios.get("/api/users").then(res => setUsers(res.data));
}, []);
```

## 🔹 React Router v6

Used to create multi‑page navigation without page reloads.

**Core Components:**

`BrowserRouter` | `Routes` | `Route` | `Link` | `useNavigate` | `useParams`

## 🔹 Projects Recap

- 💸 **Expense Tracker App**
  - Used State, Forms, Router + localStorage
- 📋 **Todo List App**
  - Practised conditional renders & lists
- 🧭 **Router Demo**
  - Dynamic routes and nested pages

## 🔹 Key Takeaways

- ✅ Think in components — one responsibility each
- ✅ Understand state flow (top → down)
- ✅ Hooks simplify code but must be used in the right order
- ✅ Building small projects is the best way to learn

## 🔹 What's Next? 🚀

Starting Advanced React:

- Context API 🧭
- Redux ⚙️
- Performance Optimization 🚀

---

## 📚 Perfect Caption (for LinkedIn / X / Threads)

⚛️ Just wrapped up my React Basics revision (Day 55–56)!

Revisited everything from Components, Hooks, and Router to my mini projects.

Feeling confident about the foundations and ready to dive into Advanced React concepts — Context API & Redux next 🔥

**#ReactJS #100DaysOfCode #WebDevelopment #Frontend #CodingJourney #JavaScript #ReactHooks #ReactRouter #BuildInPublic**
