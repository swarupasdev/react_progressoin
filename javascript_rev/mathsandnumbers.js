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


//-----------Maths------------
console.log(Math)
console.log(Math.abs(-6))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.min(4, 3, 6, 8))
console.log(Math.max(4, 3, 6, 8))

console.log(Math.random())
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)))