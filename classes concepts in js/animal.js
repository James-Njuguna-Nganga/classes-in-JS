// Base class with private and protected properties/methods
class Animal {
  #name;
  _age;

  constructor(name, age) {
    this.#name = name;
    this._age = age;
  }

  // Protected method
  _makeSound() {
    return "Some generic sound";
  }

  // Public method
  introduce() {
    return `Hi, I'm ${this.#name} and I'm ${this._age} years old.`;
  }
}

// Subclass with inheritance
class Dog extends Animal {
  #breed;

  constructor(name, age, breed) {
    super(name, age);
    this.#breed = breed;
  }

  // Override protected method
  _makeSound() {
    return "Woof woof!";
  }

  // New method specific to Dog
  fetch() {
    return `${this.introduce()} I'm a ${this.#breed} dog and I can fetch!`;
  }
}

// Static properties and methods
class MathOperations {
  static PI = 3.14159;

  static add(a, b) {
    return a + b;
  }
}

// Extending built-in classes
class CustomArray extends Array {
  constructor(...elements) {
    super(...elements);
  }

  // New method specific to CustomArray
  static fromString(str) {
    return str.split(",");
  }
}

// Class checking: "instanceof"
const animal = new Animal("Max", 5);
console.log(animal instanceof Animal); // true
console.log(animal instanceof Dog); // false

const dog = new Dog("Buddy", 3, "Golden Retriever");
console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog); // true

// Mixins
const SwimmingMixin = {
  swim() {
    return `${this.introduce()} I can swim!`;
  }
};

// Applying mixins
Object.assign(Dog.prototype, SwimmingMixin);

const dogWithMixin = new Dog("Charlie", 2, "Labrador");
console.log(dogWithMixin.swim());

// Usage
console.log(dog.introduce());
console.log(dog.fetch());
console.log(`PI: ${MathOperations.PI}`);
console.log(`3 + 5 = ${MathOperations.add(3, 5)}`);

const customArray = new CustomArray(1, 2, 3);
console.log(customArray instanceof Array); // true
console.log(customArray.join(","));
console.log(CustomArray.fromString("a,b,c"));
