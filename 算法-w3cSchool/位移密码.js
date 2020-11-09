/* 
下面我们来介绍著名的凯撒密码Caesar cipher， 又叫移位密码。

移位密码也就是密码中的字母会按照指定的数量来做移位。

一个常见的案例就是ROT13密码， 字母会移位13个位置。 由 'A'↔
'N', 'B'↔
'O'，
以此类推。

写一个ROT13函数， 实现输入加密字符串， 输出解密字符串。

所有的字母都是大写， 不要转化任何非字母形式的字符(例如： 空格， 标点符号)， 遇到这些特殊字符， 就跳过它们。
*/

function rot13(str) { // LBH QVQ VG!
  //Unicode 65~90 A~Z 大写英文字母
  let arr = str.split("")
  let newArr = arr.map((item)=>{
    if (item.charCodeAt() >= 65 && item.charCodeAt() < 78) {
      return String.fromCharCode(item.charCodeAt() + 13)
    } else if (item.charCodeAt() >= 78 && item.charCodeAt() <= 90) {
      return String.fromCharCode(item.charCodeAt() - 13)
    }else{
      return item
    }
  })

  return newArr.join("");
}
// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
