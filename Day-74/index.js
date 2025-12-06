const mongoose = require("mongoose");
const express = require("express");
const app = express();
const userModel = require("./user.model") //require user model...
app.get("/", (req, res) => {
  res.send("hey there");
});
//CREATE THE USER
app.get("/create",async (req, res) => {
  // userModel.create() //asyncronous command.. so async await.. vrna if iske baad kuch likha to vo phle chal jayega
  let createdUser =await userModel.create({  //createduser mein value mil jaayegi
    username:"guri@3105", //now its hardcoded data.. in future we take here dynamic values from user
    name:"guri",
    email:"guri@gmail.com",
    password:"1234"
  })
  res.send(createdUser)
});
//READ THE USER
app.get('/read',async (req,res)=>{ //to read users
  // let user = await userModel.findOne({name:"guri"}) //to read one member only... with one field as object
  let user =await userModel.find();
  res.send(user)
})
//UPDATE THE USER
app.get('/update',async (req,res)=>{
  let user =await userModel.findOneAndUpdate({name:"guri"},{name:"Gurveer"},{new:true}) 
  //update kr dega but show puraana hi karga .... so new true to get showed in page also
  res.send(user);
})
//DELETE THE USER
app.get('/delete',async (req,res)=>{
  let user = await userModel.findOneAndDelete({name:"Guri"})
  res.send(user);
  console.log(user);
  
})
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
