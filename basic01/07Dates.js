// Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 23);
// let myCreatedDate = new Date(2024, 0, 23, 5, 4);
// let myCreatedDate = new Date("2024-1-24");
let myCreatedDate = new Date("01-1-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // give in the seconds
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'getDay'
})