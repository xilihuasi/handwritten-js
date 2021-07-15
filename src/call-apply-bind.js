Function.prototype.myCall = function (context, ...args) {
  const _this = typeof context === 'object' ? context || window : window;
  const key = Symbol();
  _this[key] = this;
  const result = _this[key](...args)
  delete _this[key]
  return result
}

Function.prototype.myApply = function (context, args) {
  return this.myCall(context, ...args)
}

Function.prototype.myBind = function (context, ...args) {
  const _this = this;
  return function (...params) {
    return _this.myCall(context, ...args, ...params)
  }
}

/**
 * example
 */
function test(...args) {
  console.log(this.name)
  if (args.length) console.log(`input params is: ${args}`);
}
test()
const a = { name: 'john' }
const testAfterMyBind = test.myBind(a)
testAfterMyBind();
test.myCall(a, 1, 2)
test.myApply(a, [1, 2, 3, 4])