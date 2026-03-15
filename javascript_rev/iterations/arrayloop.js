//for of

const arr = [1, 3, 9, 7, 3]
//for (const iterator of object) {}
for (const num of arr) {

    console.log(num)
}

const greetings = "Hello world"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`)
}

const map = new Map()  //unique value and oderly output
map.set('IND', 'INDIA')
map.set('USA', 'America')
map.set('FRA', 'FRANCE')

console.log(map)

for (const key of map) {
    console.log(key)
}

const myObject = {
    'game1': "NFS",
    'game2': "GTA"
}
//for (const [key, value] of myObject) {
//    console.log(key,value)
//}  wont iterate
for (const key1 in myObject) {    //for..in
    console.log(`${key1}:${myObject[key1]}`)
}

const prog = ["c", "cpp", "java", "ruby"]
for (const key2 in prog) {
    console.log(`${key2}:${prog[key2]}`)
}


//forEach
const coding = ["python", "java", "matlab", "js"]
//coding.forEach(function (item) {            //item is declared to access the element inside the array
//    console.log(item)
//})


//declaring function 1st
//function coding(item) {
//    console.log(item)
//}

coding.forEach(function (item, num, array){
    console.log(item,num,array)
})

const mycode = [
    {
        lang: 'java',
        tutor: 'swarup'
    },
    {
        lang: 'Cpp',
        tutor:'Audi'
    }
]
//mycode.forEach(function (itemNew, indexNew, arrNew) {
//    console.log(itemNew, indexNew, arrNew)
mycode.forEach(function (itemNew) {
    console.log(itemNew.lang)
}
)
//console.log(mycode[0].lang)  //java
