// 复杂数据类型，比较的是引用地址
let person1 = {
  age: 25
}
let person2 = person1;
person2.age = 20;
console.log(person1 === person2); //true
console.log(person1.age);
console.log(person2.age);