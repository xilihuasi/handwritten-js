function binarySearch(arr, target) {
  const len = arr.length;
  if (len === 0) return -1;
  let left = 0, right = len - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    }
  }
}

/**
 * example
 */
const arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 1))
console.log(binarySearch(arr, 5))