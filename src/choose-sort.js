function chooseSort(arr) {
  const len = arr.length;
  let minIndex;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

/**
 * example
 */
console.log(chooseSort([2, 3, 1, 5, 4]))