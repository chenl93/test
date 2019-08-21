/* setTimeout */
console.log("script start"); //1. 打印 script start
setTimeout(function () {
  console.log("settimeout"); // 4. 打印 settimeout
}); // 2. 调用 setTimeout 函数，并定义其完成后执行的回调函数
console.log("script end"); //3. 打印 script start

console.log("===========");

/* Promise */
/* 整段代码作为宏任务进入主线程 */
console.log("script start");
/* 遇到了Promise，new Promise立即执行，then函数分发到微任务Event Queue */
let promise1 = new Promise(function (resolve) {
  /* 遇到console.log()，立即执行 */
  console.log("promise1");
  resolve();
  console.log("promise end");
}).then(function () {
  /* 第一个宏任务执行结束，看看有什么微任务，发现有then，执行 */
  console.log("promise2");
});
/* 遇到settimeout，将其回调函数注册后分发到宏任务Event Queue。 */
setTimeout(function () {
  /* 第二轮循环，发现宏任务settimeout的回调函数，执行。 */
  console.log("settimeout");
})
console.log("script end");

/* async/await */
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}

console.log("script start async");
async1();
console.log("script end async");