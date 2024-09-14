const heros = ["test", 'test3', "hello"]
const dc = ["dsf", "jlj", "sdfsf"]

// heros.push(dc);
// console.log(heros);  // it add complete array

// const test = heros.concat(dc);
// console.log(test);

// spread operator
// const allHeros = [...heros, ...dc]
// console.log(allHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 3, [8, 9]]]
const realArray = anotherArray.flat(Infinity)
console.log(realArray);

console.log(Array.isArray("Daaim")) // create the string into array
console.log(Array.from("Daaim"))
console.log(Array.from({name: "Daaim"})) // interesting


let score1 = 100
let score2 = 400
let score3 = 600

console.log(Array.of(score1, score2, score3));


