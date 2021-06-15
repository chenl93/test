/* 
给定一个列表， 该列表中的每个元素要么是个列表， 要么是整数。 将其变成一个只包含整数的简单列表。

样例
样例 1:
  输入: [
    [1, 1], 2, [1, 1]
  ]
输出: [1, 1, 2, 1, 1]

样例解释:
  将其变成一个只包含整数的简单列表。


样例 2:
  输入: [1, 2, [1, 2]]
输出: [1, 2, 1, 2]

样例解释:
  将其变成一个只包含整数的简单列表。

样例 3:
  输入: [4, [3, [2, [1]]]]
输出: [4, 3, 2, 1]

样例解释:
  将其变成一个只包含整数的简单列表。
*/
// ES6 提供的flat()方法可以将数组扁平化， 默认调用.flat()会展开一层，可以传参数展开多层
const flatten = function(arr){
  return arr.flat(4)
}
console.log(flatten([4, [3, [2, [1]]]]));

// 递归
let newArr = []
const flatten2 = function (arr) {
  for(let i=0;i<arr.length;i++){
    if (Array.isArray(arr[i])) {
      return flatten2(arr[i])
    }else{
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(flatten2([4, [3, [2, [1]]]]));

const flatten3 = function (arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten3(cur) : cur)
  }, [])
}
console.log(flatten3([4, [3, [2, [1]]]]));

//toString + split
const flatten4 = function (arr) {
  return arr.toString().split(",").map(it => Number(it))
}
console.log(flatten4([4, [3, [2, [1]]]]));

//join + split
const flatten5 = function (arr) {
  return arr.join(",").split(",").map(it => Number(it))
}
console.log(flatten5([4, [3, [2, [1]]]]));

//扩展运算符
const flatten6 = function (arr) {
  while(arr.some(it => Array.isArray(it))){
    arr = [].concat(...arr)
    console.log(arr);
  }
  return arr
}
console.log(flatten6([4, [3, [2, [1]]]]));