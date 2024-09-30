// const myNum = ['1', '2', '3', '4', '5', '6', '7']
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newNums = myNum.map((num) => num + 10)

// channing = in we use more map, filter together

// const newNums = myNum.map().map()
const newNums = myNum
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 50)

console.log(newNums);
