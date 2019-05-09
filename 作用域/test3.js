/* js采用的是静态作用域（词法作用域），函数的作用域在函数定义的时候就定义了 */
var value = 1;

function foo() {
  console.log(value);
}

function bar() {
  var value = 2;
  foo();
}
bar();