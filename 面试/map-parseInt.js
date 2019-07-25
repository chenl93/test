let arr = ['1', '2', '3'].map(parseInt);
console.log(arr) // 1,NaN,NaN、

var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

/* 求数组中每个元素的平方根 */
var numbers = [1, 4, 9];
var res = numbers.map(Math.sqrt);
console.log(res);

/* 如何去遍历用 querySelectorAll 得到的动态对象集合[NodeList对象]。在这里，我们获得了文档里所有选中的选项，并将其打印 */
/* var elems = document.querySelectorAll("select option:checked");
var values = Array.prototype.map.call(elems, function (obj) {
  return obj.value;
}) */


let arr2 = ['1', '2', '3'].map(parseInt);
console.log(arr2); //[ 1, NaN, NaN ]
/* 实际执行的代码 */
arr.map((item, index) => {
  return parseInt(item, index);
})
/* 
  即返回的值分别为： 
    parseInt('1', 0) // 1
    parseInt('2', 1) // NaN
    parseInt('3', 2) // NaN, 3 不是二进制
*/