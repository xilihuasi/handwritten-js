function quickSort(arr) {
  if (arr.length <= 1) return arr
  const midIndex = Math.floor(arr.length / 2)
  const midNum = arr.splice(midIndex, 1)[0]
  const left = []
  const right = []
  for (var i = 0; i < arr.length; i += 1) {
    const num = arr[i]
    if (num < midNum) {
      left.push(num)
    } else {
      right.push(num)
    }
  }
  return quickSort(left).concat([midNum], ...quickSort(right))
}

/**
 * example
 */
console.log(quickSort([2, 3, 1, 5, 4]))