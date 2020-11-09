/* 
 实现一个 destroyer 函数， 第一个参数是初始数组， 后跟一个或多个参数。 从初始数组中删除与这些参数具有相同值的所有元素。

*/

function destroyer(arr) {
  // Remove all the values
  for (let i = 1; i < arguments.length; i++) {
    // i=1 arr = [1, 3, 1, 3]
    // i=2 arr = [1,1]
    arr = arr.filter(item => item != arguments[i])
  }
  return arr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
