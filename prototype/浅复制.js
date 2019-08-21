function object(o){
  function F(){}; //先创建一个临时性构造函数
  F.prototype = o; //然后将传入的对象作为这个构造函数的原型
  return new F(); //最后返回了这个临时类型的新实例
}
/* 从本质上讲，object()对传入其中的o对象执行了一次浅复制 */


/* 
浅复制

*/
let person = {
  friends:["van","louis","nick"]
}

let antherPerson = object(person);
antherPerson.friends.push("rob");

let yetAntherPerson = object(person);
yetAntherPerson.friends.push("style");

console.log(person.friends);