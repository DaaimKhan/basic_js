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
console.log(loginUser()); // output will be = undefined just loggedin