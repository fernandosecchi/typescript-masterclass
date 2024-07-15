const map = <T, U>(array: T[], func: (item: T) => U): (U | T)[] => {
  if (array.length === 0) {
    return array;
  }

  let result: U[] = [];

  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]));
  }
  return result;
};

let numbers = [4, 5, 6, 7, 8, 9];
const converted = map(numbers, (num) => num.toString());
console.log(converted);
