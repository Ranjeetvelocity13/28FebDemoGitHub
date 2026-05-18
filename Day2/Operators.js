console.log("Javascript Operators");
// Operators are symbols that perform operations on operands (values and variables). They can be classified into several types:

// 1. Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0

// 2. Assignment Operators
let c = 20;
c += 5; // Equivalent to c = c + 5
console.log(c); // Output: 25

// 3. Comparison Operators
console.log(a == b); // Output: false
console.log(a != b); // Output: true
console.log(a > b); // Output: true
console.log(a < b); // Output: false

// 4. Logical Operators
let x = true;
let y = false;
console.log(x && y); // Output: false
console.log(x || y); // Output: true
console.log(!x); // Output: false

// 5. Bitwise Operators
let m = 5; // In binary: 0101
let n = 3; // In binary: 0011
console.log(m & n); // Output: 1 (In binary: 0001)
console.log(m | n); // Output: 7 (In binary: 0111)
console.log(m ^ n); // Output: 6 (In binary: 0110)
console.log(~m);    // Output: -6 (In binary: 1010)