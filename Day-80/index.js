const express = require('express');
const app = express();
const {userModel, validator}= require('./models/user');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Main Page');
});

app.get('/create', (req, res) => {
  let {username,name,email,age,contact} = req.body; 
  let error = validator({username,name,email,age,contact}) //and send data to validator function.. 
  if (error) return res.status(500).send(error.message);
  res.send("everything works")
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});