/* 基于数组实现栈数据结构 */
var Stack = function(){
  var items = [];

  this.push =  function(element){
    items.push(element);
  }

  this.getItem  =  function(){
    return items;
  }

  this.pop = function(){
    return items.pop();
  }
  /* 检查栈顶元素 */
  this.peek = function(){
    return items[items.length-1];
  }

  this.isEmpty = function(){
    return items.length == 0;
  }

  this.clear = function(){
    items = [];
  }

  this.size = function(){
    return items.length;
  }
}

var stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(7);
stack.push(9);
console.log(stack.getItem());
console.log(stack.size());
console.log(stack.peek());

var divBy2 = function(number){
  var stack = new Stack();
  var yushu;

  var string2 = "";

  while(number>0){
    yushu = number % 2;
    stack.push(yushu);
    number = Math.floor(number / 2);
  }
  
  while(!stack.isEmpty()){
    string2 += stack.pop();
  }

  return string2;
}

console.log(divBy2(50));
console.log(55%2);