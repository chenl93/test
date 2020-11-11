/* 
使用给定的参数对字符串执行一次查找和替换， 然后返回新字符串。

第一个参数是将要对其执行查找和替换的字符串。

第二个参数是将被替换掉的单词（ 替换前的单词）。

第三个参数用于替换第二个参数（ 替换后的单词）。

注意： 替换时保持原单词的大小写。 例如， 如果你想用单词 "dog"
替换单词 "Book"，
你应该替换成 "Dog"。
*/

function myReplace(str, before, after) {

  var initials = before.charAt(0)
  if(initials >= 'A' && initials <= 'Z'){
    after = after.replace(after.charAt(0), after.charAt(0).toUpperCase())
  }

  str = str.replace(before, after)

  return str;
}
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
