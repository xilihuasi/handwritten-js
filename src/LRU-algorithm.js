class LRUCache {
  constructor(capacity) {
    this.caches = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.caches.get(key)) return -1;
    const value = this.caches.get(key)
    this.caches.delete(key)
    this.caches.set(key, value)
    return value
  }

  put(key, value) {
    if (this.caches.get(key)) this.caches.delete(key)
    this.caches.set(key, value)

    if (this.caches.size > this.capacity) {
      const firstKey = this.caches.keys().next().value
      this.caches.delete(firstKey)
    }
  }
}

/**
 * example
 */
const cache = new LRUCache(2 /* 缓存容量 */);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));      // 返回  1
cache.put(3, 3);                // 该操作会使得密钥 2 作废
console.log(cache.get(2))       // 返回 -1 (未找到)
cache.put(4, 4);                // 该操作会使得密钥 1 作废
cache.get(1);                   // 返回 -1 (未找到)
console.log(cache.get(3));      // 返回  3
console.log(cache.get(4));      // 返回  4