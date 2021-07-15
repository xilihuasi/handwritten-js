function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...outArgs) {
        return curried.apply(this, args.concat(outArgs))
      }
    }
  }
}

/**
 * example
 */
function sum(a, b, c) {
  return a + b + c;
}
const curriedSum = curry(sum)
console.log(curriedSum(1, 2, 3))
console.log(curriedSum(1)(2, 3))
console.log(curriedSum(1)(2)(3))