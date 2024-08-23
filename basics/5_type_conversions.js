// String to Number conversion
let str = "123";
let num = Number(str);
console.log(num); // Output: 123

// Number to String conversion
let number = 456;
let string = String(number);
console.log(string); // Output: "456"

// Boolean to String conversion
let bool = true;
let boolString = String(bool);
console.log(boolString); // Output: "true"

// String to Boolean conversion
let boolStr = "         ";
let boolVal = Boolean(boolStr);
console.log(boolVal); // Output: true

// Implicit type conversion
let x = 10;
let y = "5";
let result = x + y;
console.log(result); // Output: "105"

// Explicit type conversion
let a = 10;
let b = "5";
let sum = Number(a) + Number(b);
console.log(sum); // Output: 15

//Implicit type conversion also known as type coercion, is the automatic conversion of values between different data types.
//toString() does not work on null and undefined values, while String() works on all data types.

