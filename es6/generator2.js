/**
 * 
 * generator: 控制函数的执行过程，手工暂停和恢复代码执行
 * 声明generator函数的方式是在函数关键字function后面加一个 * 号
 */
function* doSomething() {
  console.log("start");

  yield

  console.log("finish")
}
//直接调用方法不起作用
var test = doSomething()
//通过调用next()可以执行函数
test.next()
test.next()

console.log("==========")


function* getStockPrice(stock){
  while(true){
    yield Math.random() * 100
  }
}

var priceGenerator = getStockPrice("IBM")

var price = 100;

var limitPrice = 15;

while(price > limitPrice){
  price = priceGenerator.next().value

  console.log(`the generator return ${price}`);
}

console.log(`buying at ${price}`)