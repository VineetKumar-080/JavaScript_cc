// we can declare string like:-
const name = "Vineet"
const repoCount = 50

//console.log(name+repoCount+" value");
// this is older version of writing string and also a very bad way


/* In the recent days we use backtick('') It is a modern which is usually known as String Interpolation */
// Here is an example
console.log(`Hello my name is ${name} any repo count is ${repoCount}`);

// we can also declare string as
const gameName = new String('vineet-kk-stoic')

// console.log(gameName[0]);
// console.log(gameName.__proto__); //to access the prototype method we use .__proto__


// console.log(gameName.length); // this function/method is used to find the length of the string
// console.log(gameName.toUpperCase);// this function/method is used to convert the string into uppercase

// console.log(gameName.charAt(3)); // this function/method is used to find the value of the char. at specific index
// console.log(gameName.indexOf('t'));//this function/method is used to find the value of index of the specific character

const newString = gameName.substring(0,4) // we use this method to print the value between the index
console.log(newString);// but in this function we cannot access the last value i.e. 5th one in this case

const anotherString = gameName.slice(-8,4)
console.log(anotherString);// we can use negative value in slice 

// we can also give negative value in substring, it will simply ignore the -ive sign ans start from 0 index

const newStringOne = "      stoic      "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim will simply remove the starting and ending spaces from the string


const url = "https://vineet.com/vineet%20stoic"
console.log(url.replace('%20','-'))
// url.replace was used to repalce somthing in the url

//Our browser can't uderstand spaces, it will simply replace the spces with %20

console.log(url.includes('vineet'))
// this method is used to find the specific keywords in the string 

console.log(gameName.split('-'));
//With the help of this method we can split the string on the basis of anythind on which we want to seprate the string 