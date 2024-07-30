const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {registerValidation, loginValidation} = require('../validation');



// Import model
const User = require('../model/User');

router.post('/register', async(req, res) => {

  // lets validate the user data
 const {error} = registerValidation(req.body);
 if(error) return res.status(400).send(error.details[0].message);

 // checking if user is already in the database;
 const emailExist = await User.findOne({email: req.body.email});
 if(emailExist) return res.status(400).send('Email already exist');


 // Hash the password

 const salt = await bcrypt.genSalt(10);   // creating the salt
 const hashedPassword = await bcrypt.hash(req.body.password, salt); // hashing the password


 //creating new user
 const user = new User({
  name: req.body.name,
  email: req.body.email,
  password: hashedPassword  // using the hashed password
  });


  try {
      // saving the user in database
      const savedUser = await user.save();
      res.send({ user: user._id });
    } catch (error) {
      //catching the error
      res.status(400).send(error)
      console.log(error)
    }
})


router.post('/login', async(req, res) => {

  // lets validate the user data
 const {error} = loginValidation(req.body);
 if(error) return res.status(400).send(error.details[0].message);

  // checking if email exist;

  const user = await User.findOne({email: req.body.email});
  if(!user) return res.status(400).send('Email is not found');

  // check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) return res.status(400).send('incorrect password');

  // create and assign a token

  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token)

  // res.send("Logged in!");
})


module.exports = router;