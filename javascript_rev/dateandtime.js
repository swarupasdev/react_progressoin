//dates

//let myDate = new Date()
//console.log(myDate)
//console.log(typeof(myDate))
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toLocaleString())


//let mynewDate = new Date(2002, 9, 11)
//console.log(mynewDate.toString())
//console.log(mynewDate.toLocaleDateString())

//let myTimestamp = Date.now()
//console.log(myTimestamp) //milisecond output
//console.log(mynewDate.getTime())
//console.log(mynewDate)
//console.log(Math.floor(Date.now()/1000))


let oneDate = new Date(9, 11 , 2002)
let twoDate = new Date(9, 12, 2002)

//const oneTime = oneDate.getTime();
//const twoTime = twoDate.getTime();

let differenceDate = twoDate - oneDate
console.log(differenceDate)