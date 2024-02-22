// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname  + "/date.js")

 const app = express();

 mongoose.connect("mongodb://127.0.0.1:27017/todolistDB", {useNewUrlParser: true});

 const itemSchema = {
    name: String
 };

 const Item = mongoose.model("Item", itemSchema);
 

let items= ["Wake up at 6 am", "complete your morning studies", "Go to the gym at 11 am"];
let workItems= [];

app.set("view engine", "ejs");
 
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/" , function(req , res){
    
    let day = date.getDate();
    
    res.render("list", {listTitle: day, newListItems: items});
});


app.post("/", function(req , res){
    

   let item = req.body.newItem ;

   if(req.body.list === "Work list"){
   
    workItems.push(item);
    res.redirect("/work");

   } else{

    items.push(item);
    res.redirect("/");

   }

  
   
});



app.get("/work", function(req , res){
    res.render("list", {listTitle: "Work list", newListItems: workItems});
});






app.listen(3000 , function(){
    console.log("server is up and running on port 3000.");
});