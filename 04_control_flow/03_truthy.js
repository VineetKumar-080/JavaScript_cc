// suggested to watch the video 26(32.00) for clear understanding of the topic 
const userEmail = "v@ineet.ai"
if(userEmail){
    // console.log("got user email");
}else{
    // console.log("don't have user email");
}

//falsy values(in values ko false assume kiya jata hai)
/* 
1. false
2. 0
3. -0
4. BigInt(0n)
5. ""
6. Null, undefind, NaN
*/ // other than these value all values are truthy value

// Truthy values
/*
1. "0"  // ye value string ke ander hai isiliye truthy value hai
2. 'false' //  same as above
3. " "
4. []
5. {}
6. function() // empty function is a truthy value
*/


//+++++ to check that the array is empty or not
// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

//+++++ to check that the object is empty or not
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


// nullish coalescing operator(??): null, undefined (video 26->-42.00)
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = null ?? 10 ?? 4343 // null value ke baad jo second value aati hai usse hi assign kr deta hai
// us second ke baad aai hui value assign nahi hoti.
// console.log(val1);

/*nullish coalescing operator(??) basically ye kaam karta hai ki agr koi null value aai hai to
uska safety check kr deta hai, kyonki kayi baar null value ki wajah se program run nahi karta hai*/



// Terniary Operator
// condition ? true:false

const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80");
