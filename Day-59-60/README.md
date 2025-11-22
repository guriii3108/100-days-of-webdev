# ⚛️ Day 59–60: Custom Hooks

## 🧠 What are Custom Hooks?

Custom Hooks are user-defined hooks that let you reuse stateful logic across components. They are normal JavaScript functions that use one or more of React's built-in Hooks (`useState`, `useEffect`, etc.).

**The key rule:** Name must start with `"use"` (e.g., `useTheme`, `useFetch`).

## 🧩 Why Use Custom Hooks?

- Avoid repeating logic in multiple components
- Keep components cleaner, focusing more on the UI than on the business logic
- Promote reusability and consistent patterns across your app
- Helpful when you have shared logic that depends on hooks

## ⚙️ Core Concepts

- **Encapsulation of Logic** — you can move repeated logic into a separate function
- **State Sharing** — logic is shared, but state is isolated to each component that uses it
- **Reusability** — multiple components can use the same hook independently
- **Abstraction** — you can abstract away complex side effects into simple reusable hooks

## 💡 When to Create a Custom Hook

- You find yourself using the same state + effect logic in multiple components
- You want to simplify a component that has too much logic
- You need a central place to handle data fetching, local storage, or event handling logic

## 🧱 Structure of a Custom Hook

- Must start with `"use"`
- Can use any built-in React Hook internally (`useState`, `useEffect`, `useMemo`, etc.)
- Must return something (data, state, or functions)

## 🧩 Common Use Cases

- ✅ **Fetching data** (`useFetch`)
- ✅ **Toggling boolean values** (`useToggle`)
- ✅ **Managing forms** (`useForm`)
- ✅ **Working with browser APIs** (e.g., `useOnlineStatus`, `useLocalStorage`)
- ✅ **Timer or interval-based logic** (`useInterval`, `useCountdown`)

## ⚠️ Rules & Best Practices

- Always prefix with `"use"` → enables React's hook rules checker
- Never call hooks inside conditions or loops inside your custom hook
- Return only the necessary data/functions from the hook
- Keep custom hooks focused on one responsibility
- You can compose hooks → one custom hook using another custom hook

## 🔍 Differences Between Custom Hooks & Components

| Aspect | Custom Hook | Component |
|--------|-------------|-----------|
| Output | Returns data/functions | Returns UI (JSX) |
| Purpose | Encapsulate logic | Render elements |
| Naming | Starts with `use` | Starts with capital letter |
| Reusability | Reusable logic | Reusable UI |

## 💭 Advantages

- ✨ Cleaner and more maintainable code
- ♻️ Reusable across components
- 🧩 Makes unit testing easier
- 🚀 Simplifies complex logic handling
- 🧠 Encourages modular architecture

## 📚 Example Scenarios (Conceptually)

- Use one hook to handle API fetching, reused in many pages
- Create a theme switcher hook that manages theme state
- Build a mouse tracking hook to get the user's cursor position
- Manage form inputs in a reusable, consistent way

## 🧪 Practice Ideas

- Create a simple `useLocalStorage` hook → store state in localStorage
- Create a `useDocumentTitle` hook → update the browser title dynamically
- Create a `useOnlineStatus` hook → detect if the user is online/offline

## 🏁 Key Takeaways

- Custom hooks = powerful way to reuse logic, not UI
- Must start with `"use"`
- They encourage cleaner, more modular, and more testable code
- Combine multiple hooks to create powerful abstractions
- **Simple principle:** If you repeat a pattern of hook logic twice, turn it into a custom hook!
