# 🧩 Modular JavaScript Practice — Day 27–28 of #100DaysOfWebDevelopment

## 📖 Overview
This mini project covers **Modular JavaScript** concepts using ES6+ `import` and `export`.  
The goal is to understand how to structure code across multiple files for better readability, reusability, and scalability — a core skill before moving into frameworks like React.

---

## 💡 Key Concepts
- Splitting logic into multiple files
- **Named exports** and **default exports**
- Importing modules in different ways
- Using an `index.js` file to simplify multiple imports
- Organizing a small project with a clear folder structure

---

## 🗂️ Project Structure
```
project/
├── app.js
├── utils/
│   ├── math.js
│   ├── strings.js
│   └── index.js
├── todos/
│   └── todoUtils.js
└── README.md
```

---

## ⚙️ Example Usage

### math.js
```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default function multiply(a, b) {
  return a * b;
}
```

### index.js
```js
export * from './math.js';
export * from './strings.js';
```

### app.js
```js
import multiply, { add, subtract } from './utils/math.js';

console.log(add(2, 3));      // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(4, 3)); // 12
```

---

## 🧠 What I Learned
- The difference between named and default exports
- How import/export simplifies project scaling
- How modules are the foundation for React component structure
- Why organized files > messy single files 😄

---

## 🪄 Next Steps
- Learn advanced array & object patterns
- Start connecting JS modules with API calls
- Begin React setup and componentization ⚛️