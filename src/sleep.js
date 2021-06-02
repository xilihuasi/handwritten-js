/**
 * delay execute
 * @param {number} ms millisecond
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
module.exports = sleep;

/**
 * example
 */
console.log(new Date().getSeconds())
sleep(1000).then(() => console.log(new Date().getSeconds()))