/**
 * 
 * @param {array} array 
 */
function unique1(array) {
  return Array.from(new Set(array))
}

function unique2(array) {
  if (!Array.isArray(array)) return;
  const res = []
  for (let i = 0, l = array.length; i < l; i += 1) {
    const element = array[i];
    if (res.indexOf(element) < 0) res.push(element)
  }
  return res
}

/**
 * example
 */
const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}]
console.log(unique1(arr))
console.log(unique2(arr))