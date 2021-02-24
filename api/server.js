const express = require('express');
var firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyAM2bCIli_2cVW7DhDkG7jBOFPDAQoTS3c",
  authDomain: "stonks-7fcbd.firebaseapp.com",
  projectId: "stonks-7fcbd",
  storageBucket: "stonks-7fcbd.appspot.com",
  messagingSenderId: "297531669463",
  appId: "1:297531669463:web:aeebabe78fc47546772992",
  measurementId: "G-N1MQ2HM861"
};

firebase.initializeApp(firebaseConfig);


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
  console.log('api/login')
  res.json("Login Page")
});

app.get('/api', (req, res) => {
  console.log('api/')
  res.json("API Page")
});



// Listening port

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
