/** 
 * 箭头表达式，用来声明匿名函数，消除传统匿名函数的this指向问题
*/

var sum = (arg1, arg2) => arg1+arg2

var arr = [1, 2, 3, 4, 5]

console.log(arr.filter(val => val % 2 == 0))


function getStock(name: string){
  this.name = name
  setInterval(function(){
    console.log("name is :" + this.name)
  }, 2000)
}

var scotk = new getStock("IBM")

function getStock2(name: string){
  this.name = name
  setInterval(() => {
    console.log("name is :" + this.name)
  }, 2000)
}

var scotk = new getStock2("IBM")
