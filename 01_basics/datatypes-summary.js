/*Primitive Datatypes = all primitive datatypes are call by value
jb hum jb inhe kahin se kahin copy karte hai to original memory refrence 
nahi diya jata, balki ek copy de jaati hai aur saare changes us copy me store hote hai */


// 7 types : String, Number, Boolean, Null(empty), undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);

const bigNumber = 654651613565165n // when we put n in the last then it will automatically become bigInt


// refrence Type(non-primitive datatypes)
// inka memory refrence aapko directly allocate kiya jata hai

// Array, Objects, Functions

//objects:-
const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name : "Vineet", // datatype can be anything array, string, boolean etc
    age : 21,
}

// we can treat function as a variable in javascript
//Function:- 
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction); // print function in terminal but it is object-function 

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//++++++++++++++++++++++++++++++++++++++++
//memory are of 2 types
//1. Stack(Primitive) memory
//2. Heap(Non-Primitive) memory

let myYoutubeName = "vineetkumar.com"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "vineet@gmail.com"

console.log(userOne);
console.log(userTwo);
