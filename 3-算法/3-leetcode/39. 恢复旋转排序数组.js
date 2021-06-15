const recoverRotatedSortedArray = function (nums) {
  // write your code here
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
  }
  return nums
}
console.log(recoverRotatedSortedArray([4, 5, 1, 2, 3]));