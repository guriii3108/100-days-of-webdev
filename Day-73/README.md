# Day 73 - Express Routing Advanced (CRUD API)

A mini CRUD API built with Express.js to understand route parameters, query parameters, and REST API patterns using in-memory data storage.

## 📚 What I Learned

- Route parameters (`req.params`)
- Query parameters (`req.query`)
- Request body handling (`req.body`)
- Building CRUD operations (Create, Read, Update, Delete)
- Structuring clean API routes

## 🚀 Features

- **Dynamic routing** with route parameters
- **Query string handling** for filtering/search
- **Full CRUD operations** on an in-memory array
- **RESTful API design** principles

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
   node app.js
   ```
   Server will run on `http://localhost:3000`

2. Test the API endpoints using Postman, Thunder Client, or curl

## 🔌 API Endpoints

### Route Parameters Example
```
GET /user/:id
```
Returns the user ID from the URL parameter.

### Query Parameters Example
```
GET /search?name=john&age=25
```
Returns the query parameters as JSON.

### CRUD Operations on Items

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/items` | Get all items |
| POST | `/items` | Add a new item |
| PUT | `/items/:index` | Update an item by index |
| DELETE | `/items/:index` | Delete an item by index |

## 📝 Example Requests

### Get all items
```bash
GET http://localhost:3000/items
```

### Add a new item
```bash
POST http://localhost:3000/items
Content-Type: application/json

{
  "item": "orange"
}
```

### Update an item
```bash
PUT http://localhost:3000/items/0
Content-Type: application/json

{
  "item": "mango"
}
```

### Delete an item
```bash
DELETE http://localhost:3000/items/1
```

## 🎯 Key Concepts

**Route Parameters (`req.params`)**
- Used for dynamic routes (e.g., `/user/123`)
- Accessed via `req.params.id`

**Query Parameters (`req.query`)**
- Used for filtering/search (e.g., `/search?name=john`)
- Accessed via `req.query.name`

**Request Body (`req.body`)**
- Used for sending data in POST/PUT requests
- Requires `express.json()` middleware

## 🧩 Code Structure

```javascript
const express = require("express")
const app = express()

// Middleware
app.use(express.json())

// In-memory data storage
let items = ["apple", "banana"]

// Routes
// ... (CRUD operations)

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000")
})
```

## 🚧 Challenges Faced

- Understanding the difference between `req.params` and `req.query`
- Handling array indexes for update/delete operations
- Need to add validation for invalid indexes

## 🔜 Next Steps

- Integrate MongoDB for persistent data storage
- Learn Mongoose ODM
- Implement proper error handling and validation
- Add authentication and authorization

## 📖 Part of 100 Days of Web Development

This project is part of my 100-day web development journey.
- **Current Phase**: Phase 3 - Advanced React + Backend (Day 56-85)
- **Day**: 73/100

## 👤 Author

**Gurveer Singh**
- Email: [sgurveer97@gmail.com](mailto:sgurveer97@gmail.com)
- Learning: Full-stack Web Development

## 📄 License

This project is for learning purposes.

---

**Day 73** | Building the foundation for full-stack applications 🚀
