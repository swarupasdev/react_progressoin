// const user = {
//     name: "swarup",
//     loginCount: "8",
//     signedIn: true,
//     getUserDetails: function(){
//         //console.log("got user details")

//         console.log(`Username: ${this.name}`)       //because execution is defined insode the function so it will not access gloabal so u have to remind it that you want to access what is yours :)
//         }
// }
// console.log(user.name)
// console.log(user.getUserDetails)
 
// const promise1 = new Promise(function (resolve, reject){    //new keyword is the constructor function we need new instances for further execution 

//     //do an sync task
//     //db calls , cryptography, network call
//     setTimeout(function(){
//         console.log("Async is complete")
//     }, 1000)

// })    //callback inside callback


// promise1.then(function(){
//     console.log("Promise consumed")

function user(username,logincount,isLoggedin){
    this.username=username
    this.logincount=logincount
    this.isLoggedin=isLoggedin

    this.greets=function(){
        console.log(`Gretings Mr ${this.username}`)  //you can use new methids too it will add on later automatically
    }

    return this

}

// const userOne = user("swarup","10", true)
// const userTwo = user("Sanswarup","9", false)
// console.log(userOne)
//this will overwrite the value of userOne to userTwo since constructor is not used even if you are not printing the new instance 
const userOne = new user("swarup","10", true)
const userTwo = new user("Sanswarup","9", false)
console.log(userOne)
console.log(userTwo)
//it will give you a new instance everytime you call it with a new instance 
//when you write new it creats an empty new object 