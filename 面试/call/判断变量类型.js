/* 对于对象型的数据类型，我们可以借助call来得知他的具体类型，例如数组 */

console.log(Object.prototype.toString.call([]));

function isArray(obj) {
  return Object.prototype.toString.call(obj) == "[object Array]";
}
console.log(isArray([]));
console.log(isArray("111"));