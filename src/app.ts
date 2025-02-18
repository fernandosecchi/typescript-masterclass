function methodLogger(originalMethod: any, context: any) {
  //! STEP 2.1, CREATE VARIABLE FOR METHOD NAME
  const methodName = context.name;

  //! STEP 2.3: Add CONDITION FOR INITIALIZER
  if (context.private) {
    throw new Error(`'bound' cannot decorate private properties like ${methodName as string}.`);
  }

  //! STEP 2.2: ADD INITIALIZER
  // Runs inside the constructor of Person when an instance is created.
  // Binds the method to the instance (this), ensuring correct context.
  // Equivalent to manually binding inside the constructor:
  // typescript

  context.addInitializer(function (this: any) {
    this[methodName] = this[methodName].bind(this);
  });

  function replacementMethod(this: any, ...args: any[]) {
    console.log("Invocation Started");
    const result = originalMethod.call(this, ...args);
    console.log("Invocation ended");
    return result;
  }
  return replacementMethod;
}

class Person {
  constructor(public name: string) {
    //! STEP 3: THIS IS HOW YOU WOULD HAVE DONE IT IN JAVASCRIPT CONSTRUCTOR
    // this.greet = this.greet.bind(this);
  }

  @methodLogger
  greet(greeting: string) {
    //! PART OF STEP 1
    //* Console dir is a method that displays a list of the properties of the specified JavaScript object
    console.dir(this);
    console.log(` ${greeting}, ${this.name}`);
  }
}

let user: Person = new Person("John");
user.greet("Hello");
//! STEP 1: SEE THE PROBLEM
//! There will be a problem if greet is called as a standalone function
//! Reassigning greet to a separate variable to showcase the problem with the this keyword. You will see that this keword points to the Person class
const greet = user.greet;
greet("Morning");
