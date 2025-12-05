# Day 72 - Express.js Routing & REST API Fundamentals

An introduction to Express.js routing and REST API concepts. This project covers creating multiple routes, sending JSON responses, and understanding how API endpoints work.

## 📚 What I Learned

- What routing is in Express.js
- How to create different endpoints (GET, POST, PUT, DELETE)
- What REST API means and why it's used
- How to return JSON data from an API
- How request and response objects work

## 🚀 Features

- **Multiple HTTP routes** (GET, POST, PUT, DELETE)
- **JSON responses** for API endpoints
- **Basic REST API structure**
- **Request body parsing** with `express.json()`

## 🛠️ Tech Stack

- Node.js
- Express.js

## 📦 Installation

1. Clone the repository or create a new directory
2. Initialize npm:
   ```bash
   npm init -y
   ```
3. Install Express:
   ```bash
   npm install express
   ```

## 💻 Usage

1. Start the server:
   ```bash
   node index.js
   ```
   Server will run on `http://localhost:4000`

2. Test the API endpoints using Postman, Thunder Client, or curl

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| GET | `/api/user` | Get user data (JSON) |
| POST | `/api/data` | Send data to server |
| PUT | `/api/update` | Update operation |
| DELETE | `/api/delete` | Delete operation |

## 📝 Example Requests

### Welcome Route
```bash
GET http://localhost:4000/
```

### Get User Data
```bash
GET http://localhost:4000/api/user
```

### Send Data (POST)
```bash
POST http://localhost:4000/api/data
Content-Type: application/json

{
  "name": "John",
  "message": "Hello!"
}
```

### Update Data (PUT)
```bash
PUT http://localhost:4000/api/update
Content-Type: application/json

{
  "id": 1,
  "status": "updated"
}
```

### Delete Data (DELETE)
```bash
DELETE http://localhost:4000/api/delete
```

## 🎯 Key Concepts

**Express Routing**
- Route handlers respond to specific URL paths
- Methods include `app.get()`, `app.post()`, `app.put()`, `app.delete()`
- Each route can handle different HTTP methods

**REST API**
- Representational State Transfer
- Uses HTTP methods to perform actions
- Common operations: Create (POST), Read (GET), Update (PUT), Delete (DELETE)

**Request and Response**
- `req` contains data sent by the client
- `res` is used to send data back (text, JSON, status codes)
- `express.json()` middleware is required to parse JSON request bodies

## 🧩 Code Structure

```javascript
const express = require("express")
const app = express()

// Middleware to parse JSON bodies
app.use(express.json())

// GET Route
app.get("/", (req, res) => {
  res.send("Welcome to Day 72!")
})

// GET Route with JSON response
app.get("/api/user", (req, res) => {
  res.json({ name: "John Doe", age: 25 })
})

// POST Route
app.post("/api/data", (req, res) => {
  res.json({ message: "Data received!", received: req.body })
})

// PUT Route
app.put("/api/update", (req, res) => {
  res.json({ message: "Update successful!" })
})

// DELETE Route
app.delete("/api/delete", (req, res) => {
  res.json({ message: "Item deleted!" })
})

// Start server
app.listen(4000, () => {
  console.log("Server is running on port:4000")
})
```

## 🚧 Challenges Faced

- Remembering to enable `express.json()` middleware for POST requests
- Understanding the difference between sending text vs JSON
- Keeping route paths organized and RESTful

## 🔜 Next Steps

- Learn route parameters and query parameters
- Build a mini CRUD API (without database yet)
- Understand middleware in more detail
- Learn about route organization and modular routing

## 📖 Part of 100 Days of Web Development

This project is part of my 100-day web development journey.
- **Current Phase**: Phase 3 - Advanced React + Backend (Day 56-85)
- **Day**: 72/100

## 👤 Author

**Gurveer Singh**
- Email: [sgurveer97@gmail.com](mailto:sgurveer97@gmail.com)
- Learning: Full-stack Web Development

## 📄 License

This project is for learning purposes.

---

**Day 72** | Learning the fundamentals of Express.js and REST APIs 🚀
