function Super(){
  this.color = ["red","green","blue"];
}
function Sub(){}
Super.prototype.sayName = function(){
  console.log(this.name);
}
Sub.prototype = new Super(); //继承了Super

let instance1 = new Sub();
instance1.color.push("black");
console.log(instance1.color);

let instance2 = new Sub();
console.log(instance2.color);

console.log(instance1.sayName==instance2.sayName); //true