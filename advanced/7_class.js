class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const p1 = new Person('Harsh');
p1.greet(); //Hello, my name is Harsh

class SuperHero extends Person {
    constructor(name, power) {
        super(name);
        this.power = power;
    }
    usePower() {
        console.log(`${this.name} is using ${this.power}`);
    }
}

const batman = new SuperHero('Bruce Wayne', 'money');
batman.greet(); //Hello, my name is Bruce Wayne
batman.usePower(); //Bruce Wayne is using money