console.log("Javascript Arrays");

// Array is a collection of items stored at contiguous memory locations. It is a data structure that can hold more than one value at a time. It can hold values of different data types, but it is recommended to use the same data type for all elements in an array for better performance.

// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

// Accessing array elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry

// Modifying array elements
fruits[1] = "Blueberry";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// Adding new elements to the array
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date"]

// Removing the last element from the array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// Length of the array
console.log(fruits.length); // Output: 3

// Looping through the array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach method to loop through the array
fruits.forEach(function (fruit) {
    console.log(fruit);
}); 