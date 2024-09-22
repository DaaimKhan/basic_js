
// const userEmail = "daaim@gmail.com"
// const userEmail = []

// if(userEmail){
//     console.log("got user email");
// } else{
//     console.log("don't have user email");
// }

// false values
// false, 0, -0, bigint 0n, "", null, undefined, NaN

// true values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length == 0){
//     console.log("array is empty");  
// }

// const emptyOjb = {}

// if(Object.keys(emptyOjb).length === 0){
//     console.log("object is empty");
// }


// false == 0      output = true
// false == ''     output = true
//    0  == ''     output = true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

