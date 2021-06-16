function Father(name) {
  this.name = name;
}
Father.prototype.sayName = function () {
  console.log(this.name);
}

function Son(name, age) {
  Father.call(this, name); //继承属性
  this.age = age;
}

Son.prototype = new Father(); //继承方法
Son.prototype.constructor = Son;

let p = new Son();
p.name = "aaa";
p.sayName();

console.log(Son.prototype.constructor);

console.log(p.__proto__); //Son
console.log(p.__proto__.__proto__); //Father 
console.log(p.__proto__.__proto__.__proto__); //{}
console.log(p.__proto__.__proto__.__proto__.__proto__); //null