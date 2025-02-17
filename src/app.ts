type User = {
  id: number;
  name: string;
  age: number;
};

type UserNameType = User["name"]; // Extracts `string`

type UserIDType = User["id"]; // Extracts `number`

const userName: UserNameType = "Alice"; // ✅ Allowed
// const invalidUserName: UserNameType = 42; // ❌ Error: Type 'number' is not assignable to 'string'

//! Using Indexed Access Types in Function
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const userData: User = { id: 1, name: "Bob", age: 25 };

const userName2: User["name"] = getProperty(userData, "name"); // ✅ Works fine
const userAge: User["age"] = getProperty(userData, "age"); // ✅ Works fine
