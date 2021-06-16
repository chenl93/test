var b = 10;
(function b(){
  /* 
    内部作用域， 会先去查找是已有变量b的声明， 有就直接赋值20， 确实是有的。 发现了是具名函数
    IIFE（自执行函数）无法进行赋值（内部机制，类似const定义的常量），所以无效
   */
  b = 20
  console.log(b)
})()
console.log("------------------------------");

// var a;
// if(true){
//   a=5;
//   function a(){
//     console.log("33333")
//   }
//   a=0;
//   console.log(a);
// }
// console.log(a); 

// console.log("------------------------------");

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