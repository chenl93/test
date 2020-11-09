/* 
编写一个函数, 把一个数组arr按照指定的数组大小size分割成若干个数组块。
*/
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0, howMany)
  return arr
}
console.log(slasher([1, 2, 3], 0));

function slasher2(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany)
}
console.log(slasher2([1, 2, 3], 2));