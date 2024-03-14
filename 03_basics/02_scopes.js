let a = 300                        //outside the block is known as global scope
if(true){
    let a = 10         // known as block scope
    const b = 20
    // console.log("INNER: ",a);
}
// console.log(a);
// console.log(b);
// console.log(a); 
/*var is outdated, var creates a variable in global scope and is sort of hacky and just generally a no no while let (and const ) 
creates a variable in local scope.*/

/* IMPORTANT INTERVIEW POV
core scope which is in inspect(console) are different, and the global scope
which we did with the help of node in code editor is different*/


// ++++++++++++++ nested scope+++++++++++++++++

function one(){
    const username = "vineet"
    
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "vineet"
    if(username === "vineet"){
        const website = " youtube"
        // console.log(username+website);

    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++ interesting +++++++++++

function addone(num){
    return num + 1
}
addone(5) // if we put addone(5) in line no. 44 then it will execute smoothly



const addTwo = function(num){ // we can also write function in that way. 
    return num + 2            // we see these kind of syntax in few more example in the future.
}

addTwo(5) // if we put addTwo(5) in line no. 51 then it will give error(because we are accessing it before declaration)
// because we hold the function in a variable and the function is declared differently
// " IT IS KNOWN AS HOISTING"





