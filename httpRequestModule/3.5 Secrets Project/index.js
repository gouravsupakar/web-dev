import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

var userIsAuthorised = false ;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

function passwordCheck(req , res , next){
    const password = req.body["password"];
    if(password === "qwerty123"){
        userIsAuthorised = true;
    }

    next();
}

app.use(passwordCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


app.post("/check", (req , res) => {
    if(userIsAuthorised){
        res.sendFile(__dirname + "/public/secret.html");
    } else{
        res.redirect("/");
    }
    // sending back the index.html file back is the password is not correct.
});






app.listen(3000, () => {
    console.log("server is running on port 3000.");
});