const Person = function(name) {
    this.name = name;
};


Person.prototype.getName = function() {
    console.log(this.name);
}

function SuperHero(power) {
    this.power = power;
}

const batman = new SuperHero('money');
//we want this to have access to getName method of Person...

//Method 1: Using call
Person.prototype.getName.call(batman); //undefined
//this is undefined because the getName method is trying to access the name property of batman which does not exist.

//Method 2: Using prototype chain
SuperHero.prototype = Object.create(Person.prototype);
Person.prototype.constructor = SuperHero;
//Object.create creates a new object with the prototype set to the object passed as an argument.
//So, now the prototype of SuperHero is set to the prototype of Person.

const superman = new SuperHero('flying');
superman.getName(); //undefined

