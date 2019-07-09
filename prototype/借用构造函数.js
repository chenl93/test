/* 借用构造函数继承 */
// 超类构造函数 
function Father(){
  this.color = ["red","blue","green"];
}
// 子类构造函数
function Son(){
  //在子类的构造函数中调用超类的构造函数
  Father.call(this);
}

var instance1 = new Son();
instance1.color.push("yellow");
console.log(instance1.color);

var instance2 = new Son();
console.log(instance2.color);