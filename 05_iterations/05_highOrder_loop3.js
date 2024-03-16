// for each loop(maximum used loop other than for in and for of)

const coding = ["js", "ruby", "java", "python", "cpp"] // for clear understanding (video- 29[23.00])

// coding.forEach(function (item){
//     console.log(item);

// })

//+++++++ example of arrow function instead of normal function +++++++
// coding.forEach( (item) => {
//     console.log(item);
// })

//+++++++ passing the function in foreach loop
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

//++++ we can more than one parameter in the loop
// coding.forEach( (item, index, arr) => {
//     console.log(item,index,arr);
// })


//********* multiple objects in array ***********

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    // console.log(`Name of the language is ${item.languageName}, and Name of the file is ${item.languageFileName}`);
})