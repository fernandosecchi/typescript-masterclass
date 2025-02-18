function getter<This, Value>(getter: Function, _context: ClassGetterDecoratorContext<This, Value>) {
  return function (this: This) {
    const result = getter.call(this);
    if (result > 18) {
      console.log("Person is an adult");
    }
    return result;
  };
}

function setter<This, Value, Return>(
  setter: (args: Value) => Return,
  _context: ClassSetterDecoratorContext<This, Value>
) {
  return function (this: This, arg: any) {
    console.log(`Setting the age to ${arg}`);
    return setter.call(this, arg);
  };
}

class Person {
  name: string;

  constructor(name: string, private _age: number = 10) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  @getter
  public get age() {
    return this._age;
  }

  @setter
  public set age(value) {
    this._age = value;
  }
}

const person = new Person("Mark");
person.age = 20;
console.log(person.age);
