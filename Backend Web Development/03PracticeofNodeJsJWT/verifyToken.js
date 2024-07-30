const jwt =  require('jsonwebtoken');

module.exports = function (req, res, next) {

    // Step 1 get the token fron the request header

    const token = req.header('auth-token');

    //step 2 verify the token

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next(); 
    } catch (error) {
        res.status(400).send(error)
    }

}