function Lazyman(name) {
  class _Lazyman {
    constructor(name) {
      this.name = name;
      this.insertTime = 0;
      this.p = Promise.resolve().then(() => {
        if (this.insertTime) return this.wait(this.insertTime)
      }).then(() => {
        this.sayName()
      })
    }

    sayName() {
      console.log(`Hi！This is ${this.name}`);
    }

    eat(food) {
      this.p = this.p.then(() => {
        console.log(`Eat, ${food}`)
      })
      return this
    }

    sleep(time) {
      this.p = this.p.then(() =>
        this.wait(time)
      )
      return this;
    }

    sleepFirst(time) {
      this.insertTime = time;
      return this;
    }

    wait(time) {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Wake up after ${time}`);
          resolve();
        }, time * 1000);
      })
    }
  }

  return new _Lazyman(name)
}

export default Lazyman

/**
 * example
 */

Lazyman('Hank');

Lazyman("Hank").sleep(10).eat("dinner");

Lazyman("Hank").eat("dinner").eat("supper");

Lazyman("Hank").sleepFirst(5).eat("supper");