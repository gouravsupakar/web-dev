import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";


const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("combined"));    //using the morgan middleware to log the request that comes to our server.



app.get("/", (req , res) => {
    res.send("<h1>Hello</h1>");
});





app.listen(3000, () => {
    console.log("server is running on port 3000.");
});