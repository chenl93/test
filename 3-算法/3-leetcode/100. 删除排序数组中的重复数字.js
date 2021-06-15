/* 
给定一个排序数组， 在原数组中“ 删除” 重复出现的数字， 使得每个元素只出现一次， 并且返回“ 新” 数组的长度。

不要使用额外的数组空间， 必须在不使用额外空间的条件下原地完成。

样例
样例 1:

  输入: []
输出: 0
样例 2:

  输入: [1, 1, 2]
输出: 2
解释: 数字只出现一次的数组为: [1, 2]
*/
function removeDuplicates(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i] == arr[j]){
        arr.splice(j, 1)
      }
    }
  }
  return arr.length
}
console.log(removeDuplicates([1, 1, 2]));