import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const port = process.env.PORT;


// route

app.get('/', (req, res) => {
    res.send("Hello motherfucker this is the home page");
});

app.get("/twitter", (req, res) => {
    res.send("welcome to twitter");
})

app.get("/login", (req, res) => {
    res.send("<h1>Please login to see the posts.</h1>")
})


app.listen(port, () => {
    console.log("Server is up and running on", port);
})