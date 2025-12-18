const express= require("express");
const app =express()
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

const data = [
  {
    id: "1",
    firstName: "Gurveer",
    lastName: "Singh",
    username: "guri_3108",
    email: "sgurveer97@gmail.com",
    phone: "+91 7888756581",
    address: "Punjab, India",
  }
];

app.get("/",(req,res)=>{
  res.json({
    success:"true",
    message:"Backend Connected",
    users:{data}
  })
});

app.listen(3000,()=>{
  console.log("App is running on port 3000");
})