console.log("Math.ceil", Math.ceil(Math.random() * 10)); //获取1到10的随机整数，取0的概率极小
console.log("Math.floor", Math.floor(Math.random() * 10)); //可均衡获取0到9的随机整数
console.log("Math.round", Math.round(Math.random())); //可均衡0或1的随机整数（因为random()生成的是0-1的数，四舍五入后只有0或1）
console.log("Math.round", Math.round(Math.random() * 10)); //可基本均衡获取0~10的随机整数，其中获取最小值0和最大值10的几率少一半

console.log("---------------");

/* 生成[n,m]的随机整数 */
function randomNum(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1, 10);
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10);
  }
}
console.log(randomNum(5, 10));

console.log("======================");
/* 
用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
这是一道大题目，把考点拆成了4个小项；需要侯选人用递归算法实现（限制15行代码以内实现；限制时间10分钟内完成）：
a) 生成一个长度为5的空数组arr。
b) 生成一个（2－32）之间的随机整数rand。
c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
d) 最终输出一个长度为5，且内容不重复的数组arr。
*/

var arr = [];

function pushArr(min, max) {
  if (arr.length > 4) {
    return;
  }
  let randomNum = parseInt(Math.random() * (max - min + 1) + min, 10);
  if (arr.indexOf(randomNum) == -1) {
    arr.push(randomNum);
  }
  pushArr(min, max);
}
pushArr(2, 32);
console.log(arr);