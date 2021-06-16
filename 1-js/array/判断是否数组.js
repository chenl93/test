/* 
  # 判断是否是数组的三种方式
    - Object.prototype.toString.call()
    - instanceof
    - Array.isArray()
*/
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
const arr1 = [1, 2, 3]
console.log(arr1 instanceof Array);

/* 3、Array.isArray */
console.log(Array.isArray(arr1));