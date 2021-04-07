const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED';

class MyPromise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;

        // 方法写在constructor外面的话就是写在原型链上
        const resolve = value => {
            if(this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
            }
        };

        // 方法写在constructor外面的话就是写在原型链上
        const reject = reason => {
            if(this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
            }
        };

        try {
            executor(resolve, reject);
        } catch(e) {
            reject(e);
        }
    }

    then(onFulfilled, onRejected) {
        if(this.status === FULFILLED) {
            onFulfilled(this.value);
        }

        if(this.status === REJECTED) {
            onRejected(this.reason);
        }
    }
}

module.exports = MyPromise;