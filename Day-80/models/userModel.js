const mongoose = require("mongoose");
const Joi= require("joi");
mongoose
  .connect(
    "your mongo db url"
  )
  .then(function () {
    console.log("connected to database");
  });

//schema
const userSchema = mongoose.Schema({
  username:{
    type: String,
    required: true,
    minLength:3
  },
  name: {
    type:String,
    required: true,
    minLength:3
  },
  age: {
    type:Number,
    required: true,
    min: 18
  },

  contact: {
    type:Number,
    required: true,
    // minLength:10 //cannot use with number.. we have to make string..
  },
  email: {
    type:String,
    required: true,
  },
})

// VALIDATOR FOR OUR SCHEMA.. (first this checked out.. to meet requirements... then shema code will run)
function validator(data){ //recieve data in funtion and check the funtion
  let schema = Joi.object({
    username: Joi.string().min(3).required(),
    name: Joi.string().min(3).required(),
    age:Joi.number().min(18).required(),
    contact:Joi.number().required(),
    email:Joi.string().email().required(),
  })
  let {error}=schema.validate(data) //check the data passed to function (above)
  // console.log(resolveans.error?.message); //if error is there.. then message print (optional chaninig)
  return (error);
}
let userModel = mongoose.model("User",userSchema); //..our model
module.exports = {userModel,validator}
