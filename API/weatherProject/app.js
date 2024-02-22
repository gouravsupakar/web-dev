
const express = require("express");

const https = require("https");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req , res){    // here the res(response) is used to send the response to the client's browser. 
    
    res.sendFile(__dirname + "/index.html");  //when the user will call app.get the index.html file will be rendered to get the input friom the users
    
});

app.post("/", function(req , res){

    console.log(req.body.cityName);


    // creating a url constant to store the url of the API call.

const query = req.body.cityName; //using the req.body.cityName to store the input by the user
const apiKey = "f9a8639dee2955f6bc68329bfd913069";
const units = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+ units ;

https.get(url , function(response){    // here the response is used to get the data from the external servers
    console.log(response.statusCode);

    response.on("data" , function(data){   // after getting the data with the .get method to access the data we use .on method

        const weatherData= JSON.parse(data); // storing the data that we receive in form of java script object in a const variable

        const temp = weatherData.main.temp;  // storing the value of tempreature from the object named weatherData

        const description = weatherData.weather[0].description;   // storing the value of description from the object named weatherData.

        const icon = weatherData.weather[0].icon;

        const imgUrl = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"

        res.write("<h1>The tempreature in " + query + " is " + temp + " degrees celcius. </h1>");

        res.write("<p>The weather condition is " + description + ".</p>");

        res.write("<img src=" + imgUrl + ">");

        res.send();

    });  // uing the on("data", .. ) method to get hold of the response data from the external server


});  // using the https module and the get method to get the data


});






app.listen(3000, function () {
    console.log("The server is running on port 3000.");
});