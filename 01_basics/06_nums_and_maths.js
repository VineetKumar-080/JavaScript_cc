const score = 400
//console.log(score);

const balance = new Number(100) // with the help of this method we can strictly say that we need a number
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //this method is used to format a number in fixed-point notation

const otherNumber = 123.8959
//console.log(otherNumber.toPrecision(5))

/*Its primary purpose is to format a number to a specified precision, 
returning a string representation of the number with the desired level of accuracy*/

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // this method is used to mark commas in the big digit numbers
// console.log(hundreds.toLocaleString('en-IN')); // but when we put [en-IN] in the method then the commas are implanted on the basis of indian currecy system

//+++++++++++++++++++++ MATHS +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(4)); // change the -sign to positive, but positive remain positive
// console.log(Math.round(4.6));// to roundoff the value
// console.log(Math.ceil(4.2)); // with the help of this method we can always choose the top value
// console.log(Math.floor(4.9)); // with the help of this method we can always choose the floor value of the given number
// console.log(Math.min(4,3,5,7)); // use to find the min. value
// console.log(Math.max(4,7,9,10));// use to find the max. value

console.log(Math.random());// values always come between 0-1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
/* sometime we achieve a value which is 0.04, and to avoid such kind of value we use +1
and the correct syntax to use the +1 are written above
First we wrap the value with the multiplication of 10 and then add 1*/

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min);

/* in the above code we use math.random, but instead of mulitply it with 
10 we mulitply it with (max-min) to achieve the range that we want.
and we add a +1 to avoid the zero case. this is same as above code:32
we add a min. value so that we can atleast achieve min. value*/