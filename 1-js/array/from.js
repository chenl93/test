/* recursiveClone() 能够对数组的深拷贝，通过判断 数组的 item 是否是一个数组，
如果是数组，就继续调用 recursiveClone() 来实现了对数组的深拷贝 */
function recursiveClone(val){
  return Array.isArray(val)?Array.from(val,recursiveClone):val;
}
const numbers = [[0,1,2],["one","two","three"]];
const numbersClone = recursiveClone(numbers);

console.log(numbersClone);
console.log(numbers[0]===numbersClone[0]);

console.log("--------------");

/* result 是一个新的数组，它的长度为3，数组的每一项都是0。
调用 Array.from() 方法，传入一个类数组对象 { length } 和 返回初始化值的 mapFunction 函数。 */
const length = 3;
const init = 0;
const result = Array.from({length},()=>init);

console.log(result);

console.log("--------------");
/* fill() 使用初始值正确填充数组。 */
const resultFill = Array(length).fill(init);
console.log(resultFill);

console.log("--------------");
/* 使用对象填充数组 */
const resultA = Array.from({length},()=>({}));
const resultB = Array(length).fill({});
console.log(resultA); //[ {}, {}, {} ]
console.log(resultB);//[ {}, {}, {} ]
console.log(resultA[0]===resultA[1]); //false
console.log(resultB[0]===resultB[1]); //true


console.log("--------------");
/* 生成数字范围 */
function range(end){
  return Array.from({length:end},(_,index)=>index);
}
console.log(range(4));

console.log("--------------");
/* 数组去重 */
function unique(array){
  return Array.from(new Set(array));
}
console.log(unique([1,1,2,2,3,3]));