//! What Are Type Guards?

// Type Guards are techniques used in TypeScript to ensure that a value conforms to a specific type before performing operations on it. They help with type safety in conditional logic by refining types.

// Example of a type guard. We use theme everywhere in JavaScript
function isString(value: any) {
  if (typeof value === "string") {
    console.log("Value is a string");
  } else {
    console.log("Value is not a string");
  }
}

isString("hello");

//! Example 1: Using typeof for Type Guards
function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log("It's a string:", value.toUpperCase());
  } else {
    console.log("It's a number:", value.toFixed(2));
  }
}

processValue("hello"); // "HELLO"
processValue(42); // "42.00"

//! Example 2: Using instanceof for Type Guards
class Car {
  drive() {
    console.log("Driving a car");
  }
}

class Bike {
  ride() {
    console.log("Riding a bike");
  }
}

function useVehicle(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}

useVehicle(new Car()); // "Driving a car"
useVehicle(new Bike()); // "Riding a bike"
