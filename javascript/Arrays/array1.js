// array

const myArr = [1, 2, 3, 4, 5, 6]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)   // creates a new array and puts in the values in the [] square brakets
// console.log(myArr[1]);

// Array methods

// myArr.push(6)     // inserts the value at the end of the array
// myArr.push(7)
// myArr.pop()      // removes the value at the end of the array

// myArr.unshift(9)   // inserts the value at the start of the array

// myArr.shift()     // removes the first element of the array     

// console.log(myArr.includes(9));    // checks whether the array includes 9
// console.log(myArr.indexOf(4));     // gives the index number of the value in the parenthesis

// const newArr = myArr.join()    // Adds all elements of the array into a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

// Slice gives us the array element mentioned without affecting the original array and does not include the last part of the range

console.log("A ", myArr);    // output A  [ 1, 2, 3, 4, 5, 6 ]

const myn1 = myArr.slice(1, 3)    
console.log(myn1); // output [ 2, 3 ]

console.log("B ", myArr); //Output B  [ 1, 2, 3, 4, 5, 6 ]

// Slice gives us the array element mentioned in the range including the last part and it changes the original array
// by cutting the numbers mentioned and creating a new array

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);    // output C  [ 1, 5, 6 ]  this was the original array

console.log(myn2); // output [ 2, 3, 4 ]