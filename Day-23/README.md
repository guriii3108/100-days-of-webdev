Day 23 — Fetch API & Promises

What I built today: a simple Random Quote Generator using the Fetch API and async/await. It fetches a quote from a public API and updates the page. Clean, minimal, and a good practice of Promises.

Links

- GitHub repo: <add your link here>
- Notion notes: <add your link here>

How to run

1. Open `index.html` in your browser.
2. Click "Get New Quote" to fetch another quote.

Mini Project: Random Quote Generator

- Uses `fetch()` + `async/await` to call `https://api.quotable.io/random`.
- Displays the quote content and author.
- Handles loading and error states.

Files

- `index.html`: Minimal UI (title, quote text, button) and script include.
- `script.js`: Fetch logic with error handling and initial load.

Notes

- HTTP errors (404/500) don’t reject fetch; network failures do. I surface a friendly message on failure.
- You can style it later if needed.