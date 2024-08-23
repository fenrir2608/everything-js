// Equality using strict equality operator (===)
console.log(5 === 5); // true
console.log(5 === '5'); // false
console.log(true === true); // true
console.log(null === null); // true
console.log(undefined === undefined); // true

// Equality using loose equality operator (==)
console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log(true == 1); // true
console.log(null == undefined); // true

// Object equality
const obj1 = { name: 'John' };
const obj2 = { name: 'John' };
console.log(obj1 === obj2); // false (different object references)
console.log(obj1 == obj2); // false (different object references)

const obj3 = obj1;
console.log(obj1 === obj3); // true (same object reference)
console.log(obj1 == obj3); // true (same object reference)