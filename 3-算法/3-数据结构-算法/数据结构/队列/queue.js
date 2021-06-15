class Queue {
  constructor(...items) {
    this.reverse = false;
    this.queue = [...items];
  }

  enqueue(...items) {
    return this.reverse ? this.queue.push(...items) : this.queue.unshift(...items);
  }

  dequeue(...items) {
    return this.reverse ? this.queue.shift() : this.queue.pop()
  }
}
let queue = new Queue(4, 5);
queue.reverse = true;
queue.enqueue(6, 7, 8);
console.log(queue);
queue.dequeue();
console.log(queue.queue);