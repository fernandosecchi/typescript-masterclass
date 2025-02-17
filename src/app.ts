//! Basic Conditional Types
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"

//! Creating Utility Types with Conditional Types
type OptionalIfString<T> = {
  [K in keyof T]: T[K] extends string ? T[K] | undefined : T[K];
};

type User = {
  id: number;
  name: string;
  age: number;
};

type OptionalNameUser = OptionalIfString<User>;

//  Equivalent to:
/* type OptionalNameUser = {
  id: number;
  name?: string;
  age: number;
};
 */
