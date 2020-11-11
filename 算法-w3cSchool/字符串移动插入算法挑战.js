/* 
把指定的字符串翻译成 pig latin。

Pig Latin 把一个英文单词的第一个辅音或辅音丛（ consonant cluster） 移到词尾， 然后加上后缀 "ay"。

如果单词以元音开始， 你只需要在词尾添加 "way"
就可以了。

输入字符串保证是英文单词全部小写。
*/

function translate(str) {
  let vowel = ["a", "e", "i", "o", "u"];
  if(vowel.indexOf(str[0]) != -1){
    return str + "way";
  }
  while(vowel.indexOf(str[0]) == -1){
    str = str.substring(1) + str.substring(0, 1) 
  }
  
  return str + "ay";
}
console.log(translate("eight"));