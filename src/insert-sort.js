function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }
  return arr
}

/**
 * example
 */
console.log(insertSort([2, 3, 1, 5, 4]))
console.log(insertSort([2, 8, 3, 7, 5]))