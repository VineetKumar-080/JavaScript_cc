// whenever you want to check one variable through different condition then we use switch statement

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("march");
        break; // break breaks the control flow
    case 4:
        console.log("april");
        break;

        // ek baar jahan pr bhi case match ho gya uske baad ka sara ka sara code execute karta hai
        // except default.

    default:
        console.log("default case match");
        break;
}