const name = "san"
const repocount = "20"
console.log(`hello my name is  ${name} and my repo count is ${repocount}`)

const gamename = new String('Cricket')
//new keyword is for creating a object

console.log(gamename)
console.log(gamename.__proto__)

console.log(gamename.length)
console.log(gamename.charAt(2))
console.log(gamename.indexOf("t"))
console.log(gamename.__proto__)
console.log(gamename.toUpperCase())
const newString = gamename.substring(0, 4) // no negative valu
const anotherString = gamename.slice(-6, 3)
console.log(newString); 
console.log(anotherString)