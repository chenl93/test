/** 
 * destructuring析构表达式
 * 通过表达式将对象或数组拆解成任意数量的变量
*/

import { cachedDataVersionTag } from "v8";

function getStock() {
  return {
    code: 'IBM',
    price: 100,
    priceObj: {
      price1: 100,
      price2: 200
    }
  }
}

var stock = getStock();
// var code = stock.code;
// var price = stock.price;

var {code, price} = getStock()
console.log(code)
console.log(price)

//起别名
var {code: codex, price} = getStock()
console.log(codex)

// 解析对象中的某个属性
var {code: codex, priceObj: {price2}} = getStock()
console.log(price2)

//对象的析构表达式使用{}, 数组的析构表达式使用[]
// 数组的析构表达式
var arr = [1, 2, 3, 4]
var [num1, num2] = arr
console.log(num1,"--" ,num2)

// 获取数组中的第三四个元素，前面的位置用 , 指定/占位
var [, , num3, num4] = arr
console.log(num3,"--" ,num4)

// 3,4被放到others数组里面
var [num1, num2, ...others] = arr
console.log(num1,"--" ,num2)
console.log(others)

console.log("-------------")

function doSomething([num1, num2, ...others]){
  console.log(num1,"--" ,num2)
  console.log(others)
}
doSomething(arr)