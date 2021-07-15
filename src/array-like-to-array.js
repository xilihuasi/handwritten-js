const arrayLike = document.querySelectorAll('div')

const arr1 = [...arrayLike];
const arr2 = Array.from(arrayLike);
const arr3 = Array.prototype.slice.call(arrayLike)
const arr4 = Array.apply(null, arrayLike)
const arr5 = Array.prototype.concat.apply([], arrayLike)