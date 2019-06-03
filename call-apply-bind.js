/* 面试高频（一：call, apply, bind实现） */

//call的应用，改变了this的指向

function add(c, d) {
  return this.a + this.b + c + d;
}
const obj = {
  a: 1,
  b: 2
};

console.error(add.call(obj, 3, 4));


// 模拟call函数
/* 
  - 在要挂载的对象context上临时添加一个方法f
  - 用eval执行这个临时的方法f，并拿到执行后的结果result
  - 删除这个额外的方法f，并返回执行结果result
*/
Function.prototype.newCall = function (context) {

  // 1、判断context是否为object，如果是object就代表可能是Object或者null，如果不是就赋值一个空对象
  if (typeof context === "object") {
    context = context || window; //如果context如果是null就会赋值为window
  } else {
    context = Object.create(null);
  }


}

function add_newCall(c, d) {
  return this.a + this.b + c + d;
}
const obj_newCall = {
  a: 1,
  b: 2
};

console.error(add_newCall.newCall(obj_newCall, 3, 4));