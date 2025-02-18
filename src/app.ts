//! GENRIC CONSTRUCTOR TYPE TO BE USED FIRST IF NEED TO EXTEND ANY CLASS
// { new (...args: any[]): {} }

function addGreetMethod<T extends new (...args: any[]) => Greetable>(
  baseClass: T,
  _context: ClassDecoratorContext<T>
) {
  return class extends baseClass {
    constructor(...args: any[]) {
      super(...args);
      this.greet = (greeting: string) => {
        console.log(` ${greeting}, ${this.name}! Have a gret day`);
      };
    }
  };
}

//! Interface needs to be addded in the end to solve the proble of TypeScript now able to identify the greet method
interface Greetable {
  name: string;
  greet?: (greeting: string) => void;
}

//! We will get an error without proper Generics in place
@addGreetMethod
class Author implements Greetable {
  constructor(public name: string) {}
}

const author = new Author("Mark");
console.log(author);
