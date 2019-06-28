import { resolve } from "url";

/* 
  简易版本的promise
  - 第一步：列出三大块 this.then resolve/reject fn(resolve,reject)
  - 第二步：this.then负责注册所有的函数 resolve/reject负责执行所有的函数
  - 第三步：在resolve/reject里面要加上setTimeout 防止还没有进行then注册，就直接执行了resolve
  - 第四步：resolve/reject里面要返回this 这样可以链式调用
  - 第五步：三个状态的管理 pending fulfilled rejected
*/

//***** promise的链式调用 在他很里面return一个promise 这样才能then里面加上异步函数
//加上了catch
function PromiseM(fn) {
  var value = null;
  var callbacks = [];
  var state = "pending"; //状态，为了解决在Promise异步操作成功之后调用的then注册的回调不会执行的问题
  var _this = this;

  //注册所有回调函数
  this.then = function(fulfilled, rejected) {
    //如果想链式promise，那就要在这里return一个new Promise
    return new PromiseM(function(resolv, rejec) {
      try {
        if (state == "pending") {
          callbacks.push(fulfilled);
          //实现链式调用
          return;
        }
        if (state == "fulfilled") {
          var data = fulfilled(value);
          //为了能让两个promise连接起来
          resolv(data);
          return;
        }
        if (state == "") {
        }
      } catch (e) {
        _this.catch(e);
      }
    });
  };
}
