🧠 Day 26: ES6+ — Spread, Rest, and Destructuring

### What I learned
- **Spread (...):** Expands arrays/objects into individual items. Great for cloning and merging.
- **Rest (...):** Gathers multiple values into one array parameter. Useful in function params and in destructuring.
- **Destructuring:** Extracts values from arrays/objects (including nested) into variables.

### Quick examples
```js
// Spread (arrays/objects)
const a = [1, 2, 3];
const b = [...a, 4, 5]; // [1,2,3,4,5]
const user = { id: 1, name: "Amit" };
const user2 = { ...user, country: "India" };

// Rest (function params)
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

// Destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors; // red, green
const profile = { name: "Amit", age: 25, country: "India" };
const { name, country } = profile;
```

### Run the examples and tasks
- **Browser:** open `Day-26/index.html` (or any HTML) and include `<script src="script.js"></script>`.
- **Node:** in terminal, run:
```bash
node Day-26/script.js
```

### Practice tasks (implemented in `script.js`)
- **Task 1:** `combineArrays(...arrays)` → merges many arrays into a unique array using spread, rest, `Set`.
- **Task 2:** Destructure `person` to get `city` and first hobby.
- **Task 3:** `printUser({ name, age, city })` → formats a string using parameter destructuring.
- **Task 4:** Destructure API-like `data` to get `name` and `email`.

### Extra challenge (done in `script.js`)
- Clone a nested object and update only the nested `city` without mutating the original using nested spreads.

### Notes / tips
- Spread makes shallow copies. For deep structures, nest spreads or use structured cloning.
- Rest must be the last parameter in a function signature.
