const accountID = 1445553
let accountEmail = "swarup135@gmail.com"
var accountPswrd = "12345"
accountCity = "Jiapur"
/*if you wanna declare constant one methodmonly "const" keyword
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