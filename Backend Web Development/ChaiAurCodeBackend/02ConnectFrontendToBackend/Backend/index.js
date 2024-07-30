import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from 'cors'


dotenv.config();

const app = express();
const port = process.env.PORT || 4000 

// app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("This is home page");
});

//get a list of five jokes

app.get("/api/jokes", (req, res) => {

    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "Another joke",
            content: "This is another joke"
        },
        {
            id: 3,
            title: "Third joke",
            content: "This is Third joke"
        },
        {
            id: 4,
            title: "Fourth joke",
            content: "This is Fourth joke"
        },
        {
            id: 5,
            title: "Fifth joke",
            content: "This is Fifth joke"
        }
    ];

    res.send(jokes);
});





app.listen(port, () => {
    console.log("Server is up and running on port", port);
})