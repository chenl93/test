/* 
将字符串中的字符 & 、 < 、 > 、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
*/

function convert(str) {
  // &colon;&rpar;
  let map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  for (var key in map) {
    str = str.replace(new RegExp(key, "g"), map[key]);
  }
  return str;
}
console.log(convert("Dolce & Gabbana"));