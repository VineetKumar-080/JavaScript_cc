const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.map( (num) => num + 10)


// we use map after map and also write a filter after writing maps(this is called CHAINING)
const newNums = myNums
.map( (num)=> num * 10)
.map( (num) => num + 1)
.filter ( (num)=> num >= 40 )
console.log(newNums);