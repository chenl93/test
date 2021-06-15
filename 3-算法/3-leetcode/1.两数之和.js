/* 
给定一个整数数组 nums 和一个目标值 target， 请你在该数组中找出和为目标值的那 两个 整数， 并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。 但是， 数组中同一个元素不能使用两遍。

*/
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for(let j=i+1;j<nums.length;j++){
      if (nums[i] + nums[j] == target) {
        return [i, j]
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 18))

//map
var twoSum2 = function(nums, target){
  var map = new Map();
  for(var i=0;i<nums.length;i++){
    let res = target - nums[i];
    if(map.has(res)){
      return [map.get(res), i]
    }
    map.set(nums[i],i)
  }
}
console.log(twoSum2([2, 7, 11, 15], 18))

//indexOf
var twoSum3 = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    let res = target - nums[i];
    if (nums.lastIndexOf(res) !== -1) {
      return [i, nums.lastIndexOf(res)]
    }
  }
}
console.log(twoSum3([2, 7, 11, 15], 17))

