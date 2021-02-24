const express = require('express');

const app = express(),
      bodyParser = require("body-parser")
      port = 3080


app.use(bodyParser.json());

// Routes

app.get('/', (req, res) => {
  res.json('Main page')
});

app.get('/api/signup', (req, res) => {
  console.log('api/signup')
  res.json("Signup Page")
});

app.get('/api/login', (req, res) => {
  console.log('api/signup')
  res.json("Signup Page")
});

app.get('/api', (req, res) => {
  console.log('api/')
  res.json("API Page")
});



// Listening port

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
