const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/APP")
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
    min: 18,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  posts:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post"
  }],

});

module.exports=mongoose.model("user",userSchema);