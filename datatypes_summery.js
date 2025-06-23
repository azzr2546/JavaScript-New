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


// ================================================

// Stack vs Heap Memory in JavaScript
// Stack: Stores primitive data types and function call stack
// Heap: Stores reference data types (objects, arrays, functions)

let myname = "Azhar Hussain"

let myNickName = myname
myNickName = "Azzr"

console.log(myname); // "Azhar Hussain"
console.log(myNickName); // "Azzr"

// myname is a primitive data type, so it is stored in stack memory
// myNickName is a reference to myname, so it is stored in heap memory
// If we change myNickName, it does not affect myname
// If we change myname, it does not affect myNickName
// Example of stack vs heap memory with objects
let person1 = {
    name: "Azhar",
    age: 25
};
let person2 = person1; // person2 is a reference to person1
person2.name = "Azzr"; // Changing person2 affects person1
console.log(person1.name); // "Azzr"
console.log(person2.name); // "Azzr"
// person1 is an object, so it is stored in heap memory
// person2 is a reference to person1, so it is also stored in heap memory
// If we change person2, it affects person1 because they both point to the same object
// If we change person1, it affects person2 because they both point to the same object
// Example of stack vs heap memory with arrays
let numbers1 = [1, 2, 3];
let numbers2 = numbers1; // numbers2 is a reference to numbers1
numbers2.push(4); // Changing numbers2 affects numbers1
console.log(numbers1); // [1, 2, 3, 4]
console.log(numbers2); // [1, 2, 3, 4]
// numbers1 is an array, so it is stored in heap memory
// numbers2 is a reference to numbers1, so it is also stored in heap memory
// If we change numbers2, it affects numbers1 because they both point to the same array
// If we change numbers1, it affects numbers2 because they both point to the same array
// Example of stack vs heap memory with functions
function add(a, b) {
    return a + b;
}
let sum = add(2, 3); // sum is a primitive data type, so it is stored in stack memory
console.log(sum); // 5
// If we change sum, it does not affect the add function
// If we change the add function, it does not affect sum
// Example of stack vs heap memory with strings

