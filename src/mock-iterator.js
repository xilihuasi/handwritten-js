function mockIterator(array) {
  let index = 0;
  return {
    next() {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

/**
 * example
 */
const arr = [1, 2, 3, 4, 5];
const iterator = mockIterator(arr);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
