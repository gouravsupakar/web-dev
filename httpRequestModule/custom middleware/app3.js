import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

var bandName = "";


function bandNameGenarator(req , res , next){
    console.log(req.body);
    bandName= req.body["street"] + req.body["pet"];
    next();
};

app.use(bandNameGenarator);

app.get("/", (req , res) => {
    res.sendFile(__dirname+ "/public/index.html");
});

app.post("/submit", (req , res) => {
    res.send('<h1>Your Band Name is: </h1>' +  `<h2>${bandName}</h2>` );
});


app.listen(3000, () => {
    console.log("server is running on port 3000.");
});