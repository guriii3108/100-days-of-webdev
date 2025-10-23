// 🧠 Day 29: Advanced Array & Object Patterns (Part 1)
// Practice Script for Advanced JavaScript Concepts
// 
// This script demonstrates advanced JavaScript array and object manipulation techniques
// Run this in Node.js or browser console to see all examples in action

console.log("🚀 Starting Day 29 Practice Session...\n");
console.log("📖 This script covers advanced array methods and object patterns\n");

// ===========================================
// 🔹 1. ADVANCED ARRAY METHODS
// ===========================================

console.log("📚 SECTION 1: Advanced Array Methods");
console.log("=" .repeat(50));

// map() - Transform each element
console.log("\n1️⃣ map() - Transform elements:");
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log("Original:", nums);
console.log("Doubled:", doubled);

// filter() - Return elements based on condition
console.log("\n2️⃣ filter() - Filter elements:");
const students = [60, 75, 45, 90];
const passed = students.filter(mark => mark >= 60);
console.log("All marks:", students);
console.log("Passed marks:", passed);

// reduce() - Reduce to single value
console.log("\n3️⃣ reduce() - Reduce to single value:");
const total = [10, 20, 30].reduce((sum, val) => sum + val, 0);
console.log("Numbers:", [10, 20, 30]);
console.log("Sum:", total);

// find() & findIndex() - Find elements
console.log("\n4️⃣ find() & findIndex() - Find elements:");
const userList = [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}];
const foundUser = userList.find(u => u.id === 2);
const userIndex = userList.findIndex(u => u.id === 2);
console.log("Users:", userList);
console.log("Found user:", foundUser);
console.log("User index:", userIndex);

// some() & every() - Check conditions
console.log("\n5️⃣ some() & every() - Check conditions:");
const testNumbers = [1, 2, 3];
const hasGreaterThan2 = testNumbers.some(n => n > 2);
const allPositive = testNumbers.every(n => n > 0);
console.log("Numbers:", testNumbers);
console.log("Has number > 2:", hasGreaterThan2);
console.log("All positive:", allPositive);

// flat() & flatMap() - Handle nested arrays
console.log("\n6️⃣ flat() & flatMap() - Handle nested arrays:");
const nested = [1, [2, 3], [4, [5]]];
const flattened = nested.flat(2);
console.log("Nested array:", nested);
console.log("Flattened:", flattened);

// ===========================================
// 🔸 2. ADVANCED OBJECT TRICKS
// ===========================================

console.log("\n\n📚 SECTION 2: Advanced Object Tricks");
console.log("=" .repeat(50));

// Object.entries() / Object.values() / Object.keys()
console.log("\n1️⃣ Object methods:");
const person = { name: "Arjun", age: 20, city: "Mumbai" };
console.log("Person object:", person);
console.log("Object.keys():", Object.keys(person));
console.log("Object.values():", Object.values(person));
console.log("Object.entries():", Object.entries(person));

// Object Destructuring + Defaults
console.log("\n2️⃣ Object Destructuring + Defaults:");
const { name, city = "Unknown" } = { name: "Amit" };
console.log("Destructured name:", name);
console.log("Destructured city (default):", city);

// Merging Objects with Spread
console.log("\n3️⃣ Merging Objects with Spread:");
const baseUser = { id: 1, name: 'Sam' };
const userDetails = { city: 'Delhi', age: 25 };
const userProfile = { ...baseUser, ...userDetails };
console.log("User:", baseUser);
console.log("Details:", userDetails);
console.log("Merged profile:", userProfile);

// ===========================================
// 🧑‍💻 PRACTICE TASKS
// ===========================================

console.log("\n\n🎯 PRACTICE TASKS");
console.log("=" .repeat(50));

// Task 1: User Array Operations
console.log("\n📋 TASK 1: User Array Operations");
const practiceUsers = [
  { name: "Amit", age: 21 },
  { name: "Riya", age: 25 },
  { name: "John", age: 19 },
  { name: "Priya", age: 23 },
  { name: "Raj", age: 18 }
];

console.log("Original users:", practiceUsers);

// Find all users over 20
const usersOver20 = practiceUsers.filter(user => user.age > 20);
console.log("✅ Users over 20:", usersOver20);

// Get names array using map
const userNames = practiceUsers.map(user => user.name);
console.log("✅ Names array:", userNames);

