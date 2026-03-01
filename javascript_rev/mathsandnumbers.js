const score = 40  //simple pattern
console.log(score)
console.log(typeof(score))	//number
const balance = new Number(100)  //
console.log(balance)
console.log(typeof(balance))  //object
console.log(balance.toString().length)
console.log(balance.toFixed(1))  //digits after the decimal
console.log(typeof(balance)) 

const newBalance = new Number(29)
console.log(newBalance.toPrecision(5)) //scientific notation
console.log(typeof(newBalance))
console.log(newBalance)
