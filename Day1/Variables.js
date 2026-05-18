console.log("Hello World");
// Variables in JavaScript
// A variable is a container for storing data values. In JavaScript, you can declare a variable using the var, let, or const keyword.

// 1. var: The var keyword is used to declare a variable that can be re-assigned and has function scope. It is the oldest way to declare variables in JavaScript and is generally not recommended for use in modern JavaScript development due to its quirks and potential for bugs.

// 2. let: The let keyword is used to declare a variable that can be re-assigned and has block scope. It was introduced in ES6 (ECMAScript 2015) and is the preferred way to declare variables in modern JavaScript development.

// 3. const: The const keyword is used to declare a variable that cannot be re-assigned and has block scope. It was also introduced in ES6 and is used for variables that should not change after they are assigned.

let name = "Alice"; // Using let to declare a variable
console.log(name); // Output: Alice

name = "Bob"; // Re-assigning the variable
console.log(name); // Output: Bob

const pi = 3.14; // Using const to declare a constant variable
console.log(pi); // Output: 3.14

// pi = 3.14159; // This will throw an error because pi is a constant variable          