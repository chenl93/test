/* 
删除数组中的所有的假值。

在JavaScript中， 假值有false、 null、 0、 ""、
undefined 和 NaN。
*/
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  let newArr = arr.filter((item,index) =>item)
  return newArr;
}
console.log(bouncer([7, "ate", "", false, 9]));