/**
 * 箭头表达式，用来声明匿名函数，消除传统匿名函数的this指向问题
*/
var sum = function (arg1, arg2) { return arg1 + arg2; };
var arr = [1, 2, 3, 4, 5];
console.log(arr.filter(function (val) { return val % 2 == 0; }));
function getStock(name) {
    this.name = name;
    setInterval(function () {
        console.log("name is :" + this.name);
    }, 2000);
}
var scotk = new getStock("IBM");
function getStock2(name) {
    var _this = this;
    this.name = name;
    setInterval(function () {
        console.log("name is :" + _this.name);
    }, 2000);
}
var scotk = new getStock2("IBM");
