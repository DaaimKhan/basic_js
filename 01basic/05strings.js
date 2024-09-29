// Premitive datatypes
// 7 type : Strings, number, boolean, null, undefined, symbol, bigInt

// const score = 100
// const scoreValue  = 100.2

// const isLoggedIn = false
// const outsideTemp  = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 1234325345345345345n



// reference (non premitive)

// Array, Objects, Functions

// const heros = ['test1', 'test2', 'test3'];

// let myOjb = {
//     name: "Daaim",
//     age: "22"
// }

// const myFunction = function(){
//     console.log("hello world");
// }

// console.log(typeof anotherId);




// *****************************************

// stack (primitive), heap memory(non primitive)
// let myName = "Daaim"
// let anotherName = myName
// anotherName = "Khan"

// console.log(myName);
// console.log(anotherName);

// let userOne = {
//     email: "daaim@gmail.com",
//     upi: "user@ybl"
// }

// let userTwo = userOne

// userTwo.email = "khan@gmail.com"
// console.log(userOne.email);
// console.log(userTwo.email);


// let name = "Daaim"

// let repoCount = 50

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hello-world-here-daaim");

// console.log(gameName.__proto__);
// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('o'))

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newString1 = "   hello   "
// console.log(newString1);
// console.log(newString1.trim());

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&t=681s"

// console.log(url.replace('youtube', 'daaim'));
// console.log(url.includes('youtube'));
console.log(gameName.split('-'));