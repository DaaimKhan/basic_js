// video = 29 High Order Array loops

// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

// for (const element of object) { // <--- forof syntax
    
// }
for (const element of arr) {
    // console.log(element);
    
}

const greetings = "hello world"
for (const greeting of greetings) {
    // console.log(`each char is ${greeting}`);
    
}


// maps
const map = new Map()
map.set('Uttarakhand', 'India')
map.set('USA', 'America')
map.set('Fr', 'France')

console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
    
}

// here objects are not iteratable in forof loop
const myObject ={
    'game' : 'nfs',
    'game2' : 'god of war'
}
for (const [key, value] of myObject) {
    console.log(key, ":-", value);
}
