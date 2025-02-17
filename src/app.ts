// TypeScript is a Structural Type System. A structural type
// system means that when comparing types, TypeScript only
// takes into account the members on the type.

// This is in contrast to nominal type systems, where you
// could create two types but could not assign them to each
// other.

// For example, these two interfaces are completely
// transferrable in a structural type system:

interface Ball {
  diameter: number;
}
interface Sphere {
  diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
ball = sphere;

// If we add in a type which structurally contains all of
// the members of Ball and Sphere, then it also can be
// set to be a ball or sphere.

interface Tube {
  diameter: number;
  length: number;
}

let tube: Tube = { diameter: 12, length: 3 };

tube = ball;
ball = tube;

//! Using an intersectional type, with a unique
// constraint in the form of a property called __brand (this
// is convention) which makes it impossible to assign a
// normal string to a ValidatedInputString.

type ValidatedInputString = string & { __brand: "Validated Input" };

// We will use a function to transform a string to
// a ValidatedInputString - but the point worth noting
// is that we're just _telling_ TypeScript that it's true.

const validateUserInput = (input: string) => {
  const simpleValidatedInput = input.trim();
  return simpleValidatedInput as ValidatedInputString; // 'as' forceful assertion
};

// Now we can create functions which will only accept
// our new nominal type, and not the general string type.

const printName = (name: ValidatedInputString) => {
  console.log(name);
};
