/* 
 * instanceof的实现代码 
 * L:表示左表达式
 * R:表示右表达式
 */
function instance_of(L, R) {
  var O = R.prototype; //取R的显示原型
  L = L.__proto__; //取L的隐式原型
  while (true) {
    //已经找到栈顶
    if (L === null) {
      return false;
    }
    // 当O严格等于L时，返回true
    if (O === L) {
      return true;
    }
    // 继续向上一层原型链查找
    L = L.__proto__;
  }
}