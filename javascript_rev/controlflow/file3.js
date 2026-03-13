let age = 20;  // [ ], "" check for this instead of "= 20" different output

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
//falsy value
//false, 0, -0, bigInt 0n,"",null,undefined,NaN 
//true, {}, [], 42, "0", "false", -42, 3.14, -3.14, Infinity, -Infinity, Date(), function() {}, " ", Symbol(), 10n


//nullish coalescing operator(??): null undefined

let val1
//val1 = 5 ?? 10
val1 = null ?? 10
var1=indefined??15
console.log(val1)