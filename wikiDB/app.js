const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash"); 


const app = express();

 mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", {useNewUrlParser: true}, 
                  mongoose.set('strictQuery', true));


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

const article1 = new Article({
    title: "My name is Gourav.",
    content: "I am learning how to create a RESTful APIs"
});
















app.listen(3000 , function(){
    console.log("Server is up and runing on port 3000.");
});