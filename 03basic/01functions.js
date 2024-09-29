function sayMyName(){
    console.log("D");
    console.log("a");
    console.log("a");
    console.log("i");
    console.log("m");
}
// sayMyName()

// function addtwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

function addtwoNumbers(num1, num2){
    // 1
    // let result = num1 + num2
    // return result

    // 2
    // return num1 + num2
}

// addtwoNumbers(3, 1)
// addtwoNumbers(3, "1")
// addtwoNumbers(3, "a")

const result = addtwoNumbers(3, 5)
// console.log("Result:", result);

function loginUser(username){
    if(!username){
        console.log("please enter the username");
        return 
    }
    return `${username} just loggedin`
}

// console.log(loginUser("Daaim"));
// console.log(loginUser()); // output will be = undefined just loggedin
// ... rest and spread operator

// function calculateCartPrice(...num1){
//     return num1
// }
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400));
// object
const user = {
    username: "daaim",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 199
// })

// array
const myNewArray = [200, 400 , 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));