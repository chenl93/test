var foo = function () {
  console.log("foo1");
}

foo();

var foo = function () {
  console.log("foo2");
}

foo();

/* 
  顺序执行，变量提升，变量提升只是把声明变量的部分进行提升，而不包含赋值的部分
*/