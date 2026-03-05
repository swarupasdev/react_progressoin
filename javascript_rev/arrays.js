//array
const myArr = [10,11,12,13,14,15]

console.log(myArr[0])
//shallow copy is a copy of an object with same refernce point
//deep copy of an object doesnt share the same reference point 

const myHeros = ['Superman','batman','Wonder woman','Flash']
console.log(myHeros[0])

const myArr2 = new Array(1,2,3,4)
console.log(myArr[2])

//array methods
myArr.push(6)  //adds value in the array
console.log(myArr);

myArr.pop(11)  //remove
console.log(myArr)

myArr.unshift(9)  //add in front
console.log(myArr)

myArr.shift(9)  //remove from front
console.log(myArr)

console.log(myArr.includes(9))  //true or false if element exist or not

const newArr=myArr.join()  //converts the array into a string element
console.log(newArr)
console.log(typeof(newArr))

