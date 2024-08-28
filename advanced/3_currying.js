/*
Currying is a process in functional programming in which we transform a 
function with multiple arguments into a sequence of nesting functions that 
take one arguement at a time.
f(a, b, c) -> f(a)(b)(c)
It is important to note that currying does not call the function.
Its named after Haskell Curry, a mathematician and logician.
*/

function sum(a, b, c) {
  return a + b + c;
}

function currySum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1, 2, 3)); //6
console.log(currySum(1)(2)(3)); //6