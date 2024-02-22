
// function multiply(x , y){
//     console.log(x*y);
// }

// multiply(3 , 3);


// using the slice property.

/* var tweet = prompt("what is your tweet");
 var tweetunder140 = tweet.slice(0,141); 
 alert(tweetunder140);*/

//using toUpperCase and toLowerCase property to alert the user with
//the first alphabet of the name being capital.

/*var name = prompt("What is your name");
var letter0 = name.slice(0,1);
var letter_rem = name.slice(1,)
alert("Hello, " + letter0.toUpperCase() + letter_rem.toLowerCase() );*/

//string concatenation

/*var message= "Hello";
var name= "Gourav";
alert(message+ " there,  " +name );*/

//using basic arithmetic and modulo operator in javascript

/*var dogage = prompt("What is the age of your dog?");
 var humanage = (dogage-2)*4+21;
alert("Your dog is " + humanage + " in human years.");*/

//using parameters and arguements.

// function getMilk(money){

//     var noOfBottles = Math.floor(money /1.5);
//     console.log("Buy " + noOfBottles + " Bottles ");

//     return money % 1.5; //remainder of this division.
    
// }

// var change = getMilk(10);
// console.log(change + " dollor retuned after buying milk");

// bmi calculator challange

// function bmiCalculator(weight,height){
//     var bmi = Math.round(weight/(height*height));
//      if(bmi < 18.5){
//         return("Your BMI is " + bmi + " , so you are underweight.");
//   }
//     if (bmi > 18.5 && bmi <= 24.9){
//         return("Your BMI is " + bmi + " , so you have a normal weight");
//   }
//     if(bmi > 24.9){ 
//         return("Your BMI is " + bmi +", so you are overweight.");
//   }
    
// }

// bmiCalculator(70,1.8);


// building a love calculator.

// var n1 = prompt("What is your name?");
// var n2 = prompt("What is your partner's name?");

// var percen = Math.random() * 100;

// alert("Your love percentage is " + Math.round(percen) + "%");




// function isLeap(year) {
    
 /**************Don't change the code above****************/    
    
    
    
//     if (year % 4 === 0){
        
//           if(year % 100 === 0){

//               if( year % 400 === 0){
//                   return("Leap year.");
//               }else{
//                   return("Not leap year.");
//               }
//         }else{
//                   return("Not leap year.");
//               }
       
//    }else{
//                   return("Not leap year.");
//               }
    
   
/**************Don't change the code below****************/    

// }

// isLeap(2400);




//array challange

// var name = prompt("What is your name?");

// var guestList = ["Gourav", "Angela", "Jack", "Pam"];

// if(guestList.includes(name)){
//   alert("Your are welcome.");
// } else{
//   alert("Maybe next time.");
// }


//fizzbuzz challenge


// var output = [];
// var count = 1;



// function fizzBuzz(){

//  while(count<=100){
  
//   if(count%3 === 0 && count%5 === 0){
//    output.push("fizzbuzz");
//   }
//   else if(count%3 === 0){
//      output.push("fizz");
//     }
//    else if(count%5 === 0){
//        output.push("buzz");
//      }

//   else{
//      output.push(count);
//   }
  
//  count++;

//   }
 
//  console.log(output);
 
// }

// fizzBuzz();




//99 bottles challenge

// var numberOfBottles = 99 ;

// while (numberOfBottles>=1){

//  var bottleWord = "bottles" ;

//  if (numberOfBottles === 1){
//     bottleWord = "bottle";
//  }
// 		else if(numberOfBottles===0){

// 		console.log("no more bottles of beer on the wall, no more bottles of beer on the wall");
//     console.log("Go to store buy some more, 99 bottles of beer on the wall.");
  
		
// 	}

//      console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");


 
// }


//java script objects

// creating a object

// var houseKeeper1 = {
//     yearsOfExperience: 12,
// 	name:"tammy",
// 	cleaningRepertoire: ["lobby","beadroom","bathroom"]		
// }

//Now the above object this a single object and creating various object like this will be tedious.

//so to creat objects very efficently we ne to creat a constructor function.

//in a constructor function the name will start with a capital letter.

// function HouseKeeper(yearsOfExperience,name,cleaningRepertoire){

// 	this.yearsOfExperience= yearsOfExperience;
// 	this.name= name;
// 	this.cleaningRepertoire= cleaningRepertoire;
	
// 	//now here we will enter the data as the variable. with the help of this function we can ealisy creat new objects in 1 line of code.

// 	this.clean= function(){                            //adding a method function to the constructor function
// 		alert("cleaning is in progress.....");
// 	}
// }

// var houseKeeper2= new HouseKeeper(5,"diksa",["bathroom","kitchen"]); //use of the new keyword if important to creat new objects. 

// var houseKeeper5= new HouseKeeper(75,"putin",["lobby"]);

// function BellBoy(yearsOfExperience,name,cleaningRepertoire){

// 	this.yearsOfExperience= yearsOfExperience;
// 	this.name= name;
// 	this.cleaningRepertoire= cleaningRepertoire
// 	this.clean= function(){                            //adding a method function to the constructor function
// 		alert("cleaning is in progress.....");
// 	}

	
// }





