/* 
在TypeScript中，使用接口（Interfaces）来定义对象的类型

面向对象语言中，接口是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）

TypeScript中接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，
也常用于对【对象的形状（shape）】进行描述

定义的变量比接口少了一些属性是不被允许的; 多一些属性也是不允许的

赋值的时候，变量的形状（shape）必须和接口形状保持一致

*/

interface Person {
  name: string;
  age: number;
}

// 变量tom的类型是Person
let tom: Person = {
  name: 'Tom',
  age: 25, //error TS2741: Property 'age' is missing in type '{ name: string; }' but required in type'Person'.
  //gender: 'male' //Object literal may only specify known properties, and 'gender' does not exist in type 22   gender: 'male'
}

/* 
接口-可选属性
不完全匹配一个形状（shape），可以选择可选属性
可选属性的含义是该属性可以不存在
但仍然不允许添加未定义的属性
*/
interface Person2 {
  name: string;
  age?: number;
}
let tom2: Person2 = {
  name: "Tom",
  //gender: 'male' //error TS2322: Type '{ name: string; gender: string;}' is not assignable to type 'Person2'.Object literal may only specify known properties, and 'gender' does not exist in type 'Person2'.
}

/* 
任意属性

使用[propName: string]定义了任意属性取string类型的值
一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
*/
interface Person3 {
  name: string;
  age?: number;
  [propName: string]: any  //[propName: string]: string;
}

let tom3: Person3 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
}

console.log("-----------------")

/* 
只读属性，有时候我们希望对象中的一些字段只能在创建的时候被赋值，
可以使用readonly定义只读属性
*/
interface Person4{
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}
let tom4: Person4 = {
  id: 89757,
  name: 'Tom',
  age: 20,
  gender: 'male'
}
tom4.id = 9527
console.log(tom4.id)