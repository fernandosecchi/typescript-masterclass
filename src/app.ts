// Supertype: Defines a generic shape of a Person
type Person = {
  name: string;
  age: number;
};

// Subtype: A more specific type of Person
type Employee = Person & {
  employeeId: number;
  department: string;
};

// Subtype: Another specialization of Person
type Student = Person & {
  studentId: number;
  major: string;
};

// Function that accepts a Person but can also work with subtypes
function greet(person: Person): string {
  return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

const employee: Employee = { name: "Alice", age: 30, employeeId: 101, department: "Engineering" };
const student: Student = { name: "Bob", age: 22, studentId: 2001, major: "Computer Science" };

console.log(greet(employee));
// Works fine since Employee is a subtype of Person
console.log(greet(student));
// Works fine since Student is a subtype of Person
