/*
在TypeScript中，使用接口（Interfaces）来定义对象的类型

面向对象语言中，接口是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）

TypeScript中接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，
也常用于对【对象的形状（shape）】进行描述

定义的变量比接口少了一些属性是不被允许的; 多一些属性也是不允许的

赋值的时候，变量的形状（shape）必须和接口形状保持一致

*/
// 变量tom的类型是Person
var tom = {
    name: 'Tom',
    age: 25
};
var tom2 = {
    name: "Tom"
};
var tom3 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
console.log("-----------------");
var tom4 = {
    id: 89757,
    name: 'Tom',
    age: 20,
    gender: 'male'
};
tom4.id = 9527;
console.log(tom4.id);
