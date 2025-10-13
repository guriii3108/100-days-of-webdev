# Day 20: JavaScript DOM Basics

### 📅 Day 20 of 30 — DOM Manipulation (Selectors + Events)

Today was all about learning how JavaScript interacts with the web page — **the Document Object Model (DOM)**.  
I practiced selecting, modifying, and responding to user actions in real time!

---

### 🔑 Concepts Covered
- `document` object and DOM tree  
- Element selection methods:
  - `getElementById` / `getElementsByClassName`
  - `querySelector` / `querySelectorAll`
- Changing text and styles dynamically  
- Responding to events (`click`, `mouseover`, `input`)  
- Adding & removing elements in the DOM  

---

### 💻 Practice Work

**🧩 Task 1 – Text Changer**
```javascript
const heading = document.getElementById("main-heading");
const btn = document.getElementById("changeText");

btn.addEventListener("click", () => {
  heading.textContent = "You clicked the button!";
});
```

**🧩  Task 2 – Background Color Changer**
```javascript
const colorBtn = document.querySelector("#colorBtn");
colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightcoral";
});
```

**🧩 Task 3 – Simple Counter**
```javascript
let count = 0;
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");

incrementBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
```