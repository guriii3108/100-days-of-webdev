//npm i express - to install the module
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey Thereee.... Today is 71st day of my journey....');
});

app.listen(4000, () => {
  console.log('Server is running on port:4000');
});