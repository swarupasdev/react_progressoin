//lietral and constructor 2 types of declaration
//singleton
//object literals


const mySymb = Symbol("key1")


const anyObject = {
    Empname: "Agent007",
    "fullName": 'Santiswarup Nayak', //you cant access this-----//
    [mySymb]:'key1',                                            //  importtant syntax interview friendly
    age: 18,                                                    //
    location:"Dhenkanal",                                       //
    email: "swarup@gmail.com",                                  //
    logIn: false,                                               //
    lastLogin: ["Sat", "Sun", "Mon"]                            //
}                                                               //
console.log(anyObject.lastLogin)  //                            \/
console.log(anyObject["email"])   //                 without this format       
console.log(anyObject['fullName'])
console.log(anyObject[mySymb])


//freeze()
//Object.freeze(anyObject)
anyObject.location = "Bhubaneswar"  //even if i have changed the value of a certain entity here it wont reflect because i have freezed the object(anyObjects)
console.log(anyObject)

//adding function in object

anyObject.greeting = function () {
    console.log("Hello Comrade.")
    console.log(`Nice to meet you Mr.${this.Empname}.Welcome to our secret society`)

}

console.log(anyObject.greeting)         //will return the reference of function but not executed 
console.log(anyObject.greeting())       //always remember to unfreeze your object before adding something new to it else it will return garbage output or errors