// Find first user older than 22
const firstUserOver22 = practiceUsers.find(user => user.age > 22);
console.log("✅ First user older than 22:", firstUserOver22);

// Task 2: Reduce Operations
console.log("\n📋 TASK 2: Reduce Operations");

// Sum all product prices
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 2000 }
];

const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("✅ Total price of products:", totalPrice);

// Group users by age
const usersByAge = practiceUsers.reduce((groups, user) => {
  const ageGroup = user.age >= 20 ? 'adult' : 'teen';
  if (!groups[ageGroup]) {
    groups[ageGroup] = [];
  }
  groups[ageGroup].push(user);
  return groups;
}, {});
console.log("✅ Users grouped by age:", usersByAge);

// Task 3: Object Display
console.log("\n📋 TASK 3: Object Display");
const course = { 
  title: "JavaScript", 
  level: "Advanced", 
  duration: "4 weeks",
  instructor: "Dr. Smith"
};

console.log("Course object:", course);
console.log("✅ Dynamic display:");
Object.entries(course).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Task 4: Challenge - Nested Array Flatten
console.log("\n📋 TASK 4: Challenge - Nested Array Flatten");
const arr = [1, [2, [3, 4]], 5, [6, [7, [8, 9]]]];

// Method 1: Using flat() with depth
const flattened1 = arr.flat(Infinity);
console.log("✅ Original nested array:", arr);
console.log("✅ Flattened (flat method):", flattened1);

// Method 2: Custom recursive flatten function
function flattenArray(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

const flattened2 = flattenArray(arr);
console.log("✅ Flattened (custom function):", flattened2);

// ===========================================
// 🎨 BONUS: More Advanced Examples
// ===========================================

console.log("\n\n🎨 BONUS: More Advanced Examples");
console.log("=" .repeat(50));

// Chaining array methods
console.log("\n🔗 Method Chaining:");
const chainNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chainResult = chainNumbers
  .filter(n => n % 2 === 0)  // Get even numbers
  .map(n => n * n)           // Square them
  .reduce((sum, n) => sum + n, 0); // Sum them

console.log("Original numbers:", chainNumbers);
console.log("Even numbers squared and summed:", chainResult);

// Complex object manipulation
console.log("\n🏗️ Complex Object Manipulation:");
const employees = [
  { name: "Alice", department: "IT", salary: 60000 },
  { name: "Bob", department: "HR", salary: 50000 },
  { name: "Charlie", department: "IT", salary: 70000 },
  { name: "Diana", department: "Finance", salary: 55000 }
];

// Group by department and calculate average salary
const departmentStats = employees.reduce((stats, emp) => {
  if (!stats[emp.department]) {
    stats[emp.department] = { employees: [], totalSalary: 0, count: 0 };
  }
  stats[emp.department].employees.push(emp.name);
  stats[emp.department].totalSalary += emp.salary;
  stats[emp.department].count += 1;
  return stats;
}, {});

// Calculate averages
Object.keys(departmentStats).forEach(dept => {
  departmentStats[dept].averageSalary = 
    departmentStats[dept].totalSalary / departmentStats[dept].count;
});

console.log("✅ Department statistics:", departmentStats);

// ===========================================
// 🏁 END OF SESSION
// ===========================================

console.log("\n\n🏁 End of Day 29 Practice Session!");
console.log("=" .repeat(50));
console.log("✅ You've practiced advanced array methods");
console.log("✅ You've learned object manipulation patterns");
console.log("✅ You can now transform data more efficiently");
console.log("\n🎉 Great job! Keep practicing these concepts!");

// ===========================================
// 📝 PRACTICE EXERCISES (Uncomment to try)
// ===========================================

/*
// Exercise 1: Create a function that takes an array of objects and returns the average age
function getAverageAge(people) {
  // Your code here
}

// Exercise 2: Create a function that flattens an array of any depth
function deepFlatten(arr) {
  // Your code here
}

// Exercise 3: Create a function that groups array elements by a given key
function groupBy(array, key) {
  // Your code here
}

// Exercise 4: Create a function that finds the most frequent element in an array
function mostFrequent(arr) {
  // Your code here
}

// Test your functions here:
// console.log(getAverageAge(practiceUsers));
// console.log(deepFlatten([1, [2, [3, [4]]]]));
// console.log(groupBy(employees, 'department'));
// console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
*/
