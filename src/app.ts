// Discriminated Unions (also called Tagged Unions or Sum Types) are a powerful pattern in TypeScript that enables type-safe handling of multiple related types.

//! Help in achieving Totality
// A Discriminated Union consists of:
// A common property (discriminator) that uniquely identifies each variant.
// A union type that combines multiple object types.

//! Why Use Discriminated Unions?
// Improves Type Safety: Ensures that all possible cases are handled.
// Eliminates Type Assertions: TypeScript infers the correct type based on the discriminator.
// Enhances Maintainability: Prevents runtime errors by enforcing exhaustive handling at compile time.

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  side: number;
};

type Rectangle = {
  kind: "rectangle";
  length: number;
  breadth: number;
};

// Add a new Reactangle share to the union and see that exhaustive check will throw a proper Typescript error.
type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      const _exhaustiveCheck: never = shape; // ❌ TypeScript error if a case is missing
      throw new Error("Unhandled shape type");
  }
}
