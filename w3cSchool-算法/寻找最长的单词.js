/** 
 * 返回提供的句子中最长的单词的长度。
 * 返回值应该是一个数字。
 * */ 

function titleCase(str) {
  var arr = str.toLowerCase().split(" ")

  //forEach中没有修改原数组
  // arr.forEach(item => {
  //   item = item[0].toUpperCase() + item.substring(1, item.length)
  // })

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length)
  }
  return arr.join(" ");
}
console.log(titleCase("I'm a little tea pot"));