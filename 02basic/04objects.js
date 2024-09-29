// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "sdjflsdjf"
tinderUser.name = "Daaim"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "daaim@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Mohd Daaim",
            lastName: "Khan"
        }
    }
}

// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.email);

const obj1 = {
    1: "a", 
    2: "b"
}

const obj2 = {
    3: "a", 
    4: "b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "daaim@gmail.com",
    },
    {
        id: 3,
        email: "test@gmail.com",
    },
    {
        id: 3,
        email: "tere@gmail.com",
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    courseName: "js",
    price: "999",
    courseIntructor: "Daaim"
}
// course.courseIntructor
const {courseIntructor} = course
const {courseIntructor: instructor} = course // // from here we can change the variable name
console.log(courseIntructor);
console.log(instructor);


