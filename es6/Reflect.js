/* 
Reflect是ES6为了操作对象而提供的新API

Reflect的目的：
  - 简化Object对象
  - 改变Object静态方法的行为 （之前Object的静态方法的行为不是很统一，有的有返回值，有的没有，有的返回对象实例，而有的又返回布尔值，很不规范）
    Object.setPrototypeOf(a, Array.prototype) //Array {}
    Reflect.setPrototypeOf(a, Object.prototype) //true
  - 让Object操作都变成函数式操作；Reflect对象的方法都是函数式操作，即接受参数并有返回值

  静态方法：Reflect大部分与Object对象的同名方法的作用都是相同的，而且它与Proxy对象的方法
  都是一一对应的。以下是常见几个方法
*/

//get(target, name, recevier)
var myObject = {
  foo: 1,
  bar: 2,
  get baz(){
    return this.foo + this.bar
  }
}

console.log(Reflect.get(myObject, 'foo'))
console.log(Reflect.get(myObject, 'bar'))
console.log(Reflect.get(myObject, 'baz'))

console.log("----------")

//set(target, name, value, receiver)
var myObject2 = {
  foo: 4,
  set bar(value){
    return this.foo = value;
  }
}
var myReceiverObject = {
  foo: 0
}
Reflect.set(myObject, 'bar', 1, myReceiverObject)
console.log(myObject.foo)
console.log(myReceiverObject.foo)

console.log("------------")

//has(obj, name)
var myObject3 = {
  foo: 1
}
//Object旧写法
console.log('foo' in myObject3)

//Reflect新写法
console.log(Reflect.has(myObject, 'foo'))

console.log("------------")

//defineProperty(target, name, attriDescObj)

function MyDate() {

}

//Object旧写法
Object.defineProperty(MyDate, "now", {
  value: () => Date.now()
})
console.log(MyDate.now)
//Reflect新写法