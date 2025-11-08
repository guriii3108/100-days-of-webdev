## **📌Day 45–46: Lists, Forms & Conditional Rendering in React**

> Understanding how to render lists, handle forms, and conditionally display content in React - essential skills for building interactive UIs

**Today's Focus:**

- Rendering Lists: Using `.map()` to display arrays of data
- Forms: Creating controlled components for user input
- Conditional Rendering: Showing/hiding UI elements based on conditions

---

## **🎯 Learning Goals**

- Master rendering lists with `.map()` and the `key` prop
- Understand controlled components for form inputs
- Learn different conditional rendering patterns
- Build a complete Todo List app combining all concepts
- Avoid common mistakes in list rendering and form handling

---

## **📋 1. Rendering Lists in React**

### **What are Lists?**

In React, we often want to display data stored in arrays — like a list of users, products, or messages. We use the `.map()` function to transform each item in the array into a JSX element.

**Key Concepts:**

- `Array.map()` → loops through an array and returns JSX for each element
- Every item should have a unique `key` prop
- The `key` helps React identify which items have changed, been added, or removed

### **Basic Example**

```jsx
const fruits = ['Apple', 'Banana', 'Mango'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

### **Better Example (with IDs)**

**🚫 Avoid:** Using the index as a key when the list will change (e.g., adding/removing items). Prefer unique IDs from your data if possible.

```jsx
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function StudentList() {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}
```

### **More Complex Example**

```jsx
const students = ["Alice", "Bob", "Charlie", "Diana"];

function StudentList() {
  return (
    <div>
      <h3>Student Names</h3>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}
```

**✅ Key Notes:**

- The `key` helps React track which items change
- Prefer unique IDs if available (avoid using index for changing lists)
- Each list item must have a unique `key` prop

---

## **📝 2. Forms in React**

### **What are Controlled Components?**

In traditional HTML, form inputs handle their own state. But in React, we use **Controlled Components** — meaning every input's value is linked to the component's state.

**Key Concepts:**

- The value of an input field is controlled by a piece of state
- The `onChange` event updates that state
- On form submit, use `e.preventDefault()` to stop the page from reloading

### **Simple Form Example**

```jsx
import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name: 
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

### **Multiple Inputs Example**

```jsx
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Name" 
      />
      <input 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" 
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### **Common Mistakes**

| Mistake | Fix |
| --- | --- |
| Forgetting to use `value` + `onChange` | Use controlled components |
| Forgetting `e.preventDefault()` | Prevent page refresh |
| Directly mutating state (e.g. `formData.name = 'x'`) | Always use `setFormData({...})` |

**✅ Key Notes:**

- Each input has a `value` tied to state
- The `onChange` updates that state
- Use `e.preventDefault()` to stop form reload

---

## **🌗 3. Conditional Rendering**

### **What is Conditional Rendering?**

You can show or hide parts of your UI based on conditions — for example, if a user is logged in, show "Welcome"; otherwise, show "Login".

React supports JavaScript expressions inside JSX — so conditions can be written in multiple ways:

### **Method 1: Ternary Operator**

Use when you have two outcomes (show this OR that).

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}
    </div>
  );
}
```

### **Method 2: Logical AND (&&)**

Use when you want to show something only if a condition is true.

```jsx
function Notification({ hasMessage }) {
  return (
    <div>
      {hasMessage && <p>📩 You have new messages!</p>}
    </div>
  );
}
```

### **Method 3: if-else (outside JSX)**

Use for more complex logic that's easier to read outside JSX.

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome back!</h2>;
  }
  return <h2>Please log in.</h2>;
}
```

**✅ Key Notes:**

- Use ternary (`? :`) when you have two outcomes
- Use `&&` when you want to show something only if a condition is true
- You cannot use `if` statements directly inside JSX (use ternary or `&&` instead)

---

## **🧠 Practice Project: Todo List App**

### **🏗️ Goal**

Create a small Todo List app to combine all three topics:

- ✅ Use lists to render tasks
- ✅ Use a form to add new tasks
- ✅ Use conditional rendering to show message when list is empty

### **📋 Requirements**

- Users can type a task in an input
- On submitting, it adds the task to a list
- Display the task list using `.map()`
- Conditionally show a message like "No tasks yet" when the list is empty

### **💻 Complete Code Example**

```jsx
import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 My Todo List</h2>
      <form onSubmit={addTask}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>

      {todos.length === 0 ? (
        <p>No tasks yet 😴</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### **✅ Things You'll Learn From This**

- Working with arrays (`.map()`)
- Handling input forms (`useState`)
- Dynamically showing content (conditional rendering)
- Combining multiple React concepts in one app

---

## **📚 Quick Recap Table**

| Concept | Key Idea | Example |
| --- | --- | --- |
| **Lists** | Render with `.map()` and `key` prop | `items.map((i) => <li key={i.id}>{i.name}</li>)` |
| **Forms** | Use controlled components with state | `<input value={input} onChange={...} />` |
| **Conditional Rendering** | Show elements based on a condition | `{isLoggedIn ? 'Welcome' : 'Login'}` |

### **Common Mistakes to Avoid**

| Topic | Common Mistake | Solution |
| --- | --- | --- |
| **Lists** | Missing or duplicate `key` | Always provide unique `key` prop |
| **Forms** | Forgetting `onChange` handler | Always use controlled components |
| **Conditional Rendering** | Trying `if` directly inside JSX | Use ternary (`? :`) or `&&` operators |

---

## **💪 Practice Challenges**

1. **Build a Registration Form** with name, email, and password fields
2. **Make a Product List** that shows a price tag next to each item
3. **Create a Toggle Button** that hides or shows a paragraph when clicked
4. **Make a Simple Feedback Form** — show a thank-you message only after submitting
5. **Enhance the Todo App** — add delete functionality for each task
6. **Build a Search Filter** — filter a list of items based on user input

---

## **🔗 Additional Resources**

- [React Lists and Keys](https://react.dev/learn/rendering-lists)
- [React Forms](https://react.dev/reference/react-dom/components/input)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)

---
