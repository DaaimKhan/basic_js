// array

// const myArr = [0, 1, 2, 3, 5, 5]
const myHeros = ["shakespere", "superman"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1]);

// array methods
// myArr.push(6); // add the value in the varialble
// myArr.pop(); // remove the last value

// myArr.unshift(9) // it add the value at first
// myArr.shift() // it remove the value

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join() // it join the array and give the string datatype
// console.log(typeof newArr);
// console.log(myArr);

// slice, splice
const myArr = [0, 1, 2, 3, 5, 5]

console.log(" A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log(" B", myArr);

const myn2 = myArr.splice(1, 3)
console.log(" C", myArr);
console.log(myn2);

