// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getTimezoneOffset());

//console.log(typeof myDate);
// sometime also ask in interview 
//these are some methods for date in javascript/.

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

//timestamp in js
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());// by using getMonth we can find the accurate date


newDate.toLocaleString('default', {
    weekday: "long"
})
// it is a kind of different method TS-15.00 (video-13)