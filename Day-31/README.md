# 🧠 Day 31 / 100 — Async JavaScript with Multiple APIs

## 📋 Table of Contents
- [Overview](#overview)
- [Learning Objectives](#learning-objectives)
- [Core Concepts](#core-concepts)
  - [Understanding Promises](#understanding-promises)
  - [Using Fetch API](#using-fetch-api)
  - [Async/Await Syntax](#asyncawait-syntax)
  - [Handling Multiple APIs](#handling-multiple-apis)
  - [Sequential vs Parallel Fetching](#sequential-vs-parallel-fetching)
- [Common Mistakes](#common-mistakes)
- [Practice Tasks](#practice-tasks)
- [Getting Started](#getting-started)

## 📘 Overview

JavaScript is **single-threaded**, but asynchronous operations allow you to perform multiple tasks (like fetching data, waiting for APIs, timers, etc.) *without blocking* the main thread. This makes web applications more responsive and efficient.

## 🎯 Learning Objectives

By the end of this day, you will understand:

- **Promises** - The foundation of async JavaScript
- **async/await** - Modern syntax for handling asynchronous operations
- **Fetch API** - Making HTTP requests
- **Multiple API handling** - Working with several data sources simultaneously
- **Error handling** - Graceful failure management

## 🔧 Core Concepts

### Understanding Promises

A Promise represents a value that may be available *now*, *later*, or *never*. It has three states:
- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded!");
  }, 1500);
});

myPromise
  .then(res => console.log(res))
  .catch(err => console.error(err));
```

### Using Fetch API

The `fetch()` function returns a Promise, making it perfect for working with asynchronous data:

```javascript
fetch("https://api.github.com/users/guri")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));
```

### Async/Await Syntax

Async/await provides syntactic sugar for Promises, making asynchronous code more readable and easier to write:

```javascript
async function getUser() {
  try {
    const res = await fetch("https://api.github.com/users/guri");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUser();
```

### Handling Multiple APIs

Use Promise methods to manage multiple API calls efficiently:

#### Promise.all()
Waits for all promises to resolve or any to reject:

```javascript
async function fetchMultiple() {
  const urls = [
    "https://api.github.com/users/guri",
    "https://api.github.com/users/shruti",
  ];

  try {
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(r => r.json()));
    console.log(data); // Both results 🎉
  } catch (error) {
    console.error("One of the APIs failed:", error);
  }
}

fetchMultiple();
```

#### Promise.allSettled()
Waits for all promises to settle (resolve or reject):

```javascript
const results = await Promise.allSettled(promises);
results.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    console.log(`Promise ${index} succeeded:`, result.value);
  } else {
    console.log(`Promise ${index} failed:`, result.reason);
  }
});
```

#### Promise.race()
Returns the first promise that settles:

```javascript
const winner = await Promise.race([
  fetch('/api/slow'),
  fetch('/api/fast')
]);
```

### Sequential vs Parallel Fetching

#### Sequential (One after another)
```javascript
// Sequential (one after another) - slower
for (const url of urls) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}
```

#### Parallel (Faster!)
```javascript
// Parallel (faster!) - recommended for independent requests
const promises = urls.map(url => fetch(url).then(r => r.json()));
const results = await Promise.all(promises);
console.log(results);
```

## ⚠️ Common Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Forgetting `await` | Gets Promise object instead of data | Always use `await` with async functions |
| Mixing `then()` and `await` | Inconsistent syntax | Choose one approach and stick with it |
| Not handling errors | Unhandled promise rejections | Always wrap in try/catch blocks |
| Not checking response status | Assumes all requests succeed | Check `response.ok` before parsing |

## 🧑‍💻 Practice Tasks

### Basic Tasks
- [ ] Fetch user data from two public APIs (GitHub + JSONPlaceholder)
- [ ] Merge the responses and display combined output
- [ ] Create an async function that retries API calls when one fails
- [ ] Display "Loading..." until data is ready

### Advanced Tasks
- [ ] Implement a function that fetches data from multiple APIs with different timeout values
- [ ] Create a data aggregation service that combines results from 3+ APIs
- [ ] Build a retry mechanism with exponential backoff
- [ ] Implement caching to avoid redundant API calls

## 🚀 Getting Started

1. Open the `script.js` file in your code editor
2. Follow the examples and complete the practice exercises
3. Test your code in the browser console or Node.js environment
4. Experiment with different APIs and error scenarios

## 📚 Additional Resources

- [MDN Promise Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Async/Await Guide](https://javascript.info/async-await)
- [Promise Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#static_methods)