In JavaScript, asynchronous code allows tasks (like fetching data) to run without blocking the main thread.


Promises & Async/Await

async/await is syntactic sugar over Promises — it makes async code look and behave more like synchronous code (easy to read, easy to debug).

---------------------------------------------
🧩 Example Comparison

Using Promises
fetch('https://api.quotable.io/random')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
  
  
---------------------------------------------
Using Async/Await
  async function getQuote() {
  try {
    const response = await fetch('API');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}
getQuote();

---------------------------------------------
✅ Key points:
    ▶async before a function makes it return a Promise.
    ▶await pauses the code until the Promise settles.
    ▶Use try...catch for clean async error handling.


2. Chaining Multiple Async Operations
You can chain multiple awaits instead of stacking .then() calls.

js
async function getUserData() {
  try {
    const postRes = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await postRes.json();
    
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const user = await userRes.json();
    
    console.log('Post:', post);
    console.log('User:', user);
  } catch (error) {
    console.error('Error:', error);
  }
}
getUserData();


3. Error Handling in Async Code
Even async code needs a safety net 🧯

🧩 Example

js
async function loadData() {
  try {
    const res = await fetch('https://api.invalid-url.com/data');
    if (!res.ok) throw new Error('Network response was not ok!');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Fetch failed:', err.message);
  } finally {
    console.log('Fetch attempt complete ✅');
  }
}


4. Combining Async/Await + DOM
It’s common to use async in event handlers or component load functions.

🧩 Example

js
const quoteBtn = document.getElementById('quote-btn');
const quoteText = document.querySelector('#quote');

quoteBtn.addEventListener('click', async () => {
  try {
    quoteText.textContent = 'Fetching new quote...';
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    quoteText.textContent = `"${data.content}" — ${data.author}`;
  } catch (error) {
    quoteText.textContent = 'Oops! Failed to fetch quote 😢';
  }
});