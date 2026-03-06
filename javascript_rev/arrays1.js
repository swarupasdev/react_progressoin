let myArr=[10,11,12,13,14,15]

let anewArr= myArr.slice(1, 4)
console.log(anewArr)

let annewArr = myArr.splice(1, 4)
console.log(annewArr)

const marvel_heros=["Iron man","Thor","Antman","Wolverine","Magneto"]
const dc_heros=["Superman","Batman","Greenarrow","Flash","Black canary"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)  array inside other array result

//marvel_heros.concat(dc_heros)  mistake made commonly wont combine anything because we are not holding the value of both arrays in some other array according to concat() definition 
//console.log(marvel_heros)

let all_heros= marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]
const an_another_array = another_array.flat(Infinity)
console.log(an_another_array)


console.log(Array.isArray("Swarup"))  //checks the validity if array or not
console.log(Array.from("Swarup"))  //converts everythhing to array

console.log(Array.from({ name: "Swarup" }))  //cant return an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


