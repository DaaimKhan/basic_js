let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30    
    // console.log("inner", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// video 22 - Scope level and mini hoisting in javascript

// nested scope
// function one(){
//     const username = "Daaim"

//     function two(){
//         const website = "Youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()

if (true){
    const username = "Daaim"

    if(username === "Daaim"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// Interesting question with concept
// in this case you can execute the function before the function
console.log(addone(4));
function addone(num){
    return num + 1
}

// it is the type of hoisting in which you cannot execute the function before the declaration the variable
addTwo(4)
const addTwo = function(num){
    return num + 2
}

