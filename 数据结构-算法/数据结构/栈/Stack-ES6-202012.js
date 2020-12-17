/* 
堆栈是元素的集合，可以在顶部添加项目
堆栈的实例：
  · 浏览器历史记录
  · 撤消操作
  · 递归以及其它
两个原则：
  · push: 将元素添加到栈的顶部
  · pop: 在栈的顶部删除元素
栈遵循 last in first out 即LIFO

# 栈是一个比较简单的数据结构，在js中可以通过数据来实现，
数组中包含的pop,push方法等可以直接使用

*/

class Stack {
  constructor(){
    this.items = []
  }

  push(ele){
    this.items.push(ele);
  }

  pop(){
    return this.items.pop()
  }

  /* 出栈但不删除 */
  peek(){
    return this.items[this.items.length - 1]
  }

  isEmpty(){
    return this.items.length == 0
  }

  size(){
    return this.items.length
  }

  clear(){
    this.items = []
  }

  print(){
    console.log(this.items.toString())
  }
}


// let stack = new Stack();
// stack.push("1")
// stack.push("2")
// stack.print()
// console.log(stack.peek());
// console.log(stack.size());
// stack.pop()
// console.log(stack.peek());
// console.log(stack.size());

/* 
将十进制数字10转换成二进制数字， 过程大致如下：
将数字除以2，取余数（向下取整）继续除以2，直到余数为0

10 / 2 = 5， 余数为0
5 / 2 = 2， 余数为1
2 / 2 = 1， 余数为0
1 / 2 = 0, 余数为1

我们将上述每一步的余数颠倒顺序排列起来， 就得到转换之后的结果： 1010。
*/
function divideBy2(num) {
  let stack = new Stack();
  let resStr = ""
  while (num > 0) {
    stack.push(num % 2)
    num = Math.floor(num / 2)
  }
  let newStack = new Stack()
  while(!stack.isEmpty()){
    resStr += stack.pop()
  }
  return resStr
}
console.log(divideBy2(10));




