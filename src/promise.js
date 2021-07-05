class PromisePolyFill {
  constructor(cb) {
    this.status = 'pending';
    this.successFn = [];
    this.failFn = [];

    const resolve = (val) => {
      if (this.status !== 'pending') return;
      this.status = 'success';
      setTimeout(() => {
        this.successFn.forEach(item => item.call(this, val))
      });
    }

    const reject = (err) => {
      console.log('enter reject');
      if (this.status !== 'pending') return;
      this.status = 'fail';
      setTimeout(() => {
        this.failFn.forEach(item => item.call(this, err))
      });
    }

    try {
      cb(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(resolveCb, rejectCb) {
    resolveCb = typeof resolveCb === 'function' ? resolveCb : (val) => v;
    rejectCb = typeof rejectCb === 'function' ? rejectCb : (err) => { throw err };

    return new PromisePolyFill((resolve, reject) => {
      this.successFn.push((val) => {
        try {
          const result = resolveCb(val);
          result instanceof PromisePolyFill ? result.then(resolve, reject) : resolve(result)
        } catch (error) {
          reject(error);
        }
      })

      this.failFn.push((val) => {
        try {
          const result = rejectCb(val);
          result instanceof PromisePolyFill ? result.then(resolve, reject) : reject(result)
        } catch (error) {
          reject(error);
        }
      })
    })
  }
  static all(arr) {
    const result = [];
    let count = 0;
    return new PromisePolyFill((resolve, reject) => {
      for (let i = 0; i < arr.length; i++) {
        const promise = arr[i];
        promise.then((res) => {
          result[i] = res;
          count++;
          if (count === arr.length) {
            resolve(result)
          }
        }, (err) => reject(err))
      }
    })
  }
  static race(arr) {
    return new PromisePolyFill((resolve, reject) => {
      for (let i = 0; i < arr.length; i++) {
        const promise = arr[i];
        promise.then((res) => resolve(res), (err) => reject(err))
      }
    })
  }
}

/**
 * example
 */
const p = new PromisePolyFill((resolve, reject) => {
  resolve(333)
});
p.then((data) => {
  console.log(data);
})

const promise1 = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 2000);
});
const promise2 = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
    resolve(222);
  }, 1000);
});

PromisePolyFill.all([promise1, promise2]).then(res => {
  console.log('all: ', res);
})

PromisePolyFill.race([promise1, promise2]).then(res => {
  console.log('race:', res);
});

promise1
  .then(
    res => {
      console.log(res); // 过两秒输出111
      return new PromisePolyFill((resolve, reject) => {
        setTimeout(() => {
          resolve("success");
        }, 1000);
      });
    },
    err => {
      console.log(err);
    }
  )
  .then(
    res => {
      console.log(res); // 再过一秒输出success
    },
    err => {
      console.log(err);
    }
  );