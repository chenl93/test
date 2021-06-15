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
/* 谁跑的快，以谁为准执行回调 */
Promise.race([test(), test2(), test3()]).then(function (results) {
  console.log(results);
})