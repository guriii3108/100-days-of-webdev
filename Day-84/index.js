const express = require("express");
const app = express();
const multer = require("multer");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload"); //upload is folder name where we are storing
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); //now origional name will come here...
    },
});
// const upload = multer({dest:"upload"}); //destination of location where our files will go...
const upload = multer({storage}); // cuz this time we done all in storage upward...

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/upload", upload.single("myfile"), (req, res) => {
    res.send({
        message: "File uploaded",
        info: req.file,
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send("Something broke!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
