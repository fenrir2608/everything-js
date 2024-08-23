// Function with default parameter value
function greet(name = "Anonymous") {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Anonymous!
greet("John"); // Output: Hello, John!

// Function with rest parameter
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

// Function with arrow syntax
const multiply = (a, b) => a * b;

console.log(multiply(2, 3)); // Output: 6

// Function as a variable
const square = function (num) {
    return num * num;
};

console.log(square(4)); // Output: 16

// Function as a method
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6