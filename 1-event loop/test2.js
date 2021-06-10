setTimeout(function(){
  console.log("setTimeout");
});

new Promise(function(resvole){
  console.log("promise");
  resvole();
}).then(function(){
  console.log("then");
})

console.log("console.");
/* 
1、这段代码首先进入宏任务，进入主线程
2、先遇到setTimout,将其回调函数注册后发布到宏任务Event Queue(注册过程与之前相同)
3、接下来遇到Promise，new Promise立即执行，then函数分发到微任务Event Queue
4、遇到console.log(),立即执行
5、整体代码script作为第一个宏任务执行结束，看看有哪些微任务？我们发现了then在微任务Event Queue里面执行
6、第一轮带伤循环结束了，开始第二轮循环，当然要从宏任务的Event Queue开始，
  发现宏任务Event Queue中的setTimeout对应的回调函数，立即执行
*/