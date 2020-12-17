/* 
比较两个字符串A和B， 确定A中是否包含B中所有的字符。 字符串A和B中的字符都是 大写字母

在 A 中出现的 B 字符串里的字符不需要连续或者有序。

样例
给出 A = "ABCD"
B = "ACD"，
返回 true

给出 A = "ABCD"
B = "AABC"，
返回 false
*/
/**
 * @param A: A string
 * @param B: A string
 * @return: if string A contains all of the characters in B return true else return false
 */
const compareStrings = function (A, B) {
  let aArr = A.split('')
  let aMap = new Map()
  let bArr = B.split('')
  let bMap = new Map()
  let flag = true
  if (!A && !B) return true
  if(!A) return false
  aArr.forEach((it, i)=>{
    let iLen = aArr.filter(item => item == it).length
    aMap.set(it, iLen)
  })
  bArr.forEach((it, i) => {
    let iLen = bArr.filter(item => item == it).length
    bMap.set(it, iLen)
  })
  bMap.forEach((value, key) => {
    if (!aMap.has(key) || value > aMap.get(key)) {
      flag = false
    }
  })
    
  return flag
  
}
console.log(compareStrings('ABC', 'A'));
//console.log(compareStrings('ABCD', 'AABC'));
