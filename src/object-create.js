function create(proto) {
  function F() { }
  F.prototype = proto
  F.prototype.constructor = F
  return new F()
}

/**
 * example
 */
const a = create({ x: 1 })
const b = Object.create({ x: 1 })
console.log(a)
console.log(b)