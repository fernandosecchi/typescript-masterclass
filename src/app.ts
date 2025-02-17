// Totality is a concept in TypeScript that refers to functions or operations that handle all possible inputs of a given type without failing at runtime. A function is said to be total if it accounts for all possible cases, ensuring that no unexpected errors occur due to unhandled inputs.

//! What Makes a Function Total?
// A function is considered total if it:
// Handles all possible cases for its input type.
// Does not throw unexpected runtime errors.
// Ensures correctness through exhaustive type checking.

function getLength(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  // ❌ This function is partial because it does not handle numbers properly.
}
console.log(getLength("hello")); // ✅ 5

function getLengthSafe(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.toString().length;
  }
  // ✅ This function is total because it covers all cases.
}

console.log(getLengthSafe("hello")); // ✅ 5
console.log(getLengthSafe(42)); // ✅ 2 (length of "42")
