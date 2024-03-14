const user = {
    username: "vineet",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);// for current context we use "this" keyword
        console.log(this)

    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
// imp. info. about this on video - 23(7.55)


// function chai(){
//     let username = "vineet"
//     console.log(this.username); //we can't use "this" in function
// }
// chai()

// const chai = function(){
//     let username = "vineet"
//     console.log(this.username);
// }

const chai = () => {                    // we can declare arrow function like this
        let username = "vineet"         //remove the function keyword and place a arrow
        console.log(this.username);
    }
// chai()


// const addTwo = (num1,num2) => { // An example of simple arrow function
//     return num1 + num2
// }

// const addTwo = (num1,num2) =>  num1 + num2 // an example of implicit arrow function(in explicit we have to write return keyword)

// const addTwo = (num1,num2) =>  (num1 + num2) // if we use curly bracket instead of parenthesis then we have to write the return keyword
// "this is a very usefull technique in react.js"

const addTwo = (num1,num2) =>  ({username: "vineet"}) // if you want to return the object then the syntax should by this.
console.log(addTwo(3,4))


