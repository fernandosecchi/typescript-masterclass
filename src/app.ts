function methodLogger(logPrefix: string) {
  return function (originalMethod: any, _context: any) {
    return function (this: any, ...args: any[]) {
      console.log(`${logPrefix}: Invocation Started`);
      const result = originalMethod.call(this, ...args);
      console.log(`${logPrefix}: Invocation ended`);
      return result;
    };
  };
}

function bound(_originalMethod: any, context: any) {
  const methodName = context.name;

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
