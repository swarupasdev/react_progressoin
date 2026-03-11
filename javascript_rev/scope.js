//var c = 300  //ambiguity will come because it will go out of scope
let a = 300
if (true) {

    let a = 10
    const b = 20
    //var c = 30
    console.log("Inner:",a)
}


console.log(a)  //it wont print
//console.log(b)  //it wont print
//console.log(c)  //it will print the value 

function one() {
    const userName = "swarup"

    function two() {            //two() can ask for variables from one()
        const website = "youtube"

        console.log(userName)
    }
    //console.log(website)

    two()           //everytime you call a function it creates a different scope and stored in a stack
}
one()

if (true) {

    const userName2 = "Shona "
    if (userName2 == "Shona ") { 
        const website = "youtube"
        console.log(userName2 + website)
    }
   // console.log(website)          //cant access
}
//console.log(userName2)          //cant access

// +++++++++++++++++++ interesting +++++++++++++++++
function addone(num) {
    return num+1
}
addone(5)                                   //function
console.log(addone(5))

const addTwo = function (num2) {            //expresion  here you have declared the function and hold it inside a variable so calling of the fucntion matters here 
    return num2+2
}
console.log(addTwo(8))

