var scope = "global scope";

function checkscope() {
  var scope = "local scope";

  function f() {
    return scope;
  }
  return f();
}
console.log(checkscope()); //"local scope"

/* 上面的例子是个闭包，返回的是一个函数的调用，当函数调用时访问就近的scope变量 */

/* 
执行上下文栈 
ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext);
ECStack.pop();
ECStack.pop();
*/