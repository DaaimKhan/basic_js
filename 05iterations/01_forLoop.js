// video 27 = For loop with break and continue in javascript
for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5){
        // console.log("it is 5 no.");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value : ${j} and inner loop ${i}`);
        // console.log(i + " * " + j + " = " + i*j);
    }
}


let myArray = ["here", "sdjflsdjf", "jslkdfjklsdf"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element.length);   
}

// break and continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log(`detected 5`);
        break
        
    }
    // console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue
        
    }
    console.log(`Value of i is ${index}`);
}