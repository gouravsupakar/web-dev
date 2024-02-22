
//-----------------------------------
// Selector

console.log(document.getElementById('title'));

console.log(document.getElementById('title').id);

console.log(document.getElementById('title').className);

console.log(document.getElementById('title').innerText = "Heading");



//-------------------------------------------------------------
//   getAttribute('class....etc')


document.getElementById('title').getAttribute('id');

console.log(document.getElementById('title').getAttribute('class'));

console.log(document.getElementById('title').getAttribute('style'));


//-------------------------------------------------------------------
// setAttribute('style.....etc')

console.log(document.getElementById('title').setAttribute('class', 'test'));

console.log(document.getElementById('title').setAttribute('style', 'color: red'));

//----------------------------------------------------------------------
//   style.backgroundColor = 'green'


console.log(document.getElementById('title').style.backgroundColor = 'black');


//---------------------------------------------------------------------------------------
// converting the nodelist and HTMLCollection into Array to go through the elements

const listItem = document.querySelectorAll('li');  //here we will get a Node List which is similar to an array but not completly.
console.log(listItem);

const listItem2 = document.getElementsByClassName("list-item");
console.log(listItem2);

//convert to an Array

const myConvertedArray = Array.from(listItem);

console.log(myConvertedArray);

//Using the for loop to go through the array

myConvertedArray.forEach(function (items){
    items.style.color = "green";
    items.style.fontSize = "2rem"
    items.style.backgroundColor = "yellow"
});
