Day 22 — localStorage

This day covers the basics of the Web Storage API (`localStorage`) and how to use it to persist simple data in the browser.

Links (to add):
- GitHub repo: [add your link]
- Notion notes: [add your link]

What is localStorage?
- A built‑in browser API for storing data locally, inside the user’s browser
- Data persists after refresh and closing the tab/window
- Key–value storage (both are strings)
- Part of the Web Storage API (sibling: `sessionStorage`)

Key Methods
- `localStorage.setItem(key, value)` — Store a value
- `localStorage.getItem(key)` — Retrieve a value (or `null` if missing)
- `localStorage.removeItem(key)` — Delete a single key
- `localStorage.clear()` — Delete everything in localStorage for this origin

Storing Objects and Arrays (JSON)
- `localStorage` only stores strings
- Use JSON to store structured data:
  - `JSON.stringify(object)` → string
  - `JSON.parse(string)` → object

Common Use Cases
- Theme toggle (save `light` / `dark`)
- To‑Do list (persist tasks)
- Form drafts (autosave input)
- Simple auth mock (store a flag/token)

How to Use This Folder
1) Include `script.js` in an HTML file:

   ```html
   <script src="./script.js"></script>
   ```

2) Open DevTools Console to see demo logs and try the helper functions:

   - `localStoreDemo.saveTheme('dark')`
   - `localStoreDemo.getTheme()`
   - `localStoreDemo.removeTheme()`
   - `localStoreDemo.saveCounter(5)`
   - `localStoreDemo.getCounter()`
   - `localStoreDemo.clearAll()`

Notes
- This is a minimal demo for learning. In a real app, always validate and namespace your keys to avoid collisions (e.g., `app:theme`).