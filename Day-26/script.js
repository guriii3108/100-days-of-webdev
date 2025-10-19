// Day 26: ES6+ Features — Spread / Rest / Destructuring

// -----------------------------
// 1) Spread Operator ( ... )
// -----------------------------
const baseArray = [1, 2, 3];
const extendedArray = [...baseArray, 4, 5];
console.log("Spread - arrays:", extendedArray); // [1, 2, 3, 4, 5]

const originalUser = { id: 1, name: "Amit" };
const userWithCountry = { ...originalUser, country: "India" };
console.log("Spread - objects:", userWithCountry); // { id: 1, name: 'Amit', country: 'India' }

// -----------------------------
// 2) Rest Operator ( ... )
// -----------------------------
function sumNumbers(...numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
console.log("Rest - function params (sum):", sumNumbers(1, 2, 3, 4)); // 10

function firstAndRest(firstItem, ...remainingItems) {
  return { firstItem, remainingItems };
}
console.log("Rest - split first & rest:", firstAndRest("a", "b", "c", "d"));

// -----------------------------
// 3) Destructuring
// -----------------------------
// Array destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log("Array destructuring:", firstColor, secondColor); // red green

// Object destructuring
const userProfile = { name: "Amit", age: 25, country: "India" };
const { name: profileName, country: profileCountry } = userProfile;
console.log("Object destructuring:", profileName, profileCountry); // Amit India

// Nested destructuring
const student = { info: { name: "Riya", marks: { math: 90, english: 88 } } };
const {
  info: {
    marks: { math: mathScore },
  },
} = student;
console.log("Nested destructuring (math):", mathScore); // 90

// -------------------------------------------------
// Practice Tasks (from README)
// -------------------------------------------------

// Task 1: Spread + Rest
// Create a function combineArrays(...arrays) that merges multiple arrays into one unique array.
function combineArrays(...arrays) {
  const merged = arrays.flat();
  const unique = [...new Set(merged)];
  return unique;
}

console.log(
  "Task 1 - combineArrays:",
  combineArrays([1, 2], [2, 3], [3, 4])
); // [1, 2, 3, 4]

// Task 2: Destructuring Objects
// Given person, extract city and the first hobby into separate variables.
const person = {
  name: "John",
  address: {
    city: "Delhi",
    zip: 110001,
  },
  hobbies: ["Reading", "Gaming"],
};

const {
  address: { city: personCity },
  hobbies: [firstHobby],
} = person;
console.log("Task 2 - city & first hobby:", personCity, firstHobby); // Delhi Reading

// Task 3: Function Parameters
// Create a function printUser({ name, age, city }) that prints a formatted string using destructuring.
function printUser({ name, age, city }) {
  const message = `${name} is ${age} years old and lives in ${city}.`;
  console.log("Task 3 - printUser:", message);
  return message;
}

printUser({ name: "Sara", age: 24, city: "Mumbai" });

// Task 4: API Mock Practice
// Use destructuring to extract name and email.
const data = {
  user: { id: 1, name: "Sara", details: { email: "sara@gmail.com" } },
};

const {
  user: {
    name: apiUserName,
    details: { email: apiUserEmail },
  },
} = data;
console.log("Task 4 - name & email:", apiUserName, apiUserEmail); // Sara sara@gmail.com

// Extra Challenge
// Clone and modify a nested object without mutating the original using spread.
const deepUser = {
  id: 7,
  name: "Anita",
  address: {
    city: "Pune",
    zip: 411001,
  },
};

const updatedDeepUser = {
  ...deepUser,
  address: {
    ...deepUser.address,
    city: "Bengaluru",
  },
};

console.log("Extra - original city:", deepUser.address.city); // Pune
console.log("Extra - updated city:", updatedDeepUser.address.city); // Bengaluru


