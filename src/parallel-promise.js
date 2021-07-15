class Schedule {
  constructor(limit) {
    this.queue = [];
    this.maxCount = limit;
    this.runCount = 0;
  }
  add(delay, order) {
    const p = () =>
      new Promise((resolve, reject) => {
        console.log(`handling ${order} ···`);
        setTimeout(() => {
          console.log(order);
          resolve();
          console.log(`handle ${order} complete`);
        }, delay);
      });
    this.queue.push(p);
  }
  run() {
    for (let i = 0; i < this.maxCount; i += 1) {
      this.request();
    }
  }
  request() {
    if (!this.queue || !this.queue.length || this.maxCount <= this.runCount) {
      return;
    }
    this.runCount++;
    this.queue
      .shift()()
      .then(() => {
        this.runCount--;
        this.request();
      });
  }
}

/**
 * example
 */
const schedule = new Schedule(3);
const addTask = (delay, order) => schedule.add(delay, order);

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
schedule.run();
// 输出的输出顺序是：2 3 1 4
