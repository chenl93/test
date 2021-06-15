console.log("=============借助call=========");

/* 
  借助call方式：虽然Child1子类可以拿到父类的属性值，
  但是问题是父类原型对象中一旦存在方法，那么子类无法继承 
*/
function Parent1(){
  this.name = "parent1";
}
Parent1.prototype.test = function(){
  console.log("111");
}

function Child1(){
  Parent1.call(this);
  this.type = "child1";
}

let child1 = new Child1();
console.log(new Child1);
//child1.test(); //child1.test is not a function [使用借助call方式无法继承父类原型对象上的方法]

console.log("=============借助原型链=========");

/* 
  借助原型链：虽然父类的方法和属性都能够访问，
  问题：两个实例使用同一个 原型对象
*/
function Parent2(){
  this.name = "parent2";
  this.play = [1,2,3];
}
function Child2(){
  this.type = "child2";
}
Parent2.prototype.test = function(){
  console.log("222");
}
Child2.prototype = new Parent2(); //如果单独使用原型链继承，父类的引用类型属性是共用的

var child2 = new Child2();
console.log(child2);
child2.test();
var child22 = new Child2();
child2.play.push(4);
child2.name="child2---";
console.log(child2.play,child22.play); //[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ] 引用类型属性
console.log(child2.name,child22.name); //基本类型属性
console.log("=============call + 原型链=========");
/* 
  call + 原型链：虽然之前的问题可以解决，但是会多调用一次Parent3的构造函数（Child3.prototype = new Parent3();）
*/
function Parent3(){
  this.name = "parent3";
  this.play = [1,2,3];
}
Parent3.prototype.test = function(){
  console.log(333);
}
function Child3(){
  Parent3.call(this);
  this.type = "child3";
}
Child3.prototype = new Parent3();
var child3 = new Child3();
var child33 = new Child3();
child3.play.push(4);
console.log(child3,child33);

console.log("============= 组合继承优化 =========");
/* 
  组合继承优化：将父类的原型对象给到子类，父类构造函数只执行一次，
  而且父类属性和方法均能访问
  问题：子类实例的构造函数是Parent4，这是不对的，应该是Child4
*/
function Parent4(){
  this.name="Parent4";
  this.play = [1,2,3];
}
function Child4(){
  Parent4.call(this);
  this.type="child4";
}
Parent4.prototype.test = function(){
  console.log(444);
}
Child4.prototype = Parent4.prototype; //这里将父类原型对象直接给到子类
var child4 = new Child4();
var child44 = new Child4();
child4.test();
child4.play.push(4);
console.log(child4,child44);
console.log(child4.__proto__); //Parent4

console.log("============= 组合继承优化2(最推荐使用) =========");
/* 
  组合继承优化2(最推荐使用)寄生组合继承
*/
function Parent5(){
  this.name = "parent5";
  this.play = [1,2,3];
}
function Child5(){
  Parent5.call(this);
  this.type="child5";
}
Parent5.prototype.test = function (){
  console.log("5555");
}
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;
var child5 = new Child5();
var child55 = new Child5();
child5.play.push(4);
child5.test();
console.log(child5.__proto__);
console.log(child5,child55);
