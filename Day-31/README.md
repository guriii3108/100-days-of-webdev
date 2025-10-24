# **🧠 Day 31 / 100 — Async JavaScript with Multiple APIs**

### **📘 Concept Overview**

JavaScript is **single-threaded**, but asynchronous operations let you do multiple tasks (like fetching data, waiting for APIs, timers, etc.) *without blocking* the main thread.

You’ll focus today on:

- **Promises**
- **async/await**
- **Fetching data from multiple APIs**
- **Handling responses + errors gracefully**

---

## **⚙️ 1️⃣ Understanding Promises**

A Promise represents a value that may be available *now*, *later*, or *never*.

```jsx
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded!");
  }, 1500);
});

myPromise.then(res => console.log(res)).catch(err => console.error(err));
```

---

## **⚙️ 2️⃣ Using Fetch API**

fetch() returns a Promise — perfect for working with async data.

```jsx
fetch("https://api.github.com/users/guri")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));
```

---

## **⚙️ 3️⃣ Async / Await Syntax**

Syntactic sugar for Promises — makes code more readable!

```jsx
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

---

## **⚙️ 4️⃣ Handling Multiple APIs**

Use **Promise.all()**, **Promise.allSettled()**, or **Promise.race()** to manage multiple calls at once.

```jsx
async function fetchMultiple() {
  const urls = [
    "https://api.github.com/users/guri",
    "https://api.github.com/users/shruti",
  ];

  try {
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(r => r.json()));
    console.log(data);// both results 🎉
  } catch (error) {
    console.error("One of the APIs failed:", error);
  }
}

fetchMultiple();
```

---

## **⚙️ 5️⃣ Bonus — Sequential vs Parallel Fetching**

```jsx
// Sequential (one after another)
for (const url of urls) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

// Parallel (faster!)
const promises = urls.map(url => fetch(url).then(r => r.json()));
const results = await Promise.all(promises);
console.log(results);
```

---

## **⚠️ Common Mistakes**

❌ Forgetting await → gets Promise object instead of data

❌ Mixing then() and await → keep consistent syntax

❌ Not handling errors → always wrap in try/catch

---

## **🧑‍💻 Practice Tasks**

✅ Fetch user data from two public APIs (e.g., GitHub + JSONPlaceholder)

✅ Merge the responses and print combined output

✅ Create an async function that retries API calls when one fails

✅ Display “Loading…” until data is ready