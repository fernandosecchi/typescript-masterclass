//! Creating Prefixed Keys for an Object
type Status = "success" | "error" | "pending";
type StatusMessage = `status-${Status}`;

const message1: StatusMessage = "status-success"; // ✅ Allowed
const message2: StatusMessage = "status-error"; // ✅ Allowed
// const message3: StatusMessage = "status-failed"; // ❌ Error: "failed" is not a valid Status

//! Using Template Literals with Generics
function createApiEndpoint<T extends string>(route: T): `api/${T}` {
  return `api/${route}` as const;
}

const userEndpoint = createApiEndpoint("users"); // "api/users"
const orderEndpoint = createApiEndpoint("orders"); // "api/orders"

//! Creating Union Types with Dynamic Formatting
type RGB = `rgb(${number}, ${number}, ${number})`;

const color1: RGB = "rgb(255, 0, 0)"; // ✅ Allowed
// const color2: RGB = "rgba(255, 0, 0, 0.5)"; // ❌ Error: Incorrect format
