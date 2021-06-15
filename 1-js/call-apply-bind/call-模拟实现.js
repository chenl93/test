/* 
  可以从以下几点来考虑实现
  1、不传入第一个参数，那么默认为window
  2、改变this指向，让新的对象可以执行该函数
  3、那么思路是否可以变成给新对象添加一个函数，然后执行过后删除
*/
Function.prototype.myCall = function(context){
  var context = context || window;
  
  //给context添加一个属性
  context.fn = this;
 
  // 将 context 后面的参数取出来
  var args = [...arguments].slice(1);

  var result = context.fn(...args);

  delete context.fn;
  return result;
}
console.log(Object.prototype.toString.myCall([]));