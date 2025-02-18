function methodLogger(originalMethod: any, _context: any) {
  function replacementMethod(this: any, ...args: any[]) {
    console.log("Invocation Started");
    const result = originalMethod.call(this, ...args);
    console.log("Invocation ended");
    return result;
  }
  return replacementMethod;
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
  @methodLogger
  greet(greeting: string) {
    console.dir(this);
    console.log(` ${greeting}, ${this.name}`);
  }
}

let user: Person = new Person("John");
user.greet("Hello");

const greet = user.greet;
greet("Morning");
