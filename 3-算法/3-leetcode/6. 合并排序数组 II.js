/* 
6. 合并排序数组 II
中文English
合并两个有序升序的整数数组A和B变成一个新的数组。 新数组也要有序。

样例
样例 1:

  输入: A = [1], B = [1]
输出: [1, 1]
样例解释: 返回合并后的数组。
样例 2:

  输入: A = [1, 2, 3, 4], B = [2, 4, 5, 6]
输出: [1, 2, 2, 3, 4, 4, 5, 6]
样例解释: 返回合并后的数组。
*/
const mergeSortedArray = function (A, B) {
  let newArr = A.concat(B)
  newArr.sort((a, b) => {
    return a - b
  })
  return newArr
}
console.log(mergeSortedArray([1, 2, 3, 4], [2, 4, 5, 6]));