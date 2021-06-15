// 确认末尾字符


function confirmEnding(str, target) {
  return str.substring(str.length - target.length) == target;
}

console.log(confirmEnding("Bastian", "n"));

//es5增加endsWith()方法
function confirmEnding2(str, target) {
  return str.endsWith(target);
}

console.log(confirmEnding2("Bastian", "n"));