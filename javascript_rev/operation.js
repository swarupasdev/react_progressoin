// ============================================
// JAVASCRIPT OPERATORS DEMONSTRATION
// ============================================

// 1. ARITHMETIC OPERATORS
console.log("=== ARITHMETIC OPERATORS ===");
let a = 10;
let b = 3;

console.log("Addition (+):", a + b);           // 13
console.log("Subtraction (-):", a - b);       // 7
console.log("Multiplication (*):", a * b);    // 30
console.log("Division (/):", a / b);          // 3.333...
console.log("Modulus (%):", a % b);           // 1 (remainder)
console.log("Exponentiation (**):", a ** b);  // 1000 (10^3)

// 2. ASSIGNMENT OPERATORS
console.log("\n=== ASSIGNMENT OPERATORS ===");
let x = 5;
console.log("Initial value (=):", x);  // 5

x += 3;
console.log("After += 3:", x);  // 8

x -= 2;
console.log("After -= 2:", x);  // 6

x *= 2;
console.log("After *= 2:", x);  // 12

x /= 3;
console.log("After /= 3:", x);  // 4

x %= 3;
console.log("After %= 3:", x);  // 1

x = 2;
x **= 3;
console.log("After **= 3:", x);  // 8

// 3. COMPARISON OPERATORS
console.log("\n=== COMPARISON OPERATORS ===");
let num1 = 5;
let num2 = "5";
let num3 = 5;

console.log("Equal (==):", num1 == num2);          // true (checks value only)
console.log("Strictly Equal (===):", num1 === num2);  // false (checks value & type)
console.log("Strictly Equal (===):", num1 === num3);  // true

console.log("Not Equal (!=):", num1 != num2);      // false
console.log("Strictly Not Equal (!==):", num1 !== num2);  // true

console.log("Greater Than (>):", 10 > 5);          // true
console.log("Less Than (<):", 10 < 5);             // false
console.log("Greater Than or Equal (>=):", 5 >= 5);  // true
console.log("Less Than or Equal (<=):", 5 <= 10);   // true

// 4. LOGICAL OPERATORS
console.log("\n=== LOGICAL OPERATORS ===");
let p = true;
let q = false;

console.log("AND (&&):", p && q);        // false
console.log("OR (||):", p || q);         // true
console.log("NOT (!):", !p);             // false
console.log("NOT (!):", !q);             // true

// Real-world example
let age = 25;
let hasLicense = true;
console.log("Can drive?:", age >= 18 && hasLicense);  // true

// 5. TERNARY/CONDITIONAL OPERATOR
console.log("\n=== TERNARY OPERATOR ===");
let score = 75;
let result = score >= 50 ? "Pass" : "Fail";
console.log("Result:", result);  // Pass

let level = score >= 80 ? "A+" : score >= 70 ? "A" : score >= 60 ? "B" : "C";
console.log("Grade:", level);  // A

// 6. TYPE OPERATORS
console.log("\n=== TYPE OPERATORS ===");
console.log("typeof 42:", typeof 42);              // "number"
console.log("typeof 'hello':", typeof "hello");    // "string"
console.log("typeof true:", typeof true);          // "boolean"
console.log("typeof undefined:", typeof undefined);  // "undefined"
console.log("typeof null:", typeof null);          // "object" (quirk in JS)
console.log("typeof []:", typeof []);              // "object"
console.log("typeof {}:", typeof {});              // "object"

// 7. BITWISE OPERATORS
console.log("\n=== BITWISE OPERATORS ===");
let bit1 = 5;    // 101 in binary
let bit2 = 3;    // 011 in binary

console.log("Bitwise AND (&):", bit1 & bit2);      // 1 (001)
console.log("Bitwise OR (|):", bit1 | bit2);       // 7 (111)
console.log("Bitwise XOR (^):", bit1 ^ bit2);      // 6 (110)
console.log("Bitwise NOT (~):", ~bit1);            // -6
console.log("Left Shift (<<):", bit1 << 1);        // 10 (1010)
console.log("Right Shift (>>):", bit1 >> 1);       // 2 (10)

// 8. INSTANCEOF OPERATOR
console.log("\n=== INSTANCEOF OPERATOR ===");
let arr = [1, 2, 3];
let obj = { name: "John" };
let str = "hello";

console.log("[] instanceof Array:", arr instanceof Array);       // true
console.log("{} instanceof Object:", obj instanceof Object);     // true
console.log("'hello' instanceof String:", str instanceof String);  // false (primitive)

// 9. SPREAD & REST OPERATORS (...)
console.log("\n=== SPREAD OPERATOR ===");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Spread arrays:", combined);  // [1, 2, 3, 4, 5, 6]

// 10. OPERATOR PRECEDENCE EXAMPLE
console.log("\n=== OPERATOR PRECEDENCE ===");
let result1 = 10 + 5 * 2;        // 20 (* before +)
let result2 = (10 + 5) * 2;      // 30 (parentheses first)
console.log("10 + 5 * 2:", result1);
console.log("(10 + 5) * 2:", result2);