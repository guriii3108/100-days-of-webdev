## **📌 Overview**

> Understanding the two core concepts of React: Props and State - how data flows and changes in React components
> 

**Today's Focus:**

- Props: Passing data between components
- State: Managing dynamic data within components
- Understanding the difference and when to use each

---

## **🎯 Learning Goals**

- Understand what props are and how to use them
- Learn component communication via props
- Master the useState hook
- Understand state management basics
- Know when to use props vs state
- Build interactive components

---

## **📦 Props (Properties)**

### **What are Props?**

Props are **arguments** passed to React components. They allow you to pass data from a **parent component** to a **child component**.

**Key Characteristics:**

- ✅ Read-only (immutable)
- ✅ Passed from parent to child (one-way data flow)
- ✅ Make components reusable
- ✅ Can be any data type (strings, numbers, objects, functions, etc.)

### **Basic Syntax**

```jsx
// Parent Component (passing props)
function App() {
  return <Greeting name="Alex" age={25} />;
}

// Child Component (receiving props)
function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
    </div>
  );
}
```

### **Destructuring Props**

**Cleaner way to access props:**

```jsx
// Method 1: Destructure in parameter
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Method 2: Destructure inside function
function Greeting(props) {
  const { name, age } = props;
  return <h1>Hello, {name}!</h1>;
}
```

### **Props Types**

```jsx
function UserCard({
  name,// String
  age,// Number
  isActive,// Boolean
  hobbies,// Array
  address,// Object
  onClick// Function
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
      <ul>
        {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
      <p>City: {address.city}</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

// Usage
<UserCard
  name="Sarah"
  age={28}
  isActive={true}
  hobbies={["reading", "coding", "gaming"]}
  address={{ city: "NYC", zip: "10001" }}
  onClick={() => alert("Clicked!")}
/>
```

### **Default Props**

```jsx
// Method 1: Default parameters
function Button({ label = "Click Me", color = "blue" }) {
  return <button style={{ color }}>{label}</button>;
}

// Method 2: defaultProps (older approach)
function Button({ label, color }) {
  return <button style={{ color }}>{label}</button>;
}

Button.defaultProps = {
  label: "Click Me",
  color: "blue"
};
```

### **Props.children**

Special prop that represents content between opening and closing tags:

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Usage
<Card>
  <h2>Title</h2>
  <p>This is the content inside the card.</p>
</Card>
```

### **Spread Operator with Props**

```jsx
function App() {
  const userInfo = {
    name: "John",
    age: 30,
    email: "john@example.com"
  };

// Pass all properties as individual props
  return <UserProfile {...userInfo} />;
}

function UserProfile({ name, age, email }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
      <p>Email: {email}</p>
    </div>
  );
}
```

---

## **🔄 State**

### **What is State?**

State is a component's **memory**. It's data that can **change over time** and when it changes, the component **re-renders**.

**Key Characteristics:**

- ✅ Mutable (can be changed)
- ✅ Managed within the component
- ✅ Triggers re-render when updated
- ✅ Private to the component (unless passed as props)

### **useState Hook**

```jsx
import { useState } from 'react';

