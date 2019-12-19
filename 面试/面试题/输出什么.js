var a;
if(true){
  a=5;
  function a(){
    console.log("33333")
  }
  a=0;
  console.log(a);
}
console.log(a); 

console.log("------------------------------");

/* 
变量声明比函数声明更优先
函数赋值比变量赋值优先
*/

/* 
if条件语句中的function会被编译成函数表达式，声明会被提升到当前作用域的最顶部,
但赋值会被留在原地
*/

/* //t(); // t is not a function
//console.log(t); //undefined
var t;
if(true){
  function t(){
    console.log("`````");
  } 
} */
/* var m;
console.log(m,"---"); //undefined
console.log(n,"==="); //n is not defined
*/


/* var b = 1;
function b(){
  console.log("----");
}
///b(); //b is not a function
console.log(b); */

/* var a = 1;
function b(){
  a = 10;
  return;
  function a(){
    console.log(a);
  }
}
b();
console.log(a); */