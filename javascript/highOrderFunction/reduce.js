const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const initialValue = 0;

const sum = myNum.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue,
     initialValue,
    );

    console.log ("The sum of all the element in the array myNum: " + sum);



  //  eg 2

const shoppingCart = [
    {
        name: "js",
        price: 2999
    },

    {
        name: "py",
        price: 999
    },

    {
        name: "Mobile dev app",
        price: 5999
    },

    {
        name: "Data science",
        price: 12999
    },
];

const priceToPay = shoppingCart.reduce((acc, item) => 
                        (acc + item.price), 0);



    console.log(priceToPay);                    