class Stack {
  constructor(...items) {
    this.reverse = false;
    this.stack = [...items];
  }

  push(...items) {
    return this.reverse ? this.stack.unshift(...items) : this.stack.push(...items);
  }

  pop() {
    return this.reverse ? this.stack.shift() : this.stack.pop();
  }
}
const stack = new Stack(4, 5);
stack.reverse = true;
console.log(stack);
console.log(stack.push(1, 2, 3) === 5);
console.log(stack.stack);
console.log(stack.stack === [1, 2, 3, 4, 5]);