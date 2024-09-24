// call back function doesn't need function name
const coding = ["js", "php", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach( (value) => {
//     console.log(value);
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);    
// })

const myCoding = [
    {
        languageName: "javascript",
        languagefileName: "js"
    },
    {
        languageName: "Python",
        languagefileName: "py"
    },
    {
        languageName: "Node",
        languagefileName: "nodeJS"
    },
    {
        languageName: "GoLang",
        languagefileName: "go"
    },
    {
        languageName: "HTML",
        languagefileName: "html"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName, item.languagefileName);
    
})