let arr = [
  [1, 2],
  [3, 4]
];
let ws = new WeakSet(arr);
console.log(ws);

const foos = new WeakSet();
class Foo {
  constructor() {
    foos.add(this);
  }
  method() {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用');
    }
  }
}