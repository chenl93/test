/* 
  语法： Array.from(arrayLike[, mapFunction[, thisArg]])
    * arrayLike: 必传参数，想要转换成数组的伪数组对象或可迭代对象
    * mapFunction: 可选参数，mapFunction(item, index){...}是在集合中的每个项目上调用的函数。
      返回值将插入到新集合中
    * thiaArg：可选参数，执行回调函数mapFunction时this对象
*/

console.log(Array.from('Hey'));
console.log(Array.from(new Set(['one', 'two'])));
const map = new Map()
map.set('one', 1)
map.set('two', 2)
console.log(Array.from(map))

// 将类数组中的每一项乘以2
const someNumbers = {
  '0': 10,
  '1': 15,
  length: 2
};
console.log(Array.from(someNumbers, value => value * 2))

// 将类数组转换为数组（类数组： arguments, dom集合）
function sumArguments(){
  return Array.from(arguments).reduce((pre,cur) => pre + cur)
}
console.log(sumArguments(1, 2, 3));

// 克隆一个数组， Array.from()可以很容易的实现数组的浅拷贝
const numbers = [3, 6, 9]
const numbersCopy = Array.from(numbers)
numbers.push(12)
console.log(`numbers: ${numbers}`);
console.log(`numbersCopy: ${numbers}`);
console.log(numbers === numbersCopy)

// 数组深拷贝
const numbers2 = [
  [0, 1, 2],
  ['one', 'two', 'three']
];
function recursiveClone(val){
  return Array.isArray(val) ? Array.from(val, recursiveClone) : val
}
let numbersClone2 = recursiveClone(numbers2)
numbers2.push([3])
console.log('numbers2', numbers2);
console.log('numbersClone2', numbersClone2);
console.log(numbers2 === numbersClone2);

// 使用值填充数组，如果需要使用相同的值来初始化数组，那么Array.from是不错的选择
const length = 3
const init = 0
const result = Array.from({length}, () => init)
console.log(result);
// Array.fill()填充数组
const result2 = Array(length).fill(init)
console.log(result2);




// 使用对象填充数组
const length2 = 3;
const result22 = Array.from({length}, () => ({}))
const result23 = Array(length).fill({})
console.log(result22);
console.log(result23);

console.log(`-----------------`);

// array.map: Array(length)创建了一个有3个空项的数组（也称为稀疏数组），但是map（）方法会跳过空项
const result34 = Array(length2).map(() => init)
console.log(result34);

// 生成数字范围
function range(end){
  
}
