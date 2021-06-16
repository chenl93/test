/** 
 * bind方法与call和apply方法的区别是，bind方法返回的是一个函数，返回的函数可以接收参数
 * 
 * bind方法实现的三个重点：
 *  1、bind方法除了this还接收其他参数，bind()返回的函数也接收参数，这两部分的参数都要返回的函数
 *  2、new操作符会改变this指向：如果bind绑定后的函数被new了，那么this指向会发生改变，指向当前函数的实例
 *  3、没有保留原函数在原型链上的属性和方法
 * */  
Function.prototype.myBind = function(thisArg, ...args) {
  var self = this;

  //new优先级
  var fbound = function() {
    self.apply(this instanceof self ? this : thisArg, args.concat(Array.prototype.slice.call(arguments)))
  }

  //继承原型上的属性和方法
  fbound.prototype = Object.create(self.prototype)

  return fbound
}

let obj = {
  name: "test"
}
function foo() {
  console.log(this.name)
  console.log(arguments, "-----")
}
foo.myBind(obj, "a", "b", "c")();