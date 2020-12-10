/* 
3. 统计数字
计算数字 k 在 0 到 n 中的出现的次数， k 可能是 0~9 的一个值。
*/
const digitCounts = function (k, n) {
  // write your code here
  let str = ""
  for(let i=0;i<=n;i++){
    str += i
  }
  return str.split("").filter(it => it == k).length
}
console.log(digitCounts(1, 12));