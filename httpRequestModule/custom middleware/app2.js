import express from "express";


const app = express();

function logger(req, res, next){
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);
    next();
}

app.use(logger);


app.get("/", (req , res) => {
    res.send("<h1> hello bhai</h1>");
});







app.listen(3000, ()=>{
    console.log("server is running on port 3000.");
});