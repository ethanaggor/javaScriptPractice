//TODO Encapsulation
//? A class is like a template, or a blueprint, or a cookie cutter

//? To encapsulate the idea of data and functionality into an object

//? When we use the new syntax, we are creating an instance (cookie) of the class
// let bubble = new Bubble();
//? We are asking the code to construct an object using the class "Bubble"

// class Bubble {
//   // This is basically the object's setup, where we are initializing things
//   constructor() {
//     // this refers to the object instance
//     this.x = 100;
//     this.y = 100;
//   }
// }

// class Bubble {
//   constructor(x = 200, y, r) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//   }
//   move() {
//     this.x += random(-5, 5);
//   }
// }
// let bubble = new Bubble(20);
// console.log(bubble.x);

// //TODO Prototype
// //? Whenever we create a new object (and an array), it has its properties, values, and methods but also includes a method called __proto__ that includes all of the methods that we can apply to the object
// //? A prototype is a map for the object, it contains the functionality (methods) of the object
// //? When an object instance wants to use a method, its __proto__ method points to the prototype of the class, effectively reusing the code and eliminating redundancy

// //TODO Inheritance
// //? What if I could write a class that inherits the properties of the original class
// //? Syntax below

// //* Particle is the "parent" or "super class"
// class Particle {
//   constructor() {}
//   update() {}
//   show() {}
// }
// //*SquareP is the "child" or "sub" class
// class SquareP extends Particle {
//   constructor() {
//     // Super means execute from the parent class
//     super();
//   }
//   update() {
//     super.update();
//     this.r += random(255);
//   }
// }

//TODO Polymorphism
//? Having many forms

//TODO Getters and Setters
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//       const parts = value.split(' ');
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//   }
// };

// person.fullName = "John Smith";

// // getters => access properties
// // setters => change (mutate) them

// console.log(person.fullName);

// class Person {
//   constructor(name) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     this._name = value;
//   }
// }

// let lotrChar = new Person("Frodo");
// console.log(lotrChar.name);
// lotrChar.name = "Gandalf";
// console.log(lotrChar.name);
// lotrChar._name = "Sam";
// console.log(lotrChar.name);

//? Getters and Setters are used to define methods of a class so that they look like properties

class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numOfRequestsForArea = 0;
  }

  get area() {
    this.numOfRequestsForArea++;
    return this.width * this.height;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

let square1 = new Square(4);

square1.area = 25;
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.numOfRequestsForArea);
