/* 
深入理解运用apply、call
下面就借用一道面试题，来更深入的去理解下 apply 和 call 。
*/

//常见的解决方法
function log(msg) {
  console.log(msg);
}
log(1); //1
log(1, 2); //1

/* ...展开运算符 */
function log2() {
  console.log(...arguments);
}
log2(1); //1
log2(1, 2); //1,2

/* apply,call方式 */
function log3() {
  console.log.apply(console, arguments);
}
log3(1);
log3(1, 2);