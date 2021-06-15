"use strict";
/**
 * destructuring析构表达式
 * 通过表达式将对象或数组拆解成任意数量的变量
*/
exports.__esModule = true;
function getStock() {
    return {
        code: 'IBM',
        price: 100,
        priceObj: {
            price1: 100,
            price2: 200
        }
    };
}
var stock = getStock();
// var code = stock.code;
// var price = stock.price;
var _a = getStock(), code = _a.code, price = _a.price;
console.log(code);
console.log(price);
//起别名
var _b = getStock(), codex = _b.code, price = _b.price;
console.log(codex);
// 解析对象中的某个属性
var _c = getStock(), codex = _c.code, price2 = _c.priceObj.price2;
console.log(price2);
//对象的析构表达式使用{}, 数组的析构表达式使用[]
// 数组的析构表达式
var arr = [1, 2, 3, 4];
var num1 = arr[0], num2 = arr[1];
console.log(num1, "--", num2);
// 获取数组中的第三四个元素，前面的位置用 , 指定/占位
var num3 = arr[2], num4 = arr[3];
console.log(num3, "--", num4);
// 3,4被放到others数组里面
var num1 = arr[0], num2 = arr[1], others = arr.slice(2);
console.log(num1, "--", num2);
console.log(others);
console.log("-------------");
function doSomething(_a) {
    var num1 = _a[0], num2 = _a[1], others = _a.slice(2);
    console.log(num1, "--", num2);
    console.log(others);
}
doSomething(arr);
