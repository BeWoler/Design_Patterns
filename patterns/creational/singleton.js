class Counter {
  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    console.log(this.count);
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const newCounter1 = new Counter();
const newCounter2 = new Counter();

newCounter1.getCount(); // 0
newCounter2.getCount(); // 0

newCounter2.increaseCount(); // +1

newCounter1.getCount(); // 1
newCounter2.getCount(); // 1
