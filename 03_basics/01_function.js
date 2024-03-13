
// simple to initialize a function 
function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("T");
}

//sayMyName() // "sayMyName is a refrence of a function", and "() this is execution the function"

// it an example of how to make a function 
// function addTwoNumber(number1, number2){ // value in the parenthesis are called parameters
//     console.log(number1 + number2);
// }


function addTwoNumber(number1, number2){ 
    // let result = number1 + number2
    // return result
    // return likhne ke baad function kuch aur console log ya return nahi karega
    // console.log("vineet");

    // right above there are some methods to return the value.

    return number1 + number2
}

const result = addTwoNumber(3, 4)// here when we call a function, then the value in parenthesis are called arguments
// console.log("Result ", result);


// function me jo arguments aur parameters pass kiye gaye hai wo aur kis kis tareeke se pass kiye jaa sakte hai
// let see (hahahahaha)

function loginUserMessage(username){
    if(username === undefined){ // we can also write as "!username". it has same meaning of ===
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("vineet"))
// console.log(loginUserMessage()) // if we do not pass any arguments then in the console it shows UNDEFINDED
// because we defined nothing.

// ... is also known as spread operator and rest operator
function calculateCardPrice(val1,val2,...num1){ // here we use restoperator and with the help of this operator we can pass as many value as we want
    return num1
}// (if we write val1 and val2 then first 2 value goes into val1,val2 and rest of them go into num1)
console.log(calculateCardPrice(200, 400, 500, 4000, 2345,2345234))

// how any object can pass into a function:-
const user = {
    username: "ram",
    price : 100
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
 
}

// handleObject(user)
handleObject({
    username: "sam",   // we are directly passing the objects in the function.
    price: 399  
})


const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
    
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));  // these all are different ways you can choose whatever method you want to choose







