// Primitive data types in JavaScript

// JavaScript has 7 primitive data types:
// 1. Number 
const number = 42; 
const numberValue = 42.2; // Example of a number
// 2. String
const name = "Hello, World!"; // Example of a string
// 3. Boolean
const isLoggedIn = true; // Example of a boolean
// 4. Undefined
let userEmail; // Example of an undefined variable
// 5. Null
const outsideTemp = null; // Example of a null value
// 6. BigInt
const bigInt = 9007199254740991n; // Example of a BigInt
// 7. Symbol
const sym = Symbol('description'); // Example of a symbol


// Reference data types in JavaScript(Non-primitive data types):
// 1. Object
const person = { name: "John", age: 30 }; // Example of an object
let myObject = {
    name: "John",
    age: 30
};
// 2. Array
const fruits = ["Apple", "Banana", "Cherry"]; // Example of an array
// 3. Function
//function greet(name) {}; // Example of a function
const greet = function() {
    console.log("Hello, World!");
    }; // Example of a function expression 

console.log(typeof greet)