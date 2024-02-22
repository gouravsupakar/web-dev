

// $("h1").addClass("big-title"); //to add a class using jquery

$("h1").addClass("big-title margin-50"); //add multiple classes in the same same quotes with a space in between


// $("h1").css("color", "red"); using .css to change the style of the html element.

// $("h1").text("bye"); // this is the .text property with which we can change the text of h1.

// $("button").html("<em>hey</em>"); // instead of using .innerHTMLproperty we are using .html with jquery to get or set the html contents.

// $("a").attr("href", "https://in.search.yahoo.com/?fr2=inr"); // .attr property for changing the attribute of the html elements.


// $("h1").click(function(){   // adding a eventlistener using jquery.
//     $("h1").css("color", "purple")
// });


// $("button").click(function(){     //instead of using for loop to apply addeventlistener to all the button jquer it self apllied it to all the button elements.
//     $("h1").css("color", "purple")
// });


// $("input").keydown(function(event){   //addEventListener for key pressed on the key board
//      console.log(event.key)
// });

$(document).keydown(function(event){     // function to dispalay a key which is pressed as h1
      $("h1").text(event.key)
});








