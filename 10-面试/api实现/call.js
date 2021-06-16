/** 
 * 改变函数的this指向
 * call使用一个指定的this值和单独给出的一个或多个参数来调用一个函数
 * js中函数的this指向它的直接调用者，通过变更调用者即完成this指向的变更
 * 函数.call
 *
 * thisArgs: 要指定的this值
 * args: 指定函数执行时的参数
 * 函数中的this指向的是调用myCall的值
 */
/* Function.prototype.myCall = function(context=window,...args){
  let func = this;
  let fn = Symbol("fn");
  context[fn]=func;

  let res = context[fn](...args);

  delete context[fn];
  return res;
}
*/
function foo() {
  console.log(this.name);
}

const obj = {
  name: "test"
}

// obj.foo = foo;
// obj.foo()  //使用obj来调用foo函数，foo中this指向obj


/* Function.prototype.myCall = function(thisArgs, ...args){
  console.log(this,"---")
  console.log(thisArgs,"===")
  thisArgs.fn = this //this为需要改变this指向的函数
  return thisArgs.fn(...args);
}

foo.myCall(obj); */

Function.prototype.myCall = function(thisArg, ...args){
  const fn = Symbol("fn");
  thisArg = thisArg || window
  thisArg[fn] = this
  const result = thisArg[fn](...args);
  delete thisArg
  return result;
}

foo.myCall(obj);