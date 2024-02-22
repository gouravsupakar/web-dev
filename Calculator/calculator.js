

const express= require("express");
const bodyParser= require("body-parser");

const app= express(); // setting new app which is going to use the express module

app.use(bodyParser.urlencoded({extended:true})); //here we are using the use method of express to use the body parser 

// for the normal calculator  

app.get("/", function(req , res){
    res.sendFile(__dirname + "/index.html");      //sending the html file to the server
});

app.post("/", function(req , res){    //using the .post method to send the data to the home root. which we have entered in html forms using post as method
    
    //(req.body is a property of body parser which gives us acces to form data)

     var num1= Number(req.body.num1); //storing the data that is requested (req.body.num 1) in num1 variable  (using the Number property of javascript to change a text into number) ( by default the request gives us the data as text) 
     var num2= Number(req.body.num2); //storing the data that is requested (req.body.num 2) in num2 variable   

     var result= num1 + num2 ; 
     
     res.send("The result of the calcullation is " + result);
});


// for the BMI Calculator

app.get("/bmiCalculator", function(req , res){
    res.sendFile(__dirname + "/BMIcalculator.html");
});

app.post("/bmiCalculator", function(req , res){
    var weight= parseFloat(req.body.weight);
    var height= parseFloat(req.body.height);

    var bmi= Math.round(weight/(height*height));

    res.send("Your BMI is " + bmi);
});


app.listen(3000, function () {
    console.log("server started on port 3000");
});



// with the help of node and express we have done all our calculation in the backend.