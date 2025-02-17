//! Create a Box of different type of content
interface Box<T> {
  content: T;
  size: number;
}

const stringBox: Box<string> = { content: "Hello, TypeScript", size: 10 };
const numberBox: Box<number> = { content: 42, size: 5 };

console.log(stringBox.content.toUpperCase()); // ✅ "HELLO, TYPESCRIPT"
console.log(numberBox.content.toString()); // ✅ "42"

//! Generic Constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log("Length is:", arg.length);
}

logLength({ length: 10, value: "Hello" }); // ✅ Works because `length` exists
logLength("TypeScript Generics"); // ✅ Strings have `length`
// logLength(42); // ❌ Error: Number does not have `length`

//! Using Multiple Type Parameters
interface Pair<K, V> {
  key: K;
  value: V;
}

const personAge: Pair<string, number> = { key: "Alice", value: 30 };
const productPrice: Pair<number, number> = { key: 101, value: 99.99 };

console.log(personAge.key, personAge.value); // ✅ "Alice", 30
console.log(productPrice.key, productPrice.value); // ✅ 101, 99.99
