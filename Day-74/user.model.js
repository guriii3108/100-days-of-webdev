const mongoose=require('mongoose');
mongoose
  .connect(
    "mongodb://localhost:27018/testingdb"
  )
  .then(function () {
    console.log("connected to database");
  });

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  password: String,
  email:String
})

module.exports = mongoose.model("User", userSchema)