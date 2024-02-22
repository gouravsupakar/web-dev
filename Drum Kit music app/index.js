
// detecting button press

var numberOfDrumButtons= document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick); //.addEventListener("enent", function) we just write the function name without the set of prantheses . the event listener calls a function on happning of certain event.

function handleClick(){
   
    var buttonInnerHTML= this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);


  }


}


// detecting keyboard press


document.addEventListener("keydown",function(event){
    
    makeSound(event.key);

    buttonAnimation(event.key);

})

// using the switch statement to make sound when a button or key is pressed.

function makeSound(key){

    switch (key) {
        case "w":
         var tom1= new Audio("sounds/tom-1.mp3");
         tom1.play();   
            break;

        case "a":
         var tom2= new Audio("sounds/tom-2.mp3");
         tom2.play();   
            break; 
            
        case "s":
         var tom3= new Audio("sounds/tom-3.mp3");
          tom3.play();   
               break; 

         case "d":
          var tom4= new Audio("sounds/tom-4.mp3");
          tom4.play();   
             break;       
        
         case "j":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();   
               break; 
               
         case "k":
          var kick= new Audio("sounds/kick-bass.mp3");
          kick.play();   
             break;  
             
         case "l":
         var crash= new Audio("sounds/crash.mp3");
            crash.play();   
            break;
               
    
        default: console.log(buttonInnerHTML);
            
      }


}

//creating a function for the animation.

function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+ currentKey );
    activeButton.classList.add("pressed");

    //creating a timeout function 

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);

}



