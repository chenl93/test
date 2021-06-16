/* 题目 1 */
var A = function(){}
A.prototype.n = 1;
var b = new A();
A.prototype = {
  n:2,
  m:3
}
var c = new A();
console.log(b.n);//1
console.log(b.m);//undefined
console.log(c.n);//2
console.log(c.m);//3

console.log("-----------------------");
/* 题目 2 */
var F = function(){}
Object.prototype.a = function(){
  console.log('a');
}
Function.prototype.b = function(){
  console.log("b");
}
var f = new F();
f.a(); //a
//f.b(); // f.b is not a function

F.a(); //a
F.b(); //b

console.log("-----------------");
/* 题目 3 */
function Person(name){
  this.name = name;
}
let p = new Person("tom");
console.log(p.__proto__); //Person {} (Person.prototype)
console.log(Person.__proto__); //{ [Function] b: [Function] (Function.prototype)

console.log("-----------------");
/* 题目 4 */
var foo = {},F = function(){};
Object.prototype.a = "value a";
Function.prototype.b = "value b";
console.log(foo.a); //value a
console.log(foo.b); //undefined
console.log(F.a); //value a
console.log(F.b); //value b
