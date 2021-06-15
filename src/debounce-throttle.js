function debounce(fn, ms) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, ms);
  }
}

function throttle(fn, ms) {
  let timer;
  return function (...args) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      clearTimeout(timer)
      timer = null
    }, ms);
  }
}

/**
 * example
 */
console.log(new Date().getTime())
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const d = debounce((input) => { console.log(`dd: ${input}`, new Date().getTime()); }, 1000)
setTimeout(() => {
  d('first')
  setTimeout(() => {
    d('second')
    setTimeout(() => {
      d('third')
    }, 900);
  }, 900);
}, 900);

const t = throttle((input) => { console.log(`tt: ${input}`, new Date().getTime()); }, 1000)
setTimeout(() => {
  t('first')
  setTimeout(() => {
    t('second')
    setTimeout(() => {
      t('third')
    }, 900);
  }, 900);
}, 900);