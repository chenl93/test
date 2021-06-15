const bar = new Bar();

function Bar() {
  this.bar = 42;
}

/* const foo = new foo();
class Foo {
  constructor() {
    this.foo = 42;
  }
} */

function Bar1() {
  this.bar = 42;
}
Bar1.prototype.print = function () {
  console.log(this.bar);
}
const bar1 = new Bar1();
const barPrint = new bar1.print();

class Foo1 {
  constructor() {
    this.foo = 42;
  }
  print() {
    console.log(this.foo);
  }
}
const foo1 = new Foo1();
const fooPrint = new foo1.print(); //foo1.print is not a constructor