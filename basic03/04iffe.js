// video 24 - Immediately Invoked Function Expressions IIFE

// function for example
// function chai(){
//     console.log(`db connected`);
// }
// chai()

// now how to apply iffe, just put the function inside the paranthesis and remove the function name before the paranthesis
// global scope se polution hoti h kae baar to global plution ko hatane k liye hm iffe use krte hn

// Named IFFE
// (function chai(){
//     console.log(`db connected`);
// })(); // here we use the ; to end the function for the iffe

// Simple IFFE
// ( () => {
//     console.log(`db connected`);
// } )()

( (name) => {
    console.log(`db connected ${name}`);
} )('Daaim')
