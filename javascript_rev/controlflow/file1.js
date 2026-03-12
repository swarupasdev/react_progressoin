//if

if (true) {  // if true the code inside curly braces will execute else won't

}

const isUserLoggedIn = true  //assignment operator

if (2 == "2") {
    console.log("Executed")   //it will execute 
};
if (3 === '2') {
    console.log("Executed")   //it will not execute 
} else {
    console.log("No execution")
}
const balance = 1000
if (balance > 500) {
    console.log("Greter than 500")
} else if (balance = 700) {
    console.log("equal to 700")
}
else {
    console.log("Balance is in between 500 to 700")
}

let isLoggedIn = true;
let userRole = "admin";
let twoFactorEnabled = true;
let sessionActive = true;

if (isLoggedIn && (userRole === "admin" || userRole === "superadmin") && (twoFactorEnabled || sessionActive)) {
    console.log("Access granted to admin panel");
} else {
    console.log("Access denied");
}
