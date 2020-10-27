/** 
 * 返回提供的句子中最长的单词的长度。
 * 返回值应该是一个数字。
 * */ 

function findLongestWord(str) {

  let arr = str.split(" ");
  let max = arr[0].length;
  arr.forEach(item => {
    if (item.length > max) {
      max = item.length
    }
  })
  return max
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
