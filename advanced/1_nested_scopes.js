function outerFunction() {
    let outerVariable = 'Outer';

    function innerFunction() {
        let innerVariable = 'Inner';

        console.log(innerVariable);
        console.log(outerVariable);
    }

    innerFunction();
}

outerFunction();
//output: Inner Outer