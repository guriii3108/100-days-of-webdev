const userModel = require("./models/user.model.js");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
//before setting... npm i ejs to install

app.get("/", (req, res) => {
  res.render("index.ejs");
  //instead of res.send()
  // we can see anything we write in ejs file in our browser
  // (server-side rendering)
});

app.post("/register", async (req, res) => {
  let {
    userName,email,firstName,lastName,gender,
    dateOfBirth,phone,street,city,state,country,pincode,
    instagram,twitter,github,linkedin,
  } = req.body;
  let user = await userModel.findOne({ userName })
  if (user) return res.status(500).send("User already registered")
  let createdUser = await userModel.create({
    userName,email,firstName,lastName,gender,dateOfBirth,phone,
    street,city,state,country,pincode,
    instagram,twitter,github,linkedin,
  });
  res.send(createdUser);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
