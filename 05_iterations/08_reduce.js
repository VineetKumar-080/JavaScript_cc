const myNums = [1,2,3]
// const  myTotal = myNums.reduce(function (accumulator, currentvalue) {
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentvalue}`);
//     return accumulator + currentvalue
// },0)


//+++++++ same but with arrow function

const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator+currentValue, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price : 3000,
    },
    {
        itemName: "python course",
        price : 999,
    },
    {
        itemName: "mobile dev course",
        price : 7000,
    },
    {
        itemName: "data sciece course",
        price : 12000,
    },
]

const priceToPay = shoppingCart.reduce( (accumulator,item) => accumulator + item.price,0)
 console.log(priceToPay);


 // THE BASICS OF JAVASCRIPT ARE COMPLETED UPTO VIDEO 30