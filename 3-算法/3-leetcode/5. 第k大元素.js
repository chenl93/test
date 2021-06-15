/* 
5. 第k大元素
中文English
在数组中找到第 k 大的元素。

样例
样例 1：

输入：
n = 1, nums = [1, 3, 4, 2]
输出：
4
样例 2：

输入：
n = 3, nums = [9, 3, 2, 4, 8]
输出：
4
*/
const kthLargestElement = function (n, nums) {
  // write your code here
  nums.sort((a, b) => b - a)
  return nums[n-1]
}
console.log(kthLargestElement(3, [9, 3, 2, 4, 8]));
