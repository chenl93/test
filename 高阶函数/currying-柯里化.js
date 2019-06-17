/* 普通函数 */
function add(x, y) {
  return x + y;
}

/* 
  Currying（柯里化）后 
  实际上就是把add函数的x,y两个参数变成了先用一个函数接收x然后返回一个函数去处理y参数
  现在思路应该比较清晰了，就是只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数
*/
function curryingAdd(x) {
  return function (y) {
    return x + y;
  }
}

console.log(add(1, 2));
console.log(curryingAdd(1)(2));