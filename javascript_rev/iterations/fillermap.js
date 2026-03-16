//const coding = ["js", "ruby", "java", "cpp"]
//const value = coding.forEach(function (item) {
//    console.log(item)
//    return item
//})
//console.log(value)

//filter
//const myNums = [1, 2, 3, 4, 5, 6]
//const newNum= myNums.filter(function (num) {
//return num>4
//})
//console.log(newNum)


//map
//const myNumbers = [1, 2, 3, 4, 5, 6]
//const newNumbers = myNumbers.map(function (num1) {
//    return num1+2
//})
//console.log(newNumbers)

//array.reduce((accumulator, currentValue) => {
//    return updatedAccumulator
//}, initialValue)
//const myNumbers = [1, 2, 3]

//const myTotal = myNumbers.reduce(function (acc, cur) {
//    return acc+cur

//})
//console.log(myTotal)

const students = [
    {
        roll: 1,
        marks: [78, 85, 90, 67, 88, 92]
    },
    {
        roll: 2,
        marks: [65, 70, 72, 60, 68, 75]
    },
    {
        roll: 3,
        marks: [88, 91, 84, 79, 90, 87]
    },
    {
        roll: 4,
        marks: [55, 60, 58, 62, 57, 61]
    },
    {
        roll: 5,
        marks: [92, 89, 94, 90, 91, 93]
    },
    {
        roll: 6,
        marks: [90, 96, 97, 98, 95, 99]
    }
]
students.forEach(function (oneStudent) {                //oneStudent is parameter to access each element of the students Array

    const totalMark = oneStudent.marks.reduce(function (num1st, num2nd) {       //function appears because reduce() requires a callback function. The callback tells JavaScript how to combine the elements of the array step by step.

        return num1st + num2nd                      //accumulator+current element

    })
    console.log(`Roll no:${oneStudent.roll}, All marks of student:${oneStudent.marks}, Total Marks: ${totalMark}`)
    })