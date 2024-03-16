// for of (this loop used only on array, maps and can't be used on objects)
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}



//++++++++++++ for of loop on maps ++++++++++++++++++++++


//maps in js
// maps unique values ke liye jaani jaati hai, aur values order me rehti hai
const map = new Map()
map.set('IND' , "India") // we can initialize a map like this
map.set('USA' , "United states of america")
map.set('FR' , "France")

// console.log(map);
for (const [key, value] of map) { // we write "key, value" to destructure the array so that we can get the key and value seprated
   // console.log(key,':- value');   //if we write "key" to humare pass ek ek value aa jaegi.
}


//++++++++++++ for of loop on objects ++++++++++++++

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}
for (const [key, value] of myObject) {
    console.log(key,':- value');
}