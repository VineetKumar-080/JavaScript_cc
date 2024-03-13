// const tinderUser = new Object()
const tinderUser = {} 
tinderUser.id = "123skaf"
tinderUser.name = "ram"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "vineet",
            lastname: "kumar",
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)// here we use a empty paranthesis to store all the value and get an accurate result
// it is not necessary but we have to write it for the appropiate code view.


const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// It is a very important syntax 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));
// this method is used to find that the object have the specific property or not 
// it's a manual method


// object de-structure
const course = {
    cousrname: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor - "this is absolutely the right way, but there are also some other way"

const {courseInstructor:instructor} = course
console.log(instructor);// this is we can say that the latest and appropiate method to access the object values


// it is an API which is present in json fromat.
// json fromat look like an object
// {
//     name: "vineet",
//     coursename: "js in hindi",
//     price: "free"
// }
