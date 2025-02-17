//! Definition
// Soundness is the idea that the compiler can make guarantees
// about the type a value has at runtime, and not just
// during compilation. This is normal for most programming
// languages that are built with types from day one.

//! Why is a sound type system needed ?
// A sound type system ensures that a program does not have type errors at runtime.

//! Why is flexible and not sound?
// TypeScript, however, is intentionally unsound to allow flexibility and usability for JavaScript developers.

// Building a type system which models a language which has
// existed for a few decades however becomes about making
// decisions with trade-offs on three qualities: Simplicity,
// Usability and Soundness.

// With TypeScript's goal of being able to support all JavaScript
// code, the language tends towards simplicity and usability
// when presented with ways to add types to JavaScript.

// This trade-off helps prevent excessive restrictions that would hinder developer productivity.

//! Some features offered by TypeScript that make it unsound

//* Type Asertions
let value: unknown = "Hello, TypeScript!";

// TypeScript allows assertion without verifying correctness
let str: number = value as number; // No error, but incorrect

console.log(str); // Runtime error: string cannot be used as number

//! Why does this happen?

// Type assertions (as) allow bypassing TypeScript's type system, making code unsafe but more flexible.

type User = {
  name: string;
  age: number;
};

//! Excess Property Checks are Skipped in Assignment
const user = { name: "Alice", age: 25, isAdmin: true };
//! Will still error out if the type is defined on assignment
//* EXAMPLE: const user = { name: "Alice", age: 25, isAdmin: true }; THIS WILL ERROR OUT - SAME AS THE EXAMPLE SHARED IN PREVIOUS LECTURE

// Assigning an object with an extra property to User
const newUser: User = user; // No error, even though isAdmin is not in User

console.log(newUser); // Works, but isAdmin is silently ignored

//! Why does this happen?

// TypeScript only checks declared types, not the entire object structure when assigned.

// This allows greater compatibility with JavaScript's dynamic nature.

//! Function Parameter Bivariance
// Bivariance means a function accepting a supertype can be assigned to a function requiring a subtype, which increases flexibility but can lead to unsafe type behavior.
type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};

let handleAnimal = (animal: Animal) => {
  console.log(`Handling ${animal.name}`);
};

// You can re-declare the parameter type to be a subtype of
// the declaration. TypeScript accepts a stricter type of Animal
// a type which has additional properties.

let handleDog: (dog: Dog) => void = handleAnimal;
handleDog({ name: "Buddy", breed: "Labrador" }); // Works fine

//! Rest Parameters

// Rest parameters are assumed to all be optional, this means
// TypeScript will not have a way to enforce the number of
// parameters available when using rest parameters

function logNumbers(...numbers: number[]) {
  console.log(numbers);
}

logNumbers(); // ✅ Works: No arguments passed
logNumbers(1, 2, 3); // ✅ Works: Multiple arguments passed

// A function which returns a void function, can accept a
// function which takes any other type.

const getPI = () => 3.14;

function runFunction(func: () => void) {
  func();
}

runFunction(getPI);
// The function actually returns a value, but TypeScript treats it as void, leading to confusion.
