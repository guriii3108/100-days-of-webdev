# 🧠 Day 29-30: Advanced Array & Object Patterns

## 📘 Concept Overview

Arrays and objects are the core of modern JavaScript — mastering them unlocks cleaner, smarter, and more optimized logic.

Today and tomorrow, we'll focus on:
- Advanced array methods
- Object manipulation patterns
- Writing concise logic with modern ES6+ syntax

## 🔹 1. Advanced Array Methods

### `map()`
Transforms each element and returns a new array.

```javascript
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

### `filter()`
Returns a new array based on a condition.

```javascript
const students = [60, 75, 45, 90];
const passed = students.filter(mark => mark >= 60);
```

### `reduce()`
Reduces an array to a single value.

```javascript
const total = [10, 20, 30].reduce((sum, val) => sum + val, 0);
```

### `find()` & `findIndex()`
Find elements based on condition.

```javascript
const users = [{id: 1}, {id: 2}];
const user = users.find(u => u.id === 2);
```

### `some()` & `every()`
Check conditions quickly:

```javascript
[1, 2, 3].some(n => n > 2);  // true
[1, 2, 3].every(n => n > 0); // true
```

### `flat()` & `flatMap()`
Handle nested arrays easily.

```javascript
const nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat(2)); // [1,2,3,4,5]
```

## 🔸 2. Advanced Object Tricks

### `Object.entries()` / `Object.values()` / `Object.keys()`

```javascript
const person = { name: "Arjun", age: 20 };
console.log(Object.entries(person)); // [["name", "Arjun"], ["age", 20]]
```

### Object Destructuring + Defaults

```javascript
const { name, city = "Unknown" } = { name: "Amit" };
```

### Merging Objects with Spread

```javascript
const user = { id: 1, name: 'Sam' };
const details = { city: 'Delhi' };
const profile = { ...user, ...details };
```

## 🧑‍💻 Practice Tasks

### Task 1: User Array Operations

Given an array of users:

```javascript
const users = [
  { name: "Amit", age: 21 },
  { name: "Riya", age: 25 },
  { name: "John", age: 19 },
];
```

- ✅ Find all users over 20
- ✅ Get a names array using map
- ✅ Find the first user older than 22

### Task 2: Reduce Operations

Use `reduce()` to:
- Sum all product prices in an array
- Create an object grouping users by age

### Task 3: Object Display

Use `Object.entries()` to display object data dynamically:

```javascript
const course = { title: "JS", level: "Advanced", duration: "4 weeks" };
// Output: "title: JS", "level: Advanced", etc.
```

### Task 4: Challenge - Nested Array Flatten

```javascript
const arr = [1, [2, [3, 4]], 5];
// Output: [1, 2, 3, 4, 5]
```

## 📝 End of Day Reflection

- ✅ I can use map, filter, reduce confidently
- ✅ I understand advanced object patterns
- ✅ I can transform data more efficiently

## 🚀 How to Run

1. Open the `script.js` file in your browser or Node.js environment
2. Uncomment the sections you want to practice
3. Run the code and observe the outputs
4. Try modifying the examples to experiment with different scenarios