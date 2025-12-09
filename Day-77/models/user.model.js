const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/day77")
.then(()=>console.log("Connected to Database"))
.catch(err=>console.log(err.message))

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    userName:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
        minLength: 4,
    }
},{timestamps: true})

module.exports = mongoose.model("User",userSchema);