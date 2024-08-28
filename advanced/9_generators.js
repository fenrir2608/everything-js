function* numberGenerator() {
    let number = 1;
    while (true) {
        yield number;
        number++;
    }
}

const generator = numberGenerator();

console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3