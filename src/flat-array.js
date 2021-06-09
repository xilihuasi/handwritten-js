function flat(arr) {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      acc = acc.concat(flat(cur))
    } else {
      acc.push(cur)
    }
    return acc
  }, [])
}

function flatByAPI(arr) {
  return arr.flat(Infinity)
}

function flatArrayIfPureNumber(arr) {
  return arr.toString().split(',').map(i => Number(i))
}

/**
 * example
 */
const arr = [1, 2, 3, [4, 5], 6, [7, [8, [9, 10, 11]]]]
console.log(flatByAPI(arr))
console.log(flatArrayIfPureNumber(arr));
console.log(flat(arr))
const objArr = [1, 2, 3, [{ x: 1 }, [2, 3, [{ y: 2 }]]]]
console.log(flat(objArr))