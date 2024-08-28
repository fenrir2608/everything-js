const Person = function(name) {
    this.name = name;
};

const p1 = new Person('Harsh');
const p2 = new Person('Prerna');

p1.getName = function(){
    console.log(this.name);
}

p1.getName(); //Harsh
p2.getName(); //Error: p2.getName is not a function
//We get this error because getName is not a property of p2. It is a property of p1.
//We can solve this problem by using prototypes.
Person.prototype.getName = function() {
    console.log(this.name);
}
//Now, getName is a property of the prototype of Person. So, all objects created using Person will have access to getName.