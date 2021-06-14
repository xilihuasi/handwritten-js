function newOperator(Fn, ...args) {
  if (typeof Fn !== 'function') return
  newOperator.target = Fn;
  const newObj = Object.create(Fn.prototype);
  const result = Fn.apply(newObj, args);
  const isObject = typeof result === 'object' && result !== null;
  const isFunction = typeof result === 'function';
  return (isObject || isFunction) ? result : newObj;
}

/**
 * example
 */
function Person(name, height) {
  this.name = name;
  this.height = height;
}

const p1 = new Person('wang', '180')
const p2 = newOperator(Person, 'li', '177')

console.log(p1.__proto__ === Person.prototype)
console.log(p2.__proto__ === Person.prototype)