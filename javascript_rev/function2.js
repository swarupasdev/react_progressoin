function calculateCartPrice(...num1) {   //rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user2 = {
    username: "San",
    price: 199
}

function handleObject(anyUser) {
    console.log(`Username ${anyUser.username} and price is ${anyUser.price}`)
}

handleObject(user2)

const newArray = [13, 34, 46, 67]
function returnSecondValue(anyArray) {
    return anyArray[1]
}

//console.log(`Returned second value of the array ${returnSecondValue(newArray)}`)  //returns the value as a string
console.log("Returned second value of the array", returnSecondValue(newArray))  //returns as a number

console.log(typeof returnSecondValue(newArray))