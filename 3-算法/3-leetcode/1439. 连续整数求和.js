/* 
给定一个正整数 N， 试求有多少组连续正整数满足所有数字之和为 N ?

  样例
样例 1:

  输入: 5
输出: 2
解释: 5 = 5 = 2 + 3， 共有两组连续整数([5], [2, 3]) 求和后为 5。
样例 2:

  输入: 9
输出: 3
解释: 9 = 9 = 4 + 5 = 2 + 3 + 4
样例 3:

  输入: 15
输出: 4
解释: 15 = 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5
*/
const consecutiveNumbersSum = function (N) {
  // Write your code here
  let res = 1
  for (let i = 1; i <= N; i++) {
    let temp = 0
    for(let j=i+1; j<=N;j++){
      if(temp == 0){
        temp = i + j
      }else{
        temp += j
      }
      if(temp == N){
        res++
      }
    }
  }
  
  return res
}
console.log(consecutiveNumbersSum(15));