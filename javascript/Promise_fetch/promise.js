// fetch("http://sometning.com").then().catch().finally();    consuming a promise

//Creating a promise

const promiseOne = new Promise(function (resolve , reject){
    // do any async task
    // database calls, cryptography , network

    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    }, 1000);

});

// consuming a promise

promiseOne.then(function (){
    console.log("PromiseOne consumed");
});


//-----------------------------------------------------------------------

new Promise(function (resolve , reject){
    setTimeout(function () {
        console.log("Async task 2 is done");
        resolve();
    },1000);
}).then(function (){
    console.log('Promise consumed');
});


//-------------------------------------------------------------------------

const promiseThree = new Promise((resolve, reject) => {

    setTimeout(function () {
        console.log("Task complete");
        resolve({ userName: "Gourav", email: "chai@example.com"});     // an object is always passed on inside the resolve method;
    },1000);
});

promiseThree.then(function(user){
    console.log(user);
    console.log(user.userName);
});


//---------------------------------------------------------------

const promiseFour = new Promise(function (resolve, reject){

    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({userName: "Krishn", place: 'Mathura'});
        } else {
            reject("ERROR: Something went Wrong.");
        }
    },1000);

});

promiseFour.then(function(data){               // data here is   {userName: "Krishn", place: 'Mathura'}
    console.log(data);
    return data.userName     
})
.then(function (user){        // user here is   data.userName                                          // the data that we return from the above .then() is passed the next .then()
    console.log(user);
})
.catch(function(error){
    console.log(error);
})
.finally(() =>{
    console.log("The promise is either resolved or rejected");
});



//---------------------------------------------------------------

// using async await with promise

const promiseFive = new Promise((resolve , reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({userName: "Mahadev", place: 'Kailash'});
        } else {
            reject("ERROR: javascript went Wrong.");
        }
    },1000);

});


async function consumePromiseFive(){
  try {
    const respone = await promiseFive;
    console.log(respone);
  } catch (error) {
    console.log(error);
  }
};

consumePromiseFive();



//-----------------------------------------------------------------

//using fetch and async await

// async function getUser(){
//     try {
//         const respone = await fetch("https://api.github.com/users/hiteshchoudhary");
//         console.log(respone);

//         const data = await respone.json();   // consverting the data received to json format

//         console.log(data);

//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }

// getUser();

//-----------------------------------------------

// fetch using .then() and .catch()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((respone) => {
    return respone.json();
})
.then((data) =>{
    console.log(data);
    console.log(data.followers);
})
.catch((error) =>{
    console.log("error: ", error);
});

