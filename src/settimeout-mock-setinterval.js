/**
 * simulate setInterval by using setTimeout
 * @param {function} fn 
 * @param {number} num 
 */
function mockInterval(fn, num) {
  let timerId = null
  function sto(f, n) {
    const preTimerId = timerId;
    timerId = setTimeout(() => {
      f()
      sto(f, n)
    }, n);
    clearTimeout(preTimerId)
    return timerId
  }
  return sto(fn, num)
}

/**
 * example
 */
mockInterval(() => console.log('tik'), 1000)