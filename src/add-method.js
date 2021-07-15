function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...innerArgs) {
        return curried.apply(this, [...args, ...innerArgs])
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
const add = curry(sum)
add(1, 2, 3) === add(1)(2)(3)
add(1)(2)(3) === add(1, 2)(3)
console.log(add(1, 2, 3))