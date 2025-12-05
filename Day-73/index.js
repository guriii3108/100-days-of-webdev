const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data (form data)

let items = ["apple", "banana"]; // In-memory data storage
//=========================DAY-73=========================
//=====================CRUD OPERATIONS====================
app.get("/items", (req, res) => { // GET - Get all items
    res.json(items);
});

app.post("/items", (req, res) => { // POST - Add a new item
    items.push(req.body.item);
    res.json(items);
});

app.put("/items/:index", (req, res) => { // PUT - Update an item by index
    const index = parseInt(req.params.index);
    items[index] = req.body.item;
    res.json(items);
});

app.delete("/items/:index", (req, res) => { // DELETE - Delete an item by index
    const index = parseInt(req.params.index);
    items.splice(index, 1);
    res.json(items);
});

app.listen(3000, () => {
    console.log("Server started on port 3000"); // Start server
});
