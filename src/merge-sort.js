function merge(left, right) {
  const arr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right]
}

function mergeSort(arr) {
  if (arr.length < 2) return arr
  const mid = arr.length / 2
  const leftArr = arr.splice(0, mid)
  return merge(mergeSort(leftArr), mergeSort(arr))
}

/**
 * example
 */
console.log(mergeSort([2, 3, 1, 5, 4]))
console.log(mergeSort([2, 8, 3, 7, 5]))