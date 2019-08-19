/* Stack来表示栈 */
function Stack() {
  /* 数组来保存栈里的元素 */
  let items = []; 

  /* 添加一个（或几个）新元素到栈顶 */
  this.push = function (element) {
    items.push(element);
  }

  /* 移除栈顶的元素，同时返回被移除的元素 */
  this.pop = function () {
    return items.pop();
  }

  /* 查看栈顶元素 */
  this.peek = function () {
    return items[items.length - 1];
  }

  /* 检查栈是否为空 */
  this.isEmpty = function () {
    return items.length == 0;
  }

  /* 返回栈的长度 */
  this.size = function () {
    return items.length;
  }

  /* 移除栈里所有的元素 */
  this.clear = function () {
    items = [];
  }

  /* 把栈里的元素都输出到控制台 */
  this.print = function () {
    console.log(items.toString());
  }
}


function dec2bin(decNumber){
  //1、定义栈对象
  var stack = new Stack();

  //2、循环操作
  while(decNumber > 0){
    //2.1获取余数，并且放入栈中
    stack.push(decNumber % 2);

    //2.2获取整除后的计算结果，作为下一次运行的数字
    decNumber = Math.floor(decNumber / 2);
  }
  //3、从栈中取出0和1
  var binaryString ="";
  while(!stack.isEmpty()){
    binaryString += stack.pop();
  }

  return binaryString;
}

console.log(dec2bin(100));