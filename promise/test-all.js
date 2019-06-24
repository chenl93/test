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

/* Promise.all，接收一个数组参数，里面的值最终都算返回Promise对象，三个异步操作是并行执行的。等到它们都执行完成后才会进到then里面 */
Promise.all([test(), test2(), test3()]).then(function (results) {
  console.log(results); //[ 'hahaha', 'hahaha2', 'hahaha3' ]
})