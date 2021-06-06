function newInstanceof(left, right) {
  if (left === null) return false
  if (typeof left !== "object" && typeof left !== 'function') return false;
  const rightProto = right.prototype;
  let leftProto = left.__proto__;
  while (true) {
    if (leftProto === null) return false;
    if (leftProto === rightProto) return true;
    leftProto = leftProto.__proto__;
  }
}

/**
 * example
 */
function Test() {

}
console.log(newInstanceof({}, Object), {} instanceof Object)
console.log(newInstanceof(Test, Function), Test instanceof Function)
console.log(newInstanceof('', String), '' instanceof String)
console.log(newInstanceof(null, Object), null instanceof Object)
console.log(newInstanceof([], Object), [] instanceof Object)
console.log(newInstanceof(new Date(), Date), new Date() instanceof Date)
