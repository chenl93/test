// for循环实现数组的深拷贝
function deepClone(arr1, arr2){
  for(let i=0;i<arr1.length;i++){
    arr2[i] = arr1[i];
  }
}
var arr1 = [1, 5, 6, 7, 9];
var arr2 = [];
deepClone(arr1, arr2);
arr1[0] = 10
console.log(arr1, arr2);

// concat 方法实现数组的深拷贝
function deepClone2(arr1, arr2) {
  return arr2 = arr1.concat()
}
deepClone2(arr1, arr2);
arr1[0] = 11
console.log(arr1, arr2);

// slice 方法实现数组的深拷贝
function deepClone3(arr1, arr2) {
  return arr2 = arr1.slice(0, arr1.length - 1)
}
deepClone3(arr1, arr2);
arr1[0] = 12
console.log(arr1, arr2);

// ES6扩展运算符实现数组的深拷贝
function deepClone4(arr1, arr2) {
  return [...arr2] = arr1 
}
deepClone4(arr1, arr2);
arr1[0] = 13
console.log(arr1, arr2);

// map 会返回一个新数组
function deepClone5(arr1, arr2) {
  return arr2 = arr1.map(item => item)
}
deepClone5(arr1, arr2);
arr1[0] = 14
console.log(arr1, arr2);

/* 
concat 和 splice: 可以通过已有的数组创建新数组; 
  其中 concat 方法通过合并多个数组来形成新数组，
  而 splice 方法是截取一个数组的子集作为一个新数组
  splice 不仅可以用来删除元素， 还可以添加元素进数组
  num.splice(1, 0, 89); // 1 表示索引，0 表示不删除元素，89 表示将 89 这个元素添加进数组
*/ 
