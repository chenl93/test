function Father(name){
  this.name = name;
  this.color = ["red","green","blue"];
}
Father.prototype.sayName = function(){
  console.log(this.name);
}

function Son(name,age){
  Father.call(this,name); //继承实例属性，第一次调用Father()
  this.age = age;
}

Son.prototype = new Father(); //继承父类的方法，第二次调用Father
Son.prototype.sayAge = function(){
  console.log(this.age);
}

var instance1 = new Son("locis",5);
instance1.color.push("black");
console.log(instance1.color);
instance1.sayName();
instance1.sayAge();

var instance2 = new Son("aa",10);
console.log(instance2.color);
instance2.sayName();
instance2.sayAge();