//! Making All Properties Optional using Mapped Types

type User = {
  id: number;
  name: string;
  age: number;
};

type PartialUser = {
  [K in keyof User]?: User[K];
};

const user1: PartialUser = { name: "Alice" }; // ✅ Allowed
// const user2: PartialUser = { unknownProp: 42 }; // ❌ Error: unknownProp does not exist

//! Mapping Property Types Conditionally
type OptionalIfString<T> = {
  [K in keyof T]: T[K] extends string ? T[K] | undefined : T[K];
};

type UserWithOptionalStrings = OptionalIfString<User>;
/* Equivalent to:
  type UserWithOptionalStrings = {
    id: number;
    name?: string;
    age: number;
  }
*/
