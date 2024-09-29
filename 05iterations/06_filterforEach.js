// video 30 = Filter map and reduce in javascript

// const coding = ["js", "php", "java", "python", "cpp"]

// // here foreach give the undefined becoz it is not return anything
// const value = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })
// console.log(value); // it will give the undefined

// const myNum = ['1', '2', '3', '4', '5', '6', '7']
// const newNum = myNum.filter((num) => num > 4) // it we write parameter with condition

// const newNum = myNum.filter((num) => {
//     return num > 4                        // when we open the scope it mandatory to give the return
// })
// console.log(newNum);


// by using foreach loop
// const myNum = ['1', '2', '3', '4', '5', '6', '7']
// const newNum = []

// myNum.forEach((num) => {
//     if(num>4){
//         newNum.push(num)
//     }
// });

// console.log(newNum);

// taking the books example

const books = [
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        publish: 1960,
        edition: "1st"
    },
    {
        title: "1984",
        genre: "Dystopian",
        publish: 1949,
        edition: "1st"
    },
    {
        title: "The Great Gatsby",
        genre: "Classic",
        publish: 1925,
        edition: "1st"
    },
    {
        title: "Moby-Dick",
        genre: "Adventure",
        publish: 1851,
        edition: "1st"
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        publish: 1813,
        edition: "1st"
    },
    {
        title: "The Catcher in the Rye",
        genre: "Literary Fiction",
        publish: 1951,
        edition: "1st"
    },
    {
        title: "Brave New World",
        genre: "Science Fiction",
        publish: 1932,
        edition: "1st"
    },
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        publish: 1954,
        edition: "1st"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publish: 1937,
        edition: "1st"
    },
    {
        title: "War and Peace",
        genre: "Historical Fiction",
        publish: 1869,
        edition: "1st"
    }
];


let userBooks = books.filter((bk) => bk.genre === 'Fantasy')
// by using the scope we also give the return keyword
userBooks = books.filter((bk) => { return bk.publish > 1911 })
console.log(userBooks);
