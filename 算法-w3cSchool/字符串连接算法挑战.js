/* 
将字符串转换为 spinal
case。 Spinal
case 是 all - lowercase - words - joined - by - dashes 这种形式的， 也就是以连字符连接所有小写单词。
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var array = str.split(" ");
  if (array.length <= 1) {
    array = str.split("_");
  }
  if (array.length <= 1) {
    return str.replace(/([A-Z])/g, "-$1").toLowerCase();
  }
  str = array[0].toLowerCase();
  for (var i = 1; i < array.length; i++) {
    str = str.concat('-').concat(array[i].toLowerCase());
  }
  return str;
}

spinalCase('thisIsSpinalTap');