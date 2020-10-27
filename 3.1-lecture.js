// Le Wagon Part Time - Fall 2020 - Week 3.1
// Instructor: Stefan Wawrzyn

// console.log("Hello World")
// console.log("Hiya!")

// Types
// console.log(typeof("Audrey"))
// console.log(typeof(99));

// Casting types

// Turning a string into a number
// console.log(Number.parseInt("42"));

// Turning a number into a string
// console.log((55).toString())

// Variables
// let
// let personName = "Stefan";

// personName = "Audrey";

// console.log(personName);

// const

// const newPersonName = "Stefan";

// newPersonName = "Someone else";

// console.log(newPersonName);


// Variable mutibility
// let personName = "Stefan";
// personName = 42;
// personName = false;
// console.log(personName);


// Data structures

// Array
// const studentAges = [12, 24, 25, 76];
// console.log(studentAges);

// Objects
// const dude = {name: 'The dude', age: 52};


// null and undefined
// let age;
// console.log(typeof(age))


// Strings

// length

// const newName = "Nefis";
// console.log(newName.length);
// console.log(newName[0]);
// console.log(newName.substring(1))


// String Interpolation

// const firstName = "Joe";
// const lastName = "Smith";

// OLD WAY - it sucks
// const message = "Hello, " + firstName + " " + lastName;

// New way
// const message = `Hello, ${firstName} ${lastName}`;

// console.log(message);


// Quick Challenge
// - Set your first name and last name to 
// variables interpolate the string:
// "Hello my name is Stefan Wawrzyn, 
//  my first name is 6 characters long."

// const firstNameLength = firstName.length;
// const newMessage = `Hello my name is ${firstName} ${lastName}, my first name is ${firstName.length} characters long.`;

// console.log(newMessage);

// Arrays

// const fruits = ["Banana"];

// Create
// fruits.push("Apple");
// fruits.push("Orange");

// Read
// console.log(fruits[2]);

// Update
// fruits[2] = "Pineapple";


// Delete
// fruits.splice(0, 2);

// Additional info on splice

// fruits.splice(0, 2, "Durian");

// console.log(fruits.length)

// fruits.splice(fruits.length - 1, 1)


// fruits.forEach((fruit) => {
//   console.log(fruit.toUpperCase());
// })



// console.log(fruits);


// Control Flow
// const age = 14

// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("You can't vote");
// }

// Ternary operator
// const message = age >= 18 ? "You can vote" : "You cannot vote";


// Objects
// const student = {
//   firstName: "Roxy",
//   lastName: "Hancke",
// };

// student.firstName = "Blah";

// console.log(student.firstName);
// console.log(student['firstName']);



// Functions
// const crappyWord = "blAHBlAH";

// const capitalize = (word) => {
//   const firstLetter = word[0].toUpperCase();
//   const restOfWord = word.substring(1).toLowerCase();
//   return `${firstLetter}${restOfWord}`;
// };

// const whateverWord = "fiewojfowiejf";

// console.log(capitalize(crappyWord));
