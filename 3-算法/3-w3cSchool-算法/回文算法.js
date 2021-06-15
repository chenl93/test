/**
 * 回文算法:
 * 回文指从左往右和从由往左读到相同内容的文字。 比如: aba， abba， level。
 * 回文具有对称性。
 * 回文算法的目标是把最长的回文从任意长度的文本当中寻找出来。 比如： 从123levelabc中寻找出level。
*/
// function palindrome(str) {
//   var str1 = str.toLowerCase().replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\,|\.|\<|\>|\/|\?]/g, "")
//   var str2 = str1.split("").reverse().join("")

//   return str1 == str2;
// }
// console.log(palindrome("eye"));


function palindrome(str) {
  // 在这行下面添加代码
  str = str.toLowerCase().replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\,|\.|\<|\>|\/|\?]/g, "")
  let newStr = str.split("").reverse().join("")
  return str == newStr;
}

console.log(palindrome("eye"));
