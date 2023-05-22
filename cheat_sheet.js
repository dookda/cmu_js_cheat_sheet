// ### Variables and Data Types
// Variable declaration
var x;
let y;
const z = 10;

// Data types
let num = 10; // number
let str = "Hello"; // string
let bool = true; // boolean
let arr = [1, 2, 3]; // array
let obj = { name: "John", age: 25 }; // object
let n = null; // null
let u = undefined; // undefined

// ### Operators
// Arithmetic operators
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;

// Assignment operators
let x = 10;
x += 5; // equivalent to x = x + 5;
x -= 3; // equivalent to x = x - 3;
x *= 2; // equivalent to x = x * 2;
x /= 4; // equivalent to x = x / 4;

// Comparison operators
let a = 5;
let b = 10;
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
console.log(a === b); // false
console.log(a !== b); // true

// Logical operators
let p = true;
let q = false;
console.log(p && q); // false (logical AND)
console.log(p || q); // true (logical OR)
console.log(!p); // false (logical NOT)

// ### Control Flow:
// if-else statement
if (condition) {
    // code block executed if condition is true
} else {
    // code block executed if condition is false
}

// switch statement
switch (expression) {
    case value1:
        // code block executed if expression matches value1
        break;
    case value2:
        // code block executed if expression matches value2
        break;
    default:
    // code block executed if expression doesn't match any value
}

// for loop
for (let i = 0; i < 5; i++) {
    // code block executed repeatedly until condition is false
}

// while loop
let i = 0;
while (i < 5) {
    // code block executed repeatedly until condition is false
    i++;
}

// do-while loop
let i = 0;
do {
    // code block executed repeatedly until condition is false
    i++;
} while (i < 5);

// ### Functions
// Function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function expression
const greet = function (name) {
    console.log("Hello, " + name + "!");
};

// Arrow function
const greet = (name) => {
    console.log("Hello, " + name + "!");
};

// Function invocation
greet("John");

// ### Arrays
let arr = [1, 2, 3, 4, 5];

// Accessing elements
let firstElement = arr[0];
let lastElement = arr[arr.length - 1];

// Modifying elements
arr[2] = 10;

// Array methods
arr.push(6); // adds an element to the end
arr.pop(); // removes the last element
arr.unshift(0); // adds an element to
