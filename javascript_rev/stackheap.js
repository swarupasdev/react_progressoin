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
console.log(user1)
//   ---------------        _________________________
//                          |                       |
//   ---------------        |                       |
//                          |                       |
//   ---------------        |                       |
//                          |                       |
//   ---------------        |                       |
//     anything             |                       |
//   ---------------        -------------------------

