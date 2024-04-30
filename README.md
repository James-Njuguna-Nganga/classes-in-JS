Classes in JS:
- JavaScript Classes are templates for JavaScript Objects.

JavaScript Class Syntax
Use the keyword class to create a class.

Always add a method named constructor():

Syntax
class ClassName {
  constructor() { ... }
}
"use strict"
The syntax in classes must be written in "strict mode".

You will get an error if you do not follow the "strict mode" rules.

- Class Inheritance
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:



- Getters and Setters
Classes also allows you to use getters and setters.

It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the get and set keywords.

- Hoisting
Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

That means that you must declare a class before you can use it:


- Static class methods are defined on the class itself.

You cannot call a static method on an object, only on an object class.
Example
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

// You can call 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.