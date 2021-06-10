/* for(var i=1;i<=5;i++){
  setTimeout(function(){
    console.log(i);
  })
} */
//输出5次6，因为for循环终止时的条件是i小于等于5，当i等于6时第一次不满足条件，终止循环

/* for(var i=1;i<=5;i++){
  (function(j){
    setTimeout(function(){
      console.log(j);
    })
  })(i)
} */
//IIFE创建闭包

/* for(var i=1;i<=5;i++){
  (function(){
    var j = i;
    setTimeout(function(){
      console.log(j);
    });
  })()
} */

/* for(let i=1;i<=5;i++){
  setTimeout(() => {
    console.log(i); 
  });
} */
//let关键字会劫持每一次for循环中的迭代，重新声明变量，并将上次循环后变量的值赋值给重新创建的变量

for(var i=1;i<=5;i++){
  setTimeout(function(j){
    console.log(j);
  },0,i)
}
//给定时器传入第三个参数，作用timer函数的第一个参数