const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {registerValidation, loginValidation} = require('../validation')


router.post("/register", async(req, res) => {

    // validating the user input
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    

    // checking is user already exist
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send("Email already exist")

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // creating new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try {
        //saving  the user in the database
        const savedUser = await user.save();
        res.send({user: user._id});
    } catch (error) {
        res.status(400).send(error)
    }
});

router.post('/login', async(req,res) => {

    // validating the user input
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    //checking is user exist or not
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send("Email is not found");  // if user does not exist then return and send 400 status and a message

    // checking password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Incorrect Password');   // if valid password does not exist then retur and send 400 status code and a message

    // creating and asigning jwt token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);

})


module.exports = router;