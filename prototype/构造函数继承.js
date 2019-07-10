function Super(name){
  this.color = ["red","green","blue"];
  this.name = name;
}
function Sub(name){
  Super.call(this,name); //继承了super，并向构造函数传递参数
}

let instance1 = new Sub("chenl");
instance1.color.push("black");
console.log(instance1.color);
console.log(instance1.name);

let instance2 = new Sub("cl");
console.log(instance2.color);
console.log(instance2.name);
