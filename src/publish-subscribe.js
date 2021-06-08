class EventBus {
  constructor() {
    this.events = {}
  }
  on(type, cb) {
    if (!this.events[type]) this.events[type] = []
    this.events[type].push(cb)
  }
  off(type, cb) {
    const cbList = this.events[type]
    if (cbList) {
      this.events[type] = cbList.filter((item) => item !== cb)
    }
  }
  once(type, cb) {
    function fn() {
      cb(...arguments)
      this.off(type, fn)
    }
    this.on(type, fn)
  }
  emit(type, ...rest) {
    this.events[type] && this.events[type].forEach(cb => cb.apply(this, rest))
  }
}

/**
 * example
 */
const eventBus = new EventBus()

const handler = (name = 'unknown') => console.log(`${name}: say hi`)

eventBus.on('hi', handler)
eventBus.emit('hi')
eventBus.emit('hi', 'Kobe')
eventBus.off('hi', handler)
eventBus.emit('hi', 'Curry')
eventBus.once('hi', handler)
eventBus.emit('hi', 'Durrant')
eventBus.emit('hi', 'Paul')