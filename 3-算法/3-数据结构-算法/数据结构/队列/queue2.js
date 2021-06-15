var Queue =  function (){
  var items = [];

  this.enqueue = function(element){
    items.push(element)
  }

  this.dequeue = function(){
    return items.shift()
  }
  
  this.front = function(){
    return items[0];
  }

  this.isEmpty = function(){
    return items.length === 0 ;
  }

  this.size = function(){
    return items.length;
  }
}

var q = new Queue();
console.log(q.isEmpty());
console.log(q.enqueue(2));
console.log(q.enqueue(4));
console.log(q.enqueue(7));

console.log(q.size());

console.log(q.dequeue());
console.log(q.front());
console.log(q.size());

/* 击鼓传花 循环队列 */

var names = ['a','b','c','d','e','f']; /* 玩家列表 */
var number = 3; /* 游戏规则 一次击鼓几下 */

var chuanhua = function(names,number){
  var q = new Queue();
  /* 将玩家列表添加到队列中 */
  for(var i=0;i<names.length;i++){
    q.enqueue(names[i]);
  }
  var taotai;
  while(q.size()>1){
    for(var i=0;i<number;i++){
      //先出列再入列（从队头添加到队尾）
      q.enqueue(q.dequeue());
    }
    taotai = q.dequeue();
    console.log("淘汰的玩家是"+taotai);
  }
  return q.dequeue();//返回剩下的最后一名玩家
}

chuanhua(names,number);

/* 优先队列 */