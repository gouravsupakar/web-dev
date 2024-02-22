//jshint esversion:6

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption"); 
// const md5 = require("md5");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findorCreate = require("mongoose-findorCreate");



const app = express();

console.log(process.env.API_KEY);   //To tap into the environment variables use(process.env.API_KEY) her API_KEY is an environment-specfic variable.

app.use(express.static("public"));
app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended : true}));

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.set({strictQuery: true}); 
mongoose.connect("mongodb://127.0.0.1:27017/userDB", {useNewUrlParser : true});
// mongoose.set("useCreateIndex", true); not required if you dont get the deprication warning


const userSchema = new mongoose.Schema ({
    email: String,
    password: String,
    googleId: String,
    secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findorCreate);

const secret = "ThisIsOurLittleSectre.";
// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"] });

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser()); this passport-local-mongoose authentication

// Below ist serializeUser os  passport.js which will work with all kind of authentication stratgies.

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, {
      id: user.id,
      username: user.username,
      picture: user.picture
    });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/secrets",
  userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo" 
},
function(accessToken, refreshToken, profile, cb) {
  console.log(profile);
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/auth/google",
passport.authenticate("google", {scope: ["profile"]})
);

app.get("/auth/google/secrets", 
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect secrets.
    res.redirect("/secrets");
  });

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/secrets", function(req, res){
  // this the code to find and display the secret of the user without authentication.
   User.find({"secret": {$ne: null}}, function(err, foundUser){
    if(err){
      console.log(err);
    } else{
      if (foundUser){
        res.render("secrets", {userWithSecrets: foundUser});
      }
    }
   });
});

app.get("/submit", function(req, res){
    if (req.isAuthenticated()){
      res.render("submit");
    } else {
      res.redirect("/login");
    }
  });

  app.post("/submit", function(req, res){
    const submittedSecret = req.body.secret;
  
  //Once the user is authenticated and their session gets saved, their user details are saved to req.user.
    // console.log(req.user.id);
  
    User.findById(req.user.id, function(err, foundUser){
      if (err) {
        console.log(err);
      } else {
        if (foundUser) {
          foundUser.secret = submittedSecret;
          foundUser.save(function(){
            res.redirect("/secrets");
          });
        }
      }
    });
  });

app.get("/logout", (req, res) =>{
    req.logout(function(err) {
        if (err) {
          console.log(err);
        } else{
        res.redirect('/');
        }
      });
});

app.post("/register", (req, res) => {
    // const username = req.body.username;
    // const password = req.body.password;

    // bcrypt.hash(password, saltRounds, function(err, hash){
    //     const newUser = new User({
    //         email: username,
    //         password: hash,
    //     });
    
    //     newUser.save((err) => {
    //         if(err){
    //             console.log(err);
    //         } else{
    //             res.render("secrets");
    //         }
    //     });
    // });    
    
    
    // we are going to incorporate hashing,salting and authentication using passport.


    User.register({username: req.body.username}, req.body.password, function(err, user){
        if(err){
            console.log(err);
            res.redirect("/register");
        } else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            });
        }
    });




});

app.post("/login", (req, res) => {
    // const username = req.body.username;
    // const password = req.body.password;

    // User.findOne({email: username}, function(err, foundUser){
    //     if(err){
    //         console.log(err);
    //     } else{
    //         if(foundUser){

    //             bcrypt.compare(password, foundUser.password, function(err, result){
                    
    //                 if(result === true){
    //                     res.render("secrets");
    //                 }
    //             });
   
    //         }
    //     }
    // });     
    
    
    // we are going to incorporate hashing,salting and authentication using passport.


    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err){
        if(err){
            console.log(err);
        } else{

            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            });
        }
    });

});





app.listen(3000, function(){
    console.log("Server is on and running on port 3000.")
});
