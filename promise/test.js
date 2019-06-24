/* 
  then接收一个函数作为参数，并且会拿到test()中调用resolve时传的参数 
  then里面的函数就跟平时的回调函数是一个意思，能够在test()这个异步任务执行完成之后被执行
  这就是Promise的作用了，简单来讲，就是能把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数
  Promise的精髓是“状态” ，用维护状态、传递状态的方式来使得回调函数能够及时调用，它比传递callback函数要简单、灵活的多
*/
function test() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      console.log("执行完成");
      resolve("hahaha");
    }, 2000);
  })
  return p;
}

function test2() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      console.log("执行完成2");
      resolve("hahaha2");
    }, 2000);
  })
  return p;
}

function test3() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      console.log("执行完成3");
      resolve("hahaha3");
    }, 2000);
  })
  return p;
}
test().then(function (data) {
  console.log(data);
})

/* 使用Promise的正确场景 (链式操作)*/
test().then(data => {
  console.log(data);
  return test2();
}).then(data => {
  console.log(data);
  return test3();
}).then(data => {
  console.log(data);
})