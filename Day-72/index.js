const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Day 72!")
});

//=====================DAY-72=====================
//GET Route
app.get("/api/user", (req, res) => {
    res.json({ name: "John Doe", age: 25 });
});

//POST Route
app.post("/api/data", (req, res) => {
    res.json({ message: "Data received!", received: req.body });
});

//PUT Route
app.put("/api/update", (req, res) => {
    res.json({ message: "Update successful!" });
});

//DELETE Route
app.delete("/api/delete", (req, res) => {
    res.json({ message: "Item deleted!" });
});

app.listen(4000, () => {
    console.log("Server is running on port:4000");
});
