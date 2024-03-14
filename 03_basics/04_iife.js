// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    console.log(`DB connected`);
})(); // we use these semicolon to stop the IIFE function

// to convert a normal function into IIFE function we wrap the whole function into parenthesis

( () => {
    console.log( `DB connected Two`);
})() 

// kayi baar global scope ke pollution se problem hoti hai,  to jo global
//scope ke variables hai ya jo bhi wahan pollution ko hatane ke liye IIFE ka use kiya
