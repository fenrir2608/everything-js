// If statement
let num = 10;
if (num > 0) {
    console.log("Number is positive");
}

// If-else statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// If-else if-else statement
let time = 14;
if (time < 12) {
    console.log("Good morning");
} else if (time < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}

// Ternary operator
let isRaining = true;
let weather = isRaining ? "It's raining" : "It's not raining";
console.log(weather);

// Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's Monday");
        break;
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    default:
        console.log("It's another day");
}

// Nested if statement
let num1 = 5;
let num2 = 10;
if (num1 > 0) {
    if (num2 > 0) {
        console.log("Both numbers are positive");
    } else {
        console.log("First number is positive, second number is negative");
    }
} else {
    console.log("First number is negative");
}

// Short-circuit evaluation
let isLoggedIn = true;
let username = isLoggedIn && "John Doe";
console.log(username);