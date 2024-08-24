// Using var
var x = 10;

if (true) {
    var x = 20;
    console.log(x); // Output: 20
}

console.log(x); // Output: 20

// Using let
let y = 10;

if (true) {
    let y = 20;
    console.log(y); // Output: 20
}

console.log(y); // Output: 10

/*
Var can be declared and accessed globally. 
Let can be declared globally, but its access is limited to the block in which it is declared.
Variables declared using var can be re-declared and updated within the same scope.
Variables declared with let can be updated but not re-declared within the same scope.
*/
