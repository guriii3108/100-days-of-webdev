const express = require("express");
const app = express();
const userModel = require("./models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("Hey there... this is main page");8
  res.send("Main Page");
}); ///////=
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/register", async (req, res) => {
  let { name, userName, password } = req.body;

  //before registering check user exist or not
  let user = await userModel.findOne({ userName });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      //password that is filled by user
      let createdUser = await userModel.create({
        name,
        userName,
        password: hash, //save hash as our passsword(encrypted)
      });

      //now we have user.. now we can generate Token of user and send it to cookie by jwt
      let token = jwt.sign(
        { userName: userName, userId: userModel._id },
        "SECRETKEY"
      );
      //this key is sensitive data... put in it env file
      res.cookie("token", token);
      res.redirect("/login");
    });
  });
});

app.post("/login", async (req, res) => {
  let { userName, password } = req.body;
  let user = await userModel.findOne({ userName });
  if (!user) return res.send("User dosn't exit");
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign(
        { userName: userName, userId: userModel._id },
        "SECRETKEY"
      );
      res.cookie("token", token);
      res.redirect("/profile");
    } else {
      res.send("Email or passsword are incorrect");
    }
  });
});

//middleware
function isloggedIn(req, res, next) {
  if (req.cookies.token === "") res.redirect("/login");
  else {
    let data  = jwt.verify(req.cookies.token,"SECRETKEY")
    req.user = data ; //data to pass to routes...
    next() //pass to next route after checking
  }
}

app.get("/profile",isloggedIn, async(req, res) => {
    let user = await userModel.findOne({userName: req.user.userName})
  res.render("profile",{user});
});

app.post("/logout", (req, res) => {
  res.cookie("token", ""); //empty the jwt token while logout
  //and redirect to the main landing page...
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
