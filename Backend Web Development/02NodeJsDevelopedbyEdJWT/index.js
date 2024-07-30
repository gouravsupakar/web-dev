const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./Routes/auth');
const postRoute = require('./Routes/post');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Connect to DB and start the server
const uri = process.env.DB_CONNECT;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(uri, clientOptions)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });

// Route Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


// Start the server only after the DB connection is established
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});