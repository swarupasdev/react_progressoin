//const user = {
//    username: "Swarup",
//    price: 999,

//    welcomeMessage: function() {
//        console.log(`${this.username},welcome to website`)

//        console.log(this)
//    }
//}

//user.welcomeMessage()
//user.username = "San"
//user.welcomeMessage()

//console.log(this)

//function one() {
//    console.log(this)
//}
//one()

//const chai = () => {       //arrow functions
//    let userName = "Hitesh"
//    console.log(this)
//}
//chai()
const addTwo = (num1, num2) => {

    return num1+num2
}
console.log(addTwo(5,6))