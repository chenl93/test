/* 封装队列对象 */
function Queue(){
  //属性
  this.items = [];

  //方法

  /* 将元素插入队列 */
  Queue.prototype.enqueue = function(element){
    this.items.push(element);
  }

  /* 从队列中删除前端元素 */
  Queue.prototype.dequeue = function(){
    return this.items.shift();
  }

  /* 查看前端的元素 */
  Queue.prototype.front = function(){
    return this.items[0];
  }

  /* 查看队列是否为空 */
  Queue.prototype.isEmpty = function(){
    return this.items.length == 0;
  }

  /* 查看队列元素个数 */
  Queue.prototype.size = function(){
    return this.items.length;
  }

  /* toString方法 */
  Queue.prototype.toString = function(){
    var resultString = "";
    for(var i=0;i<this.items.length;i++){
      resultString += this.items[i];
    }
    return resultString;
  }
}

var queue = new Queue();

queue.enqueue("abc");
queue.enqueue("cbc");
queue.enqueue("nba");
queue.enqueue("mba");

queue.dequeue();

console.log(queue.front());
console.log(queue.isEmpty());
console.log(queue.size());