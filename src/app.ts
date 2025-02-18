function methodLogger(originalMethod: any, _context: any) {
  console.log("Decorator Invoked");
  //! The replacement function replaces the original method and when the original method is invoken then the replacement method is invoked instead of the original greet method.
  function replacementMethod(this: any, ...args: any[]) {
    console.log(args);
    console.log(this);
    console.log("Invocation Started");
    const result = originalMethod.call(this, ...args);
    console.log("Invocation ended");
    return result;
  }
  return replacementMethod;
}

class Person {
  constructor(public name: string) {}

  @methodLogger
  greet(greeting: string) {
    console.log(` ${greeting}, ${this.name}`);
  }
}

let user: Person = new Person("John");
user.greet("Hello");
