function Father(name) {
  this.name = name;
  this.color = ["red", "green", "blue"];
}
Father.prototype.sayName = function () {
  console.log(this.name);
}

function Son(name, age) {
  Father.call(this, name); //继承属性
  this.age = age;
}

Son.prototype = new Father(); //继承方法 (Son.prototype.constructor会被重写)
Son.prototype.constructor = Son(); //重新将Son的原型对象的constructor指向Son本身

Son.prototype.sayAge = function () {
  console.log(this.age);
}

let instance1 = new Son("chenl", 16);
instance1.sayName();
instance1.sayAge();
instance1.color.push("black");
console.log(instance1.color);

let instance2 = new Son("cl", 18);
instance2.sayName();
instance2.sayAge();
console.log(instance2.color);