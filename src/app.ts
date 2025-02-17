//! Default types can be assigned to any generic. Just like you assign default parameter values in JavaScript generics can also have default values.

interface ApiResponse<T = string> {
  data: T;
  status: number;
}

const response1: ApiResponse = { data: "Success", status: 200 }; // Defaults to `string`
const response2: ApiResponse<number> = { data: 100, status: 200 }; // Overrides default

console.log(response1.data.toUpperCase()); // ✅ Works: `data` inferred as string
console.log(response2.data.toFixed(2)); // ✅ Works: `data` is a number

function identity<T = string>(value: T): T {
  return value;
}

console.log(identity("Hello")); // ✅ Default type `string` inferred
console.log(identity<number>(42)); // ✅ Explicit override
