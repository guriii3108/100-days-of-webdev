# Day 71 — My First Express Server 🚀

Today I built my first Express server in Node.js! A small step, but a big milestone in my 100 Days of Web Dev journey.

## Tech Stack
- Node.js
- Express `^5.2.1` (CommonJS)
- Port: `4000`

## What It Does
- Serves a simple GET route at `/` returning a greeting string:
  - "Hey Thereee.... Today is 71st day of my journey...."

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node index.js
   ```
   - Optional: add a start script in `package.json` for convenience:
     ```json
     {
       "scripts": {
         "start": "node index.js"
       }
     }
     ```
     Then run:
     ```bash
     npm run start
     ```

3. Open in browser:
   - `http://localhost:4000/`

4. Or test via curl:
   ```bash
   curl http://localhost:4000/
   ```

## Endpoints
- `GET /` — returns a plain text message.

## Code Snippet
```js
// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey Thereee.... Today is 71st day of my journey....');
});

app.listen(4000, () => {
  console.log('Server is running on port:4000');
});
```

## What I Learned
- Initializing an Express app with `express()`
- Defining routes with `app.get(path, handler)`
- Sending responses with `res.send()`
- Starting a server using `app.listen(port)`
- Working with CommonJS modules (`require`)

## Next Steps
- Add more routes like `/about` and `/api`
- Introduce middleware (`express.json()`, logging)
- Use `nodemon` for auto-restarts in development
- Add 404 and error-handling middleware
- Load environment variables via `dotenv` and configurable `PORT`
