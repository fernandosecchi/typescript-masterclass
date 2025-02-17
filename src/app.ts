//! Using typeof to Create a Type from a Variable
const user = {
  id: 1,
  name: "Alice",
  age: 30,
};

type UserType = typeof user;

const newUser: UserType = { id: 2, name: "Bob", age: 25 }; // ✅ Works fine

// const invalidUser: UserType = { id: 3, name: "Charlie" }; // ❌ Error: Missing 'age' property

//! Using typeof with Function Return Types
function getUser() {
  return { id: 1, name: "Alice", age: 30 };
}

type ReturnUserType = ReturnType<typeof getUser>; // Extracts return type

const anotherUser: ReturnUserType = { id: 3, name: "Charlie", age: 22 }; // ✅ Works fine

//! Using typeof for Constants and Enums
const statusMessages = {
  success: "Operation successful",
  error: "An error occurred",
  loading: "Loading...",
};

type StatusMessages = typeof statusMessages;

type StatusKeys = keyof StatusMessages; // "success" | "error" | "loading"

function getMessage(status: StatusKeys): string {
  return statusMessages[status];
}

console.log(getMessage("success")); // ✅ "Operation successful"