function Counter() {
// Syntax: const [stateVariable, setterFunction] = useState(initialValue);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

### **Multiple State Variables**

```jsx
function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <form>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age"
      />
      <label>
        <input
          type="checkbox"
          checked={isSubscribed}
          onChange={(e) => setIsSubscribed(e.target.checked)}
        />
        Subscribe to newsletter
      </label>
    </form>
  );
}
```

### **State with Objects**

```jsx
function UserProfile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0
  });

// Update specific property (must spread existing state)
  const updateName = (newName) => {
    setUser({
      ...user,// Keep other properties
      name: newName// Update only name
    });
  };

// Better approach: use callback
  const updateEmail = (newEmail) => {
    setUser(prevUser => ({
      ...prevUser,
      email: newEmail
    }));
  };

  return (
    <div>
      <input
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        value={user.email}
        onChange={(e) => updateEmail(e.target.value)}
      />
    </div>
  );
}
```

### **State with Arrays**

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

// Add item
  const addTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

// Remove item
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

// Update item
  const updateTodo = (index, newValue) => {
    setTodos(todos.map((todo, i) =>
      i === index ? newValue : todo
    ));
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### **State Update Rules**

**❌ Don't Mutate State Directly:**

```jsx
// WRONG
const [user, setUser] = useState({ name: "John" });
user.name = "Jane";// ❌ Direct mutation
```

**✅ Always Create New State:**

```jsx
// CORRECT
const [user, setUser] = useState({ name: "John" });
setUser({ ...user, name: "Jane" });// ✅ New object
```

### **Functional Updates**

When new state depends on previous state:

```jsx
// ❌ Not recommended (can cause issues)
<button onClick={() => setCount(count + 1)}>

// ✅ Recommended (always safe)
<button onClick={() => setCount(prevCount => prevCount + 1)}>
```

---

## 🧪 Project: Day-43-44 — Props & UI Composition

This mini-project demonstrates how data flows via props across a small component tree and how to compose UI using reusable, presentational components.

- **Data source (parent state/constant):** `App.jsx` defines a `card` array of objects (with `img`, `intro`, `tag`) and passes it down as a prop.
- **Prop flow (one-way data):** `App` → `Section1` → `Page1Content` → `RightContent` → `RightCard` → `RightCardContent`.
- **Presentational components:** Components such as `Navbar`, `HeroText`, `Arrow`, and `RightCardContent` are stateless and render UI purely from the props they receive.

### Files involved
- `src/App.jsx`: Creates the `card` list and passes it to `Section1` via props.
- `src/Components/Section1/Section1.jsx`: Receives `card` and forwards it to `Page1Content`.
- `src/Components/Section1/Page1Content.jsx`: Splits layout into left (static text) and right (scrollable cards) sections, passing `card` to the right side.
- `src/Components/Section1/RightContent.jsx`: Maps the `card` array to `RightCard` components.
- `src/Components/Section1/RightCard.jsx`: Renders an image per card and passes details to `RightCardContent`.
- `src/Components/Section1/RightCardContent.jsx`: Displays the index, intro text, and a tag button.

### What this teaches about Props
- **Immutability and reusability:** Each component is unaware of the data source; it only uses the props it’s given, making components easy to reuse and test.
- **Prop drilling (small scale):** Demonstrates passing data through multiple layers. In larger apps, you’d consider context or state management libraries to avoid deep drilling.

### Suggested State Enhancements (practice exercises)
To align with the topic of State, try adding the following:
- **Active card selection:** Keep `activeIndex` in a parent component with `useState`, highlight the selected card, and update on click.
- **Filtering by tag:** Add a stateful filter (e.g., `"Satisfied"`, `"UnderServed"`) and derive a filtered list for `RightContent`.
- **Like/Bookmark toggles:** Add a boolean state per card and pass handlers down to toggle.
- **Carousel controls:** Track scroll position or current slide and add next/prev buttons.

These extensions will let you compare props (data passing) with state (local, changeable UI behavior) directly in this project.

## **⚖️ Props vs State**

| **Feature** | **Props** | **State** |
| --- | --- | --- |
| **Definition** | Component inputs | Component memory |
| **Mutability** | Immutable (read-only) | Mutable (changeable) |
| **Ownership** | Passed from parent | Owned by component |
| **Updates** | Cannot be changed by child | Can be updated with setter |
| **Purpose** | Configure component | Track changing data |
| **Re-render** | When parent re-renders | When state changes |

### **When to Use Props**

✅ Passing data from parent to child
✅ Configuring components
✅ Making components reusable
✅ Callback functions from parent

### **When to Use State**
✅ Data that changes over time
✅ User interactions (clicks, typing, etc.)
✅ Fetched data from APIs
✅ Form inputs
✅ UI state (modals, dropdowns, etc.)

---