# DAY 86: CORS – React Frontend & Node.js/Express Backend

A minimal full‑stack setup that connects a **React + Vite** frontend to a **Node.js + Express** backend, intentionally runs them on different ports, and demonstrates how to **debug and fix CORS (Cross‑Origin Resource Sharing) errors**.

This project is useful as a reference or portfolio piece showing that you understand:

-   **Frontend–backend integration** with Axios
-   **CORS problems** in the browser
-   **How to correctly enable CORS** in an Express API

---

## Tech Stack

-   **Frontend**: React 19, Vite, Axios, Tailwind CSS
-   **Backend**: Node.js, Express 5, CORS middleware

---

## Project Structure

-   `backend/` – Node.js + Express API (serves JSON user data and has CORS enabled)
-   `frontend/` – React app created with Vite (fetches the backend API and renders the user profile)

---

## Backend – Express API (Port 3000)

Backend entry file: `backend/index.js`

Key points:

-   Uses `express.json()` and `express.urlencoded()` for request parsing
-   Imports and uses the `cors` package globally
-   Exposes a simple `GET /` endpoint that returns a static `users` array
-   Listens on **port 3000**

Relevant snippet:

```js
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const data = [
    {
        id: "1",
        firstName: "Gurveer",
        lastName: "Singh",
        username: "guri_3108",
        email: "sgurveer97@gmail.com",
        phone: "+91 7888756581",
        address: "Punjab, India",
    },
];

app.get("/", (req, res) => {
    res.json({
        success: "true",
        message: "Backend Connected",
        users: { data },
    });
});

app.listen(3000, () => {
    console.log("App is running on port 3000");
});
```

### Running the Backend

From the `backend` folder:

```bash
cd backend
npm install
node index.js
```

The API will be available at:

-   `http://localhost:3000/`

---

## Frontend – React + Vite (Port 5173 by default)

Frontend entry component: `frontend/src/App.jsx`

Key points:

-   Uses **Axios** to perform a `GET` request to the backend: `http://localhost:3000/`
-   Reads `response.data.users.data` and stores it in React state
-   Renders a nicely styled **User Profile** card using Tailwind classes

Relevant snippet:

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3000/");
            const jsonData = response.data.users.data;
            setData(jsonData);
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-4">
            {/* Renders user profile card(s) */}
            {data.map((user) => (
                <div key={user.id}>{/* Profile content */}</div>
            ))}
        </div>
    );
};

export default App;
```

### Running the Frontend

From the `frontend` folder:

```bash
cd frontend
npm install
npm run dev
```

By default Vite runs on **http://localhost:5173**.

Open that URL in your browser and the React app will try to fetch data from the backend at `http://localhost:3000/`.

---

## The CORS Problem You Faced

Because the **frontend (http://localhost:5173)** and **backend (http://localhost:3000)** run on **different ports**, the browser treats them as **different origins**:

-   Origin A: `http://localhost:5173`
-   Origin B: `http://localhost:3000`

When the React app used Axios to call the Express API, the browser first performed a CORS check. Initially, the backend did **not** send the required CORS headers, so the browser blocked the request and showed a CORS error in the console, something like:

-   _“Access to fetch at 'http://localhost:3000/' from origin 'http://localhost:5173' has been blocked by CORS policy…”_

The request might have worked with tools like Postman or curl, but **failed in the browser** due to missing CORS headers.

---

## How You Solved the CORS Issue

You fixed the issue by:

1. **Installing the `cors` package** in the backend:

    ```bash
    cd backend
    npm install cors
    ```

2. **Importing and enabling CORS middleware** in `index.js`:

    ```js
    const cors = require("cors");
    app.use(cors());
    ```

This middleware automatically adds appropriate CORS headers (e.g. `Access-Control-Allow-Origin: *` by default), which allows the browser to accept responses from `http://localhost:3000` when requested from `http://localhost:5173`.

After this change:

-   The React frontend can successfully call the Express backend.
-   The user data is logged in the console and rendered on the page without CORS errors.

---

## How to Reproduce & Demonstrate the CORS Fix

1. **Start the backend**:

    ```bash
    cd backend
    node index.js
    ```

2. **Start the frontend**:

    ```bash
    cd frontend
    npm run dev
    ```

3. Open `http://localhost:5173` in your browser.

4. Open the browser **DevTools → Console / Network**:
    - You should see the network request to `http://localhost:3000/` succeed.
    - The React UI should display the **User Profile** data coming from the backend.

If you want to **see the CORS error again for learning/demo purposes**, you can temporarily comment out `app.use(cors())` in the backend, restart the server, and refresh the frontend.

---

## Notes / Ideas for Extensions

-   Add more REST endpoints (e.g. `POST /users`, `GET /users/:id`)
-   Replace the static `data` array with a database (MongoDB, PostgreSQL, etc.)
-   Add environment variables for API base URLs instead of hard‑coding `http://localhost:3000/`
-   Implement error handling and loading states in the React UI

---

## Summary

This repository demonstrates a **complete example** of:

-   Connecting a **React + Vite frontend** to a **Node.js + Express backend**
-   Running them on different ports
-   Encountering and **successfully resolving a CORS issue** using the `cors` middleware

Perfect as a **GitHub portfolio project** to showcase your understanding of real‑world frontend–backend communication and browser security constraints.
