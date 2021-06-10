function foo() {
  console.log("foo1");
}

foo(); //foo2

function foo() {
  console.log("foo2");
}

foo(); //foo2

/* 函数提升，函数提升的优先级要比变量提升的优先级高，函数的提升会覆盖掉前面的函数声明 */