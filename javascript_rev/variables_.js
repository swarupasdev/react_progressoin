const accountID = 1445553
let accountEmail = "swarup135@gmail.com"
var accountPswrd = "12345"
accountCity = "Jiapur"
/*if you wanna declare constant one methodonly "const" keyword
//if you want to declare variable you have 2 keywords "let" and "var"
but we dont use var because of block scope and functional scope*/
//accountID = 2  not allowed
//accountID = 1445345
accountEmail = "dona135@gmail.com"
accountPswrd = "98765"
accountCity = "Dhenkanal"

let accountState; //semicolon is optional here
//if you dont assign any value to the vriable it will give undefined output
console.log(accountID);   //print statement for js
console.table([accountID,accountPswrd,accountEmail,accountCity])

//var: can be reclared 
//     can be reassigned
//     undefined 
if (true){
  var x =10
}
console.log(x) // you can access it outside of the code , it is need not necessary to get accesed from outside of the scope that is why we have let and const 
//let: block scoped
//     can not be redeclared inside same scope
//     can be reassigned
//     temporal dead zone
if (true){
  var x =10
}
console.log(x) // you can not access it outside of the code
//const: block scoped
//       can not be redeclared
//       can not be reassigned
//       must be initialized
