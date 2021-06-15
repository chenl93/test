/* ES5的新特性，可以为对象设置一个getter和一个setter */
var dreamapple = {
  firstName: 'dream',
  lastName: 'apple',
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(fullName) {
    var names = fullName.trim().split(' ');
    if (2 === names.length) {
      this.firstName = names[0];
      this.lastName = names[1];
    }
  }
}

dreamapple.firstName = "Dream";
dreamapple.lastName = "Apple";
console.log(dreamapple.fullName); //getter

dreamapple.fullName = "Jams King"; //setter
console.log(dreamapple.firstName);
console.log(dreamapple.lastName);

console.log("=================");

function foo() {}

Object.defineProperty(foo.prototype, "z", {
  get: function () {
    return 1;
  }
})
let obj = new foo();
console.log(obj.z);
obj.z = 10;
console.log(obj.z);
/* 如果在创建当前对象上定义z属性，并且设置writable和configurable为true，那么就可以改变z属性的值 ，并且删除z属性后再访问obj.z仍然是1*/

Object.defineProperty(obj, "z", {
  value: 100,
  writable: true,
  configurable: true
})
console.log(obj.z);
obj.z = 300;
console.log(obj.z);
delete obj.z;
console.log(obj.z);