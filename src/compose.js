/**
 * implement a(b(c(...args)))
 * @param  {function} funcs 
 */
const compose = (...funcs) => {
  if (!funcs.length) return (p) => p;
  return funcs.reduce((pre, cur) => (...args) => pre(cur(...args)))
}
module.exports = compose;

/**
 * example
 */
const fn1 = x => x + 1;
const fn2 = x => x + 2;
const fn3 = x => x + 3;

const fn = compose(fn1, fn2, fn3);
console.log(fn(1));