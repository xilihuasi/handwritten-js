function isObject(param) {
  return typeof param === 'object' && param !== null
}

function flatten(obj) {
  if (!isObject(obj)) return;
  const res = {}
  const dfs = (cur, prefix) => {
    if (Array.isArray(cur)) {
      cur.forEach((val, index) => {
        dfs(val, `${prefix}[${index}]`)
      })
    } else if (isObject(cur)) {
      for (const key in cur) {
        if (cur.hasOwnProperty(key)) {
          dfs(cur[key], `${prefix}${prefix ? '.' : ''}${key}`)
        }
      }
    } else {
      res[prefix] = cur;
    }
  }
  dfs(obj, '')
  return res;
}

/**
 * example
 */
const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 }
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3
}
console.log(flatten(obj));