// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

const googleauth = require('./RouterServerSide/AuthGoogleLogged');
const Signup = require('./RouterServerSide/signupregister');

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Your MongoDB database connection is established.");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: " + err);
  });

  app.use('/authGoogle', googleauth);
  app.use('/SignupRegs', Signup);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
