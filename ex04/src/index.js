// Only change code below this line
class Pets {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }
    walk() {
        const numberOfLegs = '${this.name} is walking ${this.legs}';
        return numberOfLegs;
    }
    
}
class Dog extends Pets {
    constructor(name, legs) {
        super(name)
        this.legs = legs;
    }
    bark() {
        const dogSay = '${this.name} says WUF-WUF';
        return dogSay;
    }
    }
// Only change code above this line
let dog = new Dog("Johhny", 4); // Change this line
console.log(dog.walk());
console.log(dog.bark());
module.exports = {
Pets,
Dog
}