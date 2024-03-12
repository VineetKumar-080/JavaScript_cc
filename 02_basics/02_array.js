const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) // it directly push an array into an another array
// // console.log(marvel_heros[3][1]);

// const newMarvel = marvel_heros.concat(dc_heros) // with the help of concatenate we can merge arrays and
// // concatinate process deliver the output in an array
// console.log(newMarvel);

/* we can also concatinate 2 array without using both above operation
and can cont. with the help of Spread operator*/

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //flat(infinity) solve the complex array and convert it into a flat array
console.log((real_another_array));// we maily say infinity so that it can automatically solve all depth of an array.



console.log(Array.isArray("vineet")) // help to find the given code is array or not
console.log(Array.from("vineet")) // covert anything into array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
// .of method converts the above variables in an array



