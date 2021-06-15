/* 
9. Fizz Buzz 问题
中文English
给你一个整数n.从 1 到 n 按照下面的规则打印每个数：

如果这个数被3整除， 打印fizz.
如果这个数被5整除， 打印buzz.
如果这个数能同时被3和5整除， 打印fizz buzz.
如果这个数既不能被 3 整除也不能被 5 整除， 打印数字本身。
样例
比如 n = 15, 返回一个字符串数组：

[
  "1", "2", "fizz",
  "4", "buzz", "fizz",
  "7", "8", "fizz",
  "buzz", "11", "fizz",
  "13", "14", "fizz buzz"
]
挑战
你是否可以只用一个
if 来实现

*/
/**
 * @param n: An integer
 * @return: A list of strings.
 */
const fizzBuzz = function (n) {
  let arr = []
  for(let i=1;i<=n;i++){
    (i % 3 == 0 && i % 5 == 0) ? arr.push("fizz buzz"): i % 3 == 0 ? arr.push("fizz") : i % 5 == 0 ? arr.push("buzz") : arr.push(i+"")
  }
  return arr
}

console.log(fizzBuzz(15));