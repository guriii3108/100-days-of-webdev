//----------------------------------
//Greeting Function
function greetUser(name) {
  console.log(`Hello, ${name}! Welcome to JavaScript.`);
}
greetUser("Guri");

//----------------------------------
//Celsius → Fahrenheit with Function
function convertToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
console.log(convertToFahrenheit(30)); // 86

//----------------------------------
//Scope Example
let message = "Global";
function showMessage() {
  let message = "Local";
  console.log(message); // Local
}
showMessage();
console.log(message); // Global

//----------------------------------
//Using Template Literals
let firstName = "Gurveeer ";
let topic = "JavaScript functions";
console.log(`Today, ${firstName} learned about ${topic}!`);