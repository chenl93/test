/* 
31. 数组划分
给出一个整数数组 nums 和一个整数 k。 划分数组（ 即移动数组 nums 中的元素）， 使得：

所有小于k的元素移到左边
所有大于等于k的元素移到右边
返回数组划分的位置， 即数组中第一个位置 i， 满足 nums[i] 大于等于 k。

样例
例1:

  输入: [], 9
输出:
  0

例2:

  输入: [3, 2, 2, 1], 2
输出: 1
解释:
  真实的数组为[1, 2, 2, 3].所以返回 1
*/

/**
 * @param nums: The integer array you should partition
 * @param k: An integer
 * @return: The index after partition
 */
const partitionArray = function (nums, k) {
  let left = []
  let right = []
  if(nums.length == 0) return 0
  for(let i=0;i<nums.length;i++){
    if (nums[i] < k) {
      left.push(nums[i])
    }else {
      right.push(nums[i])
    }
  }
  return left.length
}

console.log(partitionArray([3, 2, 2, 1], 2))