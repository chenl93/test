/* 
设计一个算法， 计算出n阶乘中尾部零的个数

样例
样例 1:
  输入: 11
输出: 2

样例解释:
  11! = 39916800, 结尾的0有2个
*/
const trailingZeros = function (n) {
  if(n == 1){
    return  1
  }
  return n * trailingZeros(n-1)
}

function fun(n){
  let temp = trailingZeros(n)
  console.log(temp, '---');
  return temp.toString().split("").filter(it => it == 0).length
}
console.log(fun(105));

console.log(trailingZeros(11));

const trailingZeros2 = function (n) {
  let temp = 1
  while(n){
    temp *= n
    n--
  }
  return temp
}
console.log(trailingZeros2(11));

const trailingZeros3 = function (n) {
  let temp = 1
  for(let i=1;i<=n;i++){
    temp *= i
  }
  return temp.toString().split("").filter(it => it == 0).length
}
console.log(trailingZeros3(11));


const trailingZeros4 = function (n) {
  let temp = fun2(n)
  return temp.toString().split("").filter(it => it == 0).length
}

function fun2(n) {
  if (n == 1) {
    return 1
  }
  return n * fun2(n - 1)
}
console.log(trailingZeros4(11));