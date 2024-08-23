// Global scope
let globalVariable = "I am in the global scope";

function outerFunction() {
    // Outer function scope
    let outerVariable = "I am in the outer function scope";

    function innerFunction() {
        // Inner function scope
        let innerVariable = "I am in the inner function scope";

        console.log(innerVariable); // Output: I am in the inner function scope
        console.log(outerVariable); // Output: I am in the outer function scope
        console.log(globalVariable); // Output: I am in the global scope
    }

    innerFunction();
}

outerFunction();
console.log(globalVariable); // Output: I am in the global scope