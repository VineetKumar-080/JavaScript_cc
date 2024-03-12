// we can declare object as a literal and as a constructor
//  jb bhi object literal se declare karte hai to singleton nahi banta hai,
// constructor se agr banega to humesha singleton hi banega.

//object literals

//Object.create (it is a constructor method to declare an object)

const mySym = Symbol("key1")

const jsUser = {
    name: "vineet",
    "full name":"vineet Kumar", // we can't access these value with the help of dot
    [mySym]: "mykey1", // here we are using symbol as a key in object
    age: 21,
    location: "CU",
    email: "jaadu@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]
}

// console.log(jsUser.email); //this is not the appropiate way to access the object
// console.log(jsUser["email"]); // appropiate way to access an object
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]); // this is the only way to access a symbol from the object.


// how we can change the vlaue of an object.
jsUser.email = "vineet@gmail.com" // with the help of = sign we can overwrite the value
//Object.freeze(jsUser) // with this method we can freeze the object
jsUser.email = "chatgpt@gmail.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello User")
}
jsUser.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`); // whenever you want to refrence the same object then you should you "this".
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
