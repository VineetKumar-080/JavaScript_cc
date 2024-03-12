const myArr = [0,1,2,3,4,5]
const myHeros = ["superman", "batman", "spiderman"] // it a simple way to initialize an array

const myArr2 = new Array(1,2,3)// we can also declare an array like this
// but here don't have to use square bracket

//console.log(myArr[0]);


// Array Methods

// myArr.push(6) // push is a simple method to add a value in array
// myArr.push(7) 
// myArr.pop() // pop method remove the last value of an array

// myArr.unshift(9) // unshift method insert the value on the first position of the array
// myArr.shift() // shift method remove the first digit from the array


// console.log(myArr.includes(8)); // this method is like a question which tell us that the value is present in the array or not.
// console.log(myArr.indexOf(9));// tell us the value at a specific index

// const newArr = myArr.join()// this method bind the array and also convert the array into a string
// console.log(typeof newArr);
// console.log(myArr);


// slice, splice (imp. for interview POV)

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)//((1-3)start from 1 to 2 donot include 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);
 
/* when we use splice like form 1-3 then the value from 1-3 is removed
from the original array.

somepeople say that in slice it do not include the last specified value
while in splice it include the last specified value, which is completely wrong answer.
correct answer is in line 41+42*/

