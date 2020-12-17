/* 
从传递进来的字母序列中找到缺失的字母并返回它。

如果所有字母都在序列中， 返回 undefined。

Unicode编码
A~Z： 65~90
a~z： 97~122
0～ 9: 48～ 57
*/

function fearNotLetter(str) {
  let strArr = str.split("")
  let add = "";
  for (let i = 0; i < strArr.length; i++) {
    let test = i + 1 < strArr.length && strArr[i + 1].charCodeAt() - strArr[i].charCodeAt();
    if (i > 0 && test > 1) {
      for(let j=1;j<test;j++){
        add += String.fromCharCode(strArr[i].charCodeAt() + j)
      }
    }
  }
  return add || undefined;
}
console.log(fearNotLetter("abcf"));

function fearNotLetter2(str) {
  var sub;
  for (var index = 0; index < str.length - 1; index++) {
    sub = str.charCodeAt(index + 1) - str.charCodeAt(index);
    if (sub == 1) {
      if (index == str.length) {
        return undefined;
      }
    } else {
      return String.fromCharCode(str.charCodeAt(index) + 1);
    }
  }
}
console.log(fearNotLetter2("abcf"));