// this keyword is used to refer the current function in which it is present,
const user = {
    username: "Daaim",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Khan"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "Daaim"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "Daaim"
//     console.log(this.username);
// }

// chai()
// this also syntax for function
const chai = () => {
    let username = "Daaim"
    console.log(this.username);
}
// chai()

// () => {}  arrow function syntax

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return same as above, in this no need to use the return

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// return the object
const addTwo = (num1, num2) => ( {username: "Daaim"} )

console.log(addTwo(3, 5));
