//this value is entirely determined by how a function is called.

/*
There are 4 ways to invoke a function in JavaScript and determine the value of this inside the function:
1.Implicit binding
2.Explicit binding
3.new binding
4.Default binding
*/

//implicit binding
const person = {
    name: 'Harsh',
    age: 20,
    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    }
};

person.sayHi(); //Hi, my name is Harsh (because this is implicitly bound to the person object)

//explicit binding
function introduce() {
    console.log(`Hi, my name is ${this.name}`);
}

const person1 = {
    name: 'Harsh',
    age: 20
};

introduce.call(person1); //Hi, my name is Harsh (because this is explicitly specified to bound to the person1 object)

//new binding
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person2 = new Person('Harsh', 20);


//default binding
function sayHello() {
    console.log(`Hello, my name is ${this.name}`);
}

const person3 = {
    name: 'Harsh',
    age: 20
};

sayHello(); //Hello, my name is undefined (because this is not bound to any object and js will default to the global object)

/*
Arrow functions do not have their own this value. 
The value of this inside an arrow function is always inherited from the enclosing scope.

Precedence of this binding:
1. new binding
2. explicit binding
3. implicit binding
4. default binding
*/