// if Statement
const isUserLoggedIn = true
const temperature = 40

// if(temperature < 50){
//     console.log("less than 50")
// }
// console.log("temp is greater than 50")

// comparison operator - <, >, <=, >=, !=, ===, !==

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// short hand notation
// const balance = 1000
// if(balance>500) console.log("tese");  // it is implicit scope, and it bad code

// if (balance < 500){
//     console.log("less than");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900) {
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const userLoggedInFromgoogle = false
const userLoggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("allow to buy course");
}

if(userLoggedInFromgoogle || userLoggedInFromEmail){
    console.log("User LoggedIn");
}
