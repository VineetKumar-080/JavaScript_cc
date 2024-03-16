// for in loop(this loop used in object)

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : "ruby",
    swift : "swift by apple"
}
for (const key in myObject) {
//  console.log(`${key} shortcut if for ${myObject[key]}`);  
}
// if we just write keys in console.log then we only get the keys.
// but if we want to extract the object with the keys than we have to use the above syntax.

// ++++++++++++++ for in loop on array ++++++++++++++++


const programming = ["js", "ruby", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]); // if we direct use key on the place of programmig, then it will return only keys(0,1,2,3)
    // if we want to get the element in the array then we should use the above syntax
}

