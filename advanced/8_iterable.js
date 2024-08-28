/*
An object which implements the iterable protocol can be used in a for...of loop.
The iterable protocol requires that the object has a method at the key Symbol.iterator.
The iterable protocal decides whether an object is iterable or not.

When it satisfies the iterable protocol:
1. object must have a next() method that returns an object with two properties: value and done.

*/

// Custom Iterable Object
const myIterable = {
    data: [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return { value: this.data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Using the Iterable Object
for (const item of myIterable) {
    console.log(item);
}