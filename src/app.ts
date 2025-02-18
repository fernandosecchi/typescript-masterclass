function getter(getter: any, context: ClassGetterDecoratorContext) {
  console.log(getter);
  console.log(context);
}

function setter(setter: any, context: ClassSetterDecoratorContext) {
  console.log(setter);
  console.log(context);
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
