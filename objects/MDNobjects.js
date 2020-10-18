// const person = {
//   name: {
//     first: "Bob",
//     last: "Smith",
//   },
//   age: 32,
//   gender: "male",
//   interests: ["music", "skiing"],
//   bio: function () {
//     alert(
//       this.name.first +
//         " " +
//         this.name.last +
//         " is " +
//         this.age +
//         " years old. He likes " +
//         this.interests[0] +
//         " and " +
//         this.interests[1] +
//         "."
//     );
//   },
//   greeting: function () {
//     alert(`Hi! I'm ${this.name[0]}.`);
//   },
// };

// person.age = 45;
// person["name"]["last"] = "Cratchit";

// person["eyes"] = "hazel";
// person.farewell = function () {
//   alert("Bye everybody!");
// };

// let myDataName = "height";
// let myDataValue = "1.75m";

// person[myDataName] = myDataValue;

// //* Object Basics 2
// let bandInfo;

// let favBand = {
//   name: "Jazz Messengers",
//   nationality: "African-American",
//   genre: "Jazz",
//   members: 12,
//   formed: 1950,
//   split: 1985,
//   albums: [
//     {
//       name: "Moanin'",
//       released: 1959,
//     },
//     {
//       name: "Hard Bop",
//       released: 1957,
//     },
//   ],
// };

// bandInfo = `The ${favBand.name} were an ${favBand.nationality} ${
//   favBand.genre
// } band that was active for ${
//   favBand.split - favBand.formed
// } years. Their most famous album was ${
//   favBand.albums[0].name
// } which was released in ${favBand.albums[0].released}.`;

// //* Object basics 3

// let cat = {
//   name: ["Bertie", "Garfield"],
//   breed: ["Cymric", "Tabby"],
//   color: ["white", "orange"],
//   greeting: function (i) {
//     return `Hello, said ${this.name[i]} the ${this.breed[i]}`;
//   },
// };

// console.log(cat.greeting(0));
// console.log(cat.greeting(1));

// //* Constructors and Object Instances

// function Person(first, last, age, gender, interests) {
//   this.name = {
//     first: first,
//     last: last,
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.bio = function () {
//     alert(
//       this.name.first +
//         " " +
//         this.name.last +
//         " is " +
//         this.age +
//         " years old. He likes " +
//         this.interests[0] +
//         " and " +
//         this.interests[1] +
//         "."
//     );
//     this.greeting = function () {
//       alert(`Hi! I'm ${this.name.first}.`);
//     };
//   };
// }

// let person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);

// let person1 = new Object({
//   name: "Chris",
//   age: 38,
//   greeting: function () {
//     alert("Hi! I'm " + this.name + ".");
//   },
// });

// let person2 = Object.create(person1);

// //* BEAUTIFUL SWAP FUNCTION
// let [x, y] = ["a", "b"];
// [x, y] = [y, x];
// console.log(x, y);

//* Basic Variable Assignment

// const foo = ["one", "two", "three"];

// const [red, yellow, green] = foo;
// console.log(red);
// console.log(yellow);
// console.log(green);

// //* Assignment separate from declaration
// let a, b;

// [a, b] = [1, 2];

// //* Default values
// let a, b;

// [a=5, b=7] = [1];

// //* Swapping variables
// let [a, b] = ([1, 3]

// [(a, b)] = [b, a]);

// const arr = [1, 2, 3];
// [arr[0], arr[2]] = [arr[2], arr[0]];
// console.log(arr);

// //* Ignoring Returned Values

// function f() {
//   return [1, 2, 3];
// }

// const [a, , b] = f();
// const [, , c] = f();
// console.log(c);

// //TODO Destructuring Assignment
// let user = {
//   name: "John",
//   years: 30,
// };

// let { name, years: age, isAdmin = false } = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);

// //TODO The maximal salary
// //! FAILED
// // Create the function topSalary(salaries) that returns the name of the top-paid person.
// // If salaries is empty, it should return null.
// // If there are multiple top-paid persons, return any of them.
// // P.S. Use Object.entries and destructuring to iterate over key/value pairs.
// let salaries = {
//   John: 100,
//   Pete: 200,
//   Mary: 250,
// };

// function topSalary(salaries) {
//   let max = 0;
//   let maxName = null;

//   for (const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }

// console.log(topSalary(salaries));
