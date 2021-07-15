function is(x, y) {
  if (x === y) {
    // 当前情况考虑 +0 -0
    // 如果 x === 0 判断 +0 和 -0，1/+0 === Infinity 和 1/-0 === -Infinity
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // x !== y 情况考虑 NaN
    return x !== x && y !== y;
  }
}

/**
 * example
 */
console.log(is(0, 0))
console.log(is(+0, -0))
console.log(is(NaN, NaN))