/* 数组扁平化:多维数组=>一维数组 */

let arr = [1,[2,[3,[4,[5]]]],6]; //->[1,2,3,4,5,6]
let str = JSON.stringify(arr);
console.log(str)

/* 
ES6中的flat方法 
参数depth： 指定列展開的深度。 預設為1。
Infinity：是无限，不管多少层嵌套都会展开
*/

console.log(arr.flat(Infinity));

/* replace + split */
console.log(str.replace(/(\[|\])/g, '').split(","));

/* replace + JSON.parse */
let str1 = str.replace(/(\[|\])/g, '');
str1 = "[" + str1 +"]";
console.log(JSON.parse(str1));

/* 普通递归 */
let newArr = [];
let fn = function(arr){
  arr.forEach(item=>{
    if(Array.isArray(item)){
      fn(item)
    }else{
      newArr.push(item);
    }
  })
  return newArr;
}
console.log(fn(arr));

/* reduce函数迭代 */
function flatten(arr){
  return arr.reduce((pre,cur)=>{
    return pre.concat(Array.isArray(cur)?flatten(cur):cur);
  },[])
}
console.log(flatten(arr));

/* 扩展运算符 */
while(arr.some(Array.isArray)){
  arr = [].concat(...arr);
}
console.log(arr,"----");
console.log([...arr]);