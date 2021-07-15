function add(a, b) {
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, 0);
  b = b.padStart(maxLength, 0);
  let sum = '';
  let f = 0;
  for (let i = maxLength - 1; i >= 0; i--) {
    const t = Number(a[i]) + Number(b[i]) + f;
    f = Math.floor(t / 10);
    sum = (t % 10) + sum;
  }
  if (f === 1) sum = 1 + sum;
  return sum;
}

/**
 * example
 */
const a = '9007199254740991';
const b = '1234567899999999999';
console.log(add(a, b));
