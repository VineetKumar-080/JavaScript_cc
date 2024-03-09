// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1); // whenever you want to compare two values make sure they both have same datatype

console.log(null > 0);
console.log(null == 0); 
console.log(null >= 0); // is tareeke ke conversion kaabhi bhi confusion me daal sakte hai to inka use na kare

/*
The reason is that an equality check == and comparisons > < >= <= work differently
comparisons convert null to a number, treating it as 0.
that's why(3) null >= 0 is true and (1) null >0 is false
*/

//=== (strict check)
/*strictly check sirf value ko hi nahi balki uske datatypes ko bhi check karta hai
 when we use double equal to wo conversion karne lagta hai datatypes ka 
but === conversion nahi karta*/ 

console.log("2" === 2);