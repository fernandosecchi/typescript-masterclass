//! What is Type Widening?

// Type Widening is the process by which a more specific type is broadened to a more general type when assigned to a variable with an implicit type. This happens mainly with uninitialized variables or when assigning to a declared any or unknown type.

const welcomeString = "Hello There";
let replyString = "Hey";

// Aside from the text differences of the strings, welcomeString
// is a const (which means the value will never change)
// and replyString is a let (which means it can change).

// If you hover over both variables, you get very different
// type information from TypeScript:
//
//   const welcomeString: "Hello There"
//
//   let replyString: string

// TypeScript has inferred the type of welcomeString to be
// the literal string "Hello There", whereas replyString
// is general string.

// This is because a let needs to have a wider type, you
// could set replyString to be any other string - which means
// it has a wider set of possibilities.

replyString = "Hi";

//! Type Narrowing
// Type Narrowing is the opposite of widening.
// Type narrowing is what powers the strict mode of TypeScript
// via the nullability checks. With strict mode turned off,
// markers for nullability like undefined and null are ignored
// in a union.

declare const quantumString: string | undefined;
// This will fail in strict mode only
quantumString.length;

// In strict mode the onus is on the code author to ensure
// that the type has been narrowed to the non-null type.
// Usually this is as simple as an if check:

if (quantumString) {
  quantumString.length;
}
