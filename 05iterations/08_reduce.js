// reduce, same as call back function but given the two parameter (accumulator, currentValue)
// syntax
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, initialValue
// );


// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const myTotal = myNum.reduce(function (acc, currval) {
//     console.log((`acc: ${acc} and currval: ${currval}`));
//     return acc + currval
// }, 0 // either value start from 0 or any no. don't matter, initally accumulator start from the initial value
// );

// console.log(myTotal);

// trying to write with arrow function

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const myTotal = myNum.reduce( (acc, currval) => {
//     console.log((`acc: ${acc} and currval: ${currval}`));
//     return acc + currval
// }, 0
// );

// this way also we can write
// const myTotal = myNum.reduce((acc, currval) => acc + currval, 0);
// console.log(myTotal);

// another example
const shoppingCart = [
    {
        item: "js course",
        price: 2999
    },
    {
        item: "web development course",
        price: 2999
    },
    {
        item: "AI/ML course",
        price: 5499
    },
    {
        item: "Automation course",
        price: 8799
    },
    {
        item: "DevOps course",
        price: 1999
    },
];

const priceToPay = shoppingCart.reduce((accu, item) => accu + item.price, 0)

console.log(priceToPay);