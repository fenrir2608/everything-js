/*
A closure is a combination bundled together with references to its surrounding state (the lexical environment).
Closures are created every time a function is created, at function creation time.
*/

function outer(){
    let counter = 0;
    function inner(){
        counter++;
        console.log(counter);
    }
    inner();
}
outer();
outer();
//output: 1 1  (temporary memory is established and counter is reset to 0 every time outer is called)

function outer1(){
    let counter = 0;
    function inner1(){
        counter++;
        console.log(counter);
    }
    return inner1;
}
const a = outer1();
a();
a();
//output: 1 2 (counter is not reset to 0 because the inner function is returned and stored in a variable)

/*
In Javascript, when we return a function from another function, we are effectively returning a combination of
the function and the references to its surrounding state (function's scope). This is a closure.
*/ 
