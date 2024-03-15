// pura code run nahi hona chaiye, jb kissi ek cheej ka kaam hai to bus ussi se related code run hona chaiye
// isse kehte hai control flow

// if statement
const isUserLoggedIn = true
const temperature = 41
// if (temperature === 40){
//     console.log("less than 50");
// }else {
//     console.log("temperature is greater than 50`");
// }

// const score = 200
// if(score>100){
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }else{
//     console.log(" user don't have any power");
// }
// // console.log(`user power: ${power}`)


//+++++++++ short hand notation ++++++++
// const balance = 1000
// if(balance>500) console.log("test"), // you can write console.log right after the if but make in one line only, don't mark "," and start the next line
// console.log("test2");          // this is an example of an im-mature code

//+++ nesting in js +++++
// if(balance <  500){
//     console.log("less than 500");
// }else if(balance <750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log(balance < 900);
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(userLoggedIn && debitCard){    // "&&"- ampercent- all the condition should be right to execute the code
    console.log("Allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){  //"||", one of the condition bhi agr true hai to code execute ho jaega.
    console.log("User logged in");
}


 
