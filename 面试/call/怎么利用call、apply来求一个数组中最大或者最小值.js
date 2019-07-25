/* 怎么利用call、apply来求一个数组中最大或者最小值 */

var arr = [23, 43, 12312, 1212];

console.log(Math.max.call(...arr));
console.log(Math.max.call(Math, ...arr));
console.log(Math.max.apply(Math, arr));

console.log(Math.min.call(...arr));
console.log(Math.min.call(Math, ...arr));
console.log(Math.min.apply(Math, arr));