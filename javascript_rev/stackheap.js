//  two types of memory stack(primitive) and heap(non primitive)

let anything = "www.myportfolio.com"
let something = anything
something ="swarup.co.in"
console.log(anything)
console.log(something)

let user1 = {
    email: "santi@gmail.com",
    upi: "user@ybl"
}

let user2=user1
console.log(user1)


//     user2
//   ---------------        _________________________
//     user1                |                       |
//   ---------------        |                       |
//     anything             |                       |
//   ---------------        |email:"santi@gmail.com"|
//     something            | ,upi: "user@ybl"      |
//   ---------------        |                       |
//     anything             |                       |
//   ---------------        -------------------------

