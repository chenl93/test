function Super(name){
  this.color = ["red","green","blue"];
  this.name = name;
  /* sayName(){ //父类中定义的函数对子类不可见
    console.log(this.name);
  }*/
  this.sayName = function(){
    console.log(this.name);
  }
}
function Sub(name){
  Super.call(this,name); //继承了super，并向构造函数传递参数
}

let instance1 = new Sub("chenl");
instance1.color.push("black");
instance1.sayName();
console.log(instance1.color);
console.log(instance1.name);

let instance2 = new Sub("cl");
console.log(instance2.color);
console.log(instance2.name);
instance2.sayName();

console.log(instance1.sayName===instance2.sayName); //false