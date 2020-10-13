/**
 * 
 * generator: 控制函数的执行过程，手工暂停和恢复代码执行
 * 声明generator函数的方式是在函数关键字function后面加一个 * 号
*/
function* doSomething() {
  console.log("start");

  yield

  console.log("finish")
}

doSomething()