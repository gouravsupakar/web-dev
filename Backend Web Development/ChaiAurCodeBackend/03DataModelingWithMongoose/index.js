import express from "express";

const app = express();

const port = process.env.PORT || 4000;


app.get("/", (req, res) => {
    res.send("This is the home page")
})




app.listen(port, () => {
    console.log("Server is up and running on port", port);
})