# ⚛️ Day 47–48: React Hooks — `useState` & `useEffect`

## 🧠 What Are Hooks?

Hooks are special functions that let you “hook into” React features. They were introduced in React 16.8 to give functional components state and lifecycle capabilities that previously required class components.

### ✨ Common Hooks
- `useState` — manage local component state
- `useEffect` — run side effects such as data fetching, timers, or DOM updates
- `useContext`, `useRef`, `useReducer`, `useMemo` — advanced hooks to explore later

---

## 🪄 `useState`: Managing Component State

### 🧩 What Is State?
State is data that changes over time. When state updates, React re-renders the component so the UI stays in sync with the data.

### 🧱 Syntax
```jsx
const [stateValue, setStateValue] = useState(initialValue);
```
- `stateValue`: the current value stored in state
- `setStateValue`: the setter function used to update the state

### ⚙️ Example 1: Simple Counter
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
      <button onClick={() => setCount(0)}>🔁 Reset</button>
    </div>
  );
}
```

### ✅ Key Notes
- State changes trigger component re-renders.
- Always update state using the setter function (`setCount`, `setUser`); never mutate state directly (`count++`).
- State can hold numbers, strings, arrays, objects, booleans, or any other serializable data.

### ⚙️ Example 2: Updating Objects in State
```jsx
function Profile() {
  const [user, setUser] = useState({ name: "Riya", age: 21 });

  const updateAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateAge}>Increase Age</button>
    </div>
  );
}
```

---

## 🌍 `useEffect`: Handling Side Effects

### 🧩 What Is a Side Effect?
Any action that affects something outside the current component render cycle, such as:
- Fetching data from an API
- Subscribing to browser events (resize, scroll)
- Working with timers (`setTimeout`, `setInterval`)
- Manually manipulating the DOM

### 🧱 Syntax
```jsx
useEffect(() => {
  // code that runs after render
}, [dependencies]);
```

### 🌈 How It Works
- The callback runs after the component renders.
- The dependency array controls when the effect runs.

#### Example 1: Run on Every Render
```jsx
useEffect(() => {
  console.log("I run after every render");
});
```
- No dependency array → runs after every render.

#### Example 2: Run Only Once (on Mount)
```jsx
useEffect(() => {
  console.log("Component mounted!");
}, []);
```
- Empty dependency array → runs only on mount (like `componentDidMount`).

#### Example 3: Run When a Value Changes
```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count changed: ${count}`);
}, [count]);
```
- Runs whenever `count` changes.

#### Example 4: Cleanup Function
Use cleanup when the effect sets up something that needs to be cleaned up (event listeners, timers, subscriptions).
```jsx
useEffect(() => {
  const interval = setInterval(() => console.log("Tick"), 1000);

  return () => clearInterval(interval);
}, []);
```

#### Example 5: Fetching Data from an API
```jsx
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <div>
      <h3>👤 User List</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## ⚔️ `useState` vs `useEffect`

| Hook      | Purpose                              | Triggers UI update? | Runs when                                |
|-----------|--------------------------------------|---------------------|-------------------------------------------|
| `useState`  | Stores and updates local state        | ✅ Yes              | Whenever you call the state setter        |
| `useEffect` | Runs side effects (fetch, timer, log) | ✖️ Not directly     | After render, depending on dependencies   |

---

## 💪 Practice Exercises

**Beginner**
- Create a counter app that increases/decreases a number with `useState`.
- Build a light/dark mode toggle component.
- Show or hide a message when a button is clicked.

**Intermediate**
- Display the current time with `useEffect` and update it every second.
- Fetch posts or users from a public API and render them.
- Add cleanup logic to stop a timer when the component unmounts.

**Challenge**
- Build a random quote generator that:
  - Uses `useEffect` to fetch a quote when the component loads.
  - Stores the current quote in `useState`.
  - Provides a button to fetch a new quote.

---

## 🧾 Summary Table

| Concept           | Explanation                                         | Example                                      |
|-------------------|-----------------------------------------------------|----------------------------------------------|
| `useState`        | Creates reactive data stored in component state     | `const [count, setCount] = useState(0)`      |
| `useEffect`       | Handles actions after render (API calls, timers)    | `useEffect(() => { fetchData(); }, [])`      |
| Dependency Array  | Controls when `useEffect` runs                      | `[]`, `[count]`, or omitted                  |
| Cleanup           | Prevents memory leaks by cleaning up side effects   | `return () => clearInterval(interval)`       |