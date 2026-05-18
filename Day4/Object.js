console.log("JavaScript Objects");
// Objects in JavaScript
// An object is a collection of properties and methods. It is a complex data type that can hold multiple values and functions. Objects are created using curly braces {} and can have properties (key-value pairs) and methods (functions that operate on the object).

// Example of creating an object
let person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    greet: function () {
        return "Hello, my name is " + this.name;
    }
};

console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30
console.log(person.isStudent); // Output: false
console.log(person.greet()); // Output: Hello, my name is Alice

// You can also create objects using the Object constructor
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

console.log(car.make); // Output: Toyota
console.log(car.model); // Output: Camry
console.log(car.year); // Output: 2020

