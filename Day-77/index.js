const express = require("express");
const app = express();
const userModel = require("./models/user.model.js");
const bcrypt = require("bcrypt");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("Hey there... this is main page");
  res.render("index");
});
app.post("/register", async (req, res) => {
  let { name, userName, password } = req.body;

  //before registering check user exist or not
  let user = await userModel.findOne({ userName });
  //find user on basis of username (we have unique username in database)
  // if(user) return res.send("User already exist")
  //if not exist.. create new one on basis of information
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      //password that is filled by user
      let createdUser = await userModel.create({
        name,
        userName,
        password: hash, //save hash as our passsword(encrypted)
      });
      res.send(createdUser);
    });
  });
});

app.post("/check", async (req, res) => {
  let { userName, password } = req.body;
  let user = await userModel.findOne({ userName });
  if (!user) return res.send("user dont exist");
  bcrypt.compare(password, user.password, (err, result) => {
    res.send(result);
    console.log(result);
  });
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
