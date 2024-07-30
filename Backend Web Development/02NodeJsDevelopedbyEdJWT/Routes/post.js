const router = require('express').Router();
const verify = require('../verifyToken');

router.get('/', verify, (req,res) => {

    const user = req.user;

    res.send(user);
    
    // res.json({
    //     posts:{
    //         title: 'my first post',
    //         description: "you are not allowed to see without loggin in."
    //     }
    // })
})

module.exports = router;
