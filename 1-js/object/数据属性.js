var person = {
  name: "mack",
  cell: "1234"
}
/* 
  Object.getOwnPropertyDescriptor()方法可以获取指定属性的描述
  因为这里没有对name属性的特性进行特殊的修改，所以打印出来的是其默认值
*/
console.log(Object.getOwnPropertyDescriptor(person, "name"));

// 测试writable特性
person.name = "modifyValue";
console.log("writable=true: " + person.name);

//测试enumerable特性
for (var prop in person) {
  console.log("enumerable=true: " + prop);
}

//测试configurable特性
delete person.name;
console.log("delete后：" + person.name);

Object.defineProperty(person, "name", {
  writable: false,
  value: "lulu",
  configurable: false,
  enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(person, "name"));

//执行到这里会报错，原因是configurable设置为false后，后面就不能再对该属性的这4个特性进行修改了
Object.defineProperty(person, "name", {
  configurable: true
})

//person.name = "lucy"; 由于writable为false，代码执行到这会报错

//delete person.name; //由于configurable为false，代码执行到这会报错

//enmuerable为false的属性，不能通过for-in循环返回属性，这里只能返回属性cell
for (var prop in person) {
  console.log(prop);
}