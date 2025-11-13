# Day 50-51: Handling APIs in React (fetch vs axios)

- Notion notes: [Day 50-51 - Handling APIs in React](https://www.notion.so/Day-50-51-Handling-APIs-in-React-fetch-axios-2aaf1e5ce88680b4ba35da44c89139b8?source=copy_link)

## Why We Use APIs in React

Real-world React apps usually fetch data from back ends or third-party services (users, posts, products, etc.). React does not include a data fetching client, so we rely on:

- The native `fetch()` API (built into JavaScript)
- The Axios library (an HTTP client with additional features)

Both are typically called within `useEffect`, because data fetching is a side effect.

## Setup Checklist

- Install Axios (if you plan to use it):

  ```bash
  npm install axios
  ```

- Import the core hooks you will rely on:

  ```jsx
  import { useEffect, useState } from "react";
  ```

## Using the Fetch API

The `fetch` method returns a `Promise` that resolves to a `Response` object.

### Basic Syntax

```jsx
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### Example: Fetching Posts

```jsx
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.slice(0, 5).map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**Notes**
- Trigger the fetch inside `useEffect` so it runs when the component mounts.
- Always manage loading and error states.
- Dependencies control re-fetching. Example: `[id]` would fetch whenever `id` changes.

## Using Axios

Axios offers a friendlier API with useful defaults:

- Automatic JSON parsing
- Cleaner error handling
- Support for headers, interceptors, timeouts, and more

### Sample Axios Usage

```jsx
import axios from "axios";
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Fetch vs Axios

| Feature        | Fetch                           | Axios                        |
|----------------|---------------------------------|------------------------------|
| Default        | Built-in JS API                 | External library             |
| JSON parsing   | Manual (`res.json()`)           | Automatic                    |
| Error handling | Requires manual checks          | Throws on non-2xx responses  |
| Interceptors   | Not supported                   | Supported                    |
| Simplicity     | Lightweight                     | Feature-rich                 |

### Example: POST Request with Axios

```jsx
import axios from "axios";
import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body: "Hello world",
        userId: 1,
      });
      setResponseMsg(`Post created! ID: ${res.data.id}`);
    } catch (err) {
      setResponseMsg("Error creating post!");
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Enter post title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
      {responseMsg && <p>{responseMsg}</p>}
    </div>
  );
}
```

**Notes**
- Use `axios.post(url, data)` for sending JSON payloads.
- Additional verbs: `axios.put`, `axios.patch`, `axios.delete`.

## Handling Loading and Errors Cleanly

```jsx
import { useState, useEffect } from "react";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const result = await res.json();
        setData(result.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```

## Bonus: Custom Hook for Fetching

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return { data, loading };
}

function Demo() {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users");
  if (loading) return <p>Loading...</p>;
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

## Quick Recap

| Concept          | Key Point                                | Example                                   |
|------------------|-------------------------------------------|-------------------------------------------|
| Fetch API        | Native JS method for HTTP requests        | `fetch(url).then(res => res.json())`      |
| Axios            | Library for easier HTTP requests          | `axios.get(url).then(res => res.data)`    |
| `useEffect`      | Runs fetching code on mount               | `useEffect(() => { fetchData(); }, [])`   |
| Loading/Error    | Manage UX states explicitly               | `if (loading) return <p>Loading...</p>`   |

## Mini Project: React User Dashboard

Build a small app that:

- Fetches user data (name, email, company) from an API such as [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- Displays users in a card layout.
- Shows a loading state until the data arrives.
- Handles error messages gracefully.
- Adds an "Add User" feature using a mock POST request.
- Bonus: reuse the `useFetch` hook to load both users and posts.
