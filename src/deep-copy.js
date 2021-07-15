function deepCopy(target, map = new Map()) {
  if (target === null) return null;
  if (typeof target !== 'object') return target;
  if (target.constructor === Date) return new Date(target);
  if (target.constructor === RegExp) return new RegExp(target);
  if (map.has(target)) return map.get(target);
  const newTarget = new target.constructor();
  map.set(target, newTarget);
  Reflect.ownKeys(target).forEach(key => {
    newTarget[key] = deepCopy(target[key], map);
  })
  return newTarget;
}

/**
 * example
 */
const a = [1, 2, { x: 1 }, new Date(), () => null]
const _a = deepCopy(a)
console.log(typeof a[4])
console.log(_a, a === _a)