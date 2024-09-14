// single ton

// object literals
// Object.create

const mySym = Symbol("key1")
const jsUser = {
    name: "Daaim",
    "full name": "daaimKhan",
    age: 24,
    [mySym]: "key1",
    location: "Kashipur",
    email: "daaim@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "chatgpt.com"
// Object.freeze(jsUser) // it don't allow to change if use the freeze
jsUser.email =  "daaimkhan86@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello Js user");
    return "Greeting function executed";
}
jsUser.greetingtwo = function(){
    console.log(`hello Js user, ${this.name}`);
    return "Greeting function executed";
}


// console.log(jsUser.greeting); // it dont execute the function only give the reference
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());


