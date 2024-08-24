// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration:", i);
}

// 2. while loop
let j = 0;
while (j < 5) {
    console.log("While loop iteration:", j);
    j++;
}

// 3. do-while loop
let k = 0;
do {
    console.log("Do-while loop iteration:", k);
    k++;
} while (k < 5);

// 4. for...in loop (for objects)
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// 5. for...of loop (for arrays and iterable objects)
const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// 6. forEach loop (for arrays)
fruits.forEach((fruit, index) => {
    console.log("Fruit at index", index, ":", fruit);
});

// 7. map loop (for arrays)
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);

console.log("Squared numbers:", squaredNumbers);

// 8. filter loop (for arrays)
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even numbers:", evenNumbers);

// 9. reduce loop (for arrays)
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("Sum of numbers:", sum);