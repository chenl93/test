/* 1、Object.prototype.toString.call */
const arr = ["hello", "an"];
console.log(arr.toString());
let type = Object.prototype.toString.call(arr);
console.log(type);

console.log(Object.prototype.toString.call("an"));
console.log(Object.prototype.toString.call(1));
console.log(Object.prototype.toString.call(Symbol(1)));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(function () {}));
console.log(Object.prototype.toString.call({
  name: "an"
}));

/* 2、instanceof */

/* 3、Array.isArray */