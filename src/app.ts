//! Generic Class with Methods
class Box<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getAllItems(): T[] {
    return this.items;
  }
}

const numberStorage = new Box<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
console.log(numberStorage.getAllItems()); // ✅ [10, 20]

const stringStorage = new Box<string>();
stringStorage.addItem("Alice");
stringStorage.addItem("Bob");
console.log(stringStorage.getAllItems()); // ✅ ["Alice", "Bob"]

//! Adding Constraints to Generic Classes
interface Identifiable {
  id: number;
}

class Repository<T extends Identifiable> {
  private records: T[] = [];

  addRecord(record: T): void {
    this.records.push(record);
  }

  findRecordById(id: number): T | undefined {
    return this.records.find((record) => record.id === id);
  }
}

class User {
  constructor(public id: number, public name: string) {}
}

const userRepo = new Repository<User>();
userRepo.addRecord(new User(1, "Alice"));
userRepo.addRecord(new User(2, "Bob"));
console.log(userRepo.findRecordById(1)); // ✅ { id: 1, name: "Alice" }

//!  Generic Classes with Multiple Type Parameters
class Pair<K, V> {
  constructor(public key: K, public value: V) {}

  getKey(): K {
    return this.key;
  }

  getValue(): V {
    return this.value;
  }
}

const personAge = new Pair("Alice", 30);
console.log(personAge.getKey(), personAge.getValue()); // ✅ "Alice", 30

const productPrice = new Pair(101, 99.99);
console.log(productPrice.getKey(), productPrice.getValue()); // ✅ 101, 99.99
