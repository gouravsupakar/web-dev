import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRouter from "./routes/posts.js"
import cors from "cors"

dotenv.config();



const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))



const uri = process.env.DB_CONNECT;
const clientOptions =  {
    serverApi: {
        version: "1",
        strict: true,
        depricationErrors: true,
    },
}

mongoose.connect(uri, clientOptions, {useNewUrlParse: true})
.then(() => {
    console.log("Connected to database");
})
.catch((error) => {
    console.log("error connecting to the database", error);
});


//Routes
app.get("/", (req, res) => {
    res.send("this the home page");
});

// route middleware

app.use("/posts", postRouter);



app.listen(3000, () => {
    console.log("Server is up and running on port 3000");
})