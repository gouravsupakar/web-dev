
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true });


const fruitSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true,"name not entered, please check the data entered"]
  },
  rating:{
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 5,
    review: "Taste Good"
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Great fruit."
});

// pineapple.save();

const grapes = new Fruit({
    name: "Grapes",
    rating: 10,
    review: "Great for a bottle of wine"
});

// grapes.save();

const person = new Person({

    name: "Gourav supakar",
    age: 22,
});

// person.save();

Person.updateOne({name: "Gourav supakar"}, {favouriteFruit:grapes}, function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Updated the document.");
    }
});



// const amy = new Person({
//     name: "Amy",
//     age: 25,
//     favouriteFruit: pineapple
// });

// amy.save();

// const mango = new Fruit({
//     name: "Mango",
//     rating: 10,
//     review: "taste awesome"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 6,
//     review: "its allright"
// });

// Fruit.insertMany([mango, banana], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully saved all the fruits to fruitsDB"); 
//     }
// });



Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    } else {

        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});


// Fruit.updateOne({_id:"6486e827bf1badf930b49418"}, {name: "Peach"}, function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Successfully updated the document.");
//     }
// });

// Fruit.deleteOne({_id:"648872b16e43a508e1b22d56"}, function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("deleted an item");
//     }
// });


// Person.deleteMany({name: /Gourav supakar/, age: {$gte: 22}}, function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("successfully deleted the docs.")
//     }
// });