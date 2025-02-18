//! STEP 2: Or second alternative could be that we use Generics, which makes the decorator strictly typed but increases the complexity of the code.
function methodLogger<This, Args extends any[], Return>(logPrefix: string) {
  return function (
    originalMethod: (this: This, ...args: Args) => Return,
    _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
  ) {
    return function (this: This, ...args: Args): Return {
      console.log(`${logPrefix}: Invocation Started`);
      const result = originalMethod.call(this, ...args);
      console.log(`${logPrefix}: Invocation ended`);
      return result;
    };
  };
}

//! STEP 1: We can use simple Type declaration of Function, here this will remain as ANY
function bound(_originalMethod: Function, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);

  if (context.private) {
    throw new Error(`'bound' cannot decorate private properties like ${methodName as string}.`);
  }

  context.addInitializer(function (this: any) {
    this[methodName] = this[methodName].bind(this);
  });
}

class Person {
  constructor(public name: string) {}

  @bound
  @methodLogger("LOG")
  greet(greeting: string) {
    console.dir(this);
    console.log(` ${greeting}, ${this.name}`);
  }
}

let user: Person = new Person("John");
user.greet("Hello");

const greet = user.greet;
greet("Morning");
