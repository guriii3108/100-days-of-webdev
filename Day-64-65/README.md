## Day 64-65 · Redux: Introduction to State Management

Reference notes: [Day 64-65 — Redux on Notion](https://www.notion.so/Day-64-65-Redux-Introduction-to-State-Management-2b8f1e5ce88680e197ced54c2d513d73?source=copy_link)

---

### 🧠 What Is Redux?

Redux is a predictable state container for JavaScript apps. It centralizes global state, making data flow explicit and easier to reason about. Although it is most often paired with React, Redux is library-agnostic and works with Angular, Vue, or vanilla JS.

### ⚙️ Why Redux?

- React hooks such as `useState`/`useContext` excel for small, localized state.
- As an app scales, prop drilling and cross-component coordination become hard.
- Redux provides a single source of truth, well-defined updates, and consistent state transitions.

**Redux solves scaling state by:**

1. Storing the entire app state in one object.
2. Describing intent with plain-object actions.
3. Updating state through pure reducers.

### 🧩 Core Concepts

| Concept   | Description                                   | Analogy        |
|-----------|-----------------------------------------------|----------------|
| Store     | Holds the entire application state             | Brain          |
| Action    | Plain object that describes what happened      | Message        |
| Reducer   | Pure function that decides how state changes   | Decision maker |
| Dispatch  | Sends actions to the store                     | Delivery system|
| Selector  | Extracts specific data from the store          | Filter/lens    |

### 🔄 Redux Data Flow

1. **Dispatch an action** describing what just happened.
2. **Reducer** receives the action and returns new state.
3. **Store** saves the updated state tree.
4. **Subscribed components** re-render with the new data.

In short: **UI → Action → Reducer → Store → UI**

### 💡 Conceptual Example

1. User clicks **“Add to Cart”**.
2. Component dispatches an `addItem` action.
3. Reducer appends the item to the cart array.
4. React re-renders showing the updated cart.

### ⚙️ Redux Toolkit (RTK)

Modern Redux convention is to use RTK for batteries-included ergonomics:

- `configureStore()` simplifies store setup and middleware wiring.
- `createSlice()` bundles reducers, actions, and initial state.
- `createAsyncThunk()` manages async flows with pending/fulfilled/rejected cases.
- Immer integration lets you write “mutating” code while preserving immutability.

#### 📦 Core RTK Building Blocks

1. **Slice** — defines a feature’s state and reducers.
2. **Store** — combines slices and provides the global state tree.
3. **Provider** — React context wrapper that exposes the store to components.
4. **useSelector / useDispatch** — hooks for reading state and sending actions.

### 🧪 Practice Ideas

- **Counter App** — add increment, decrement, and reset actions.
- **Todo App** — manage adding, toggling, and removing tasks globally.
- **E-commerce Cart** — handle add/remove item logic plus totals in Redux.

### ⚠️ Common Mistakes

- Reaching for Redux when local state or context would suffice.
- Mutating state directly (reducers must stay pure/immutable).
- Confusing the roles of Context vs Redux (Context for simple sharing, Redux for complex, cross-cutting state).

### 🧭 Key Takeaways

- Centralize global state for predictability and easier debugging.
- Prefer Redux Toolkit over manual Redux setup for less boilerplate.
- Internalize the action → reducer → store → UI loop.
- Reach for Redux when multiple parts of the app must coordinate shared state.

### 🧠 TL;DR

- `Store`: global state holder  
- `Action`: describes intent  
- `Reducer`: pure state transition  
- `useSelector`: read from the store  
- `useDispatch`: send actions

### 🧪 Suggested Mini Practice

Refactor a small app (counter/todo/cart) to Redux Toolkit to cement these concepts through hands-on repetition.
