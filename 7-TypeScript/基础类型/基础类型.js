// Boolean
var isDone = false;
// Number
var count = 10;
// String
var nameStr = "hello";
// Symbol
// const ename: unique symbol = Symbol();
// const a = {
//   [ename]: 'funlee',
// }
// console.log(a[ename]);
// Array
var list = [1, 2, 3];
var list2 = [1, 2, 3]; //泛型语法 Array<number>
/*
  Enum: 使用枚举可以定义一些带名字的常量。使用枚举可以清晰的表达意图
或创建一级有区别的用例，TypeScript支持数字和基于字符串的枚举
*/
// 1、数字枚举: 默认情况下，NORTH 的初始值为 0，其余的成员会从 1 开始自动增长
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));
var dir = Direction.NORTH;
console.log(dir);
// 2、字符串枚举 每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化
var Direction2;
(function (Direction2) {
    Direction2["NORTH"] = "NORTH";
    Direction2["SOUTH"] = "SOUTH";
    Direction2["EAST"] = "EAST";
    Direction2["WEST"] = "WEST";
})(Direction2 || (Direction2 = {}));
console.log(Direction2[0]);
console.log(Direction2["WEST"]);
// Any类型  在TS中任何类型都可以被归为any类型
var notSure = 666;
notSure = "notSure";
notSure = false;
// Unknown类型 所有类型也都可以赋值给Unknown，但unknow只能被赋值给any和unknow
var val;
val = true;
val = 42;
val = "haha";
val = [];
val = {};
val = null;
val = new TypeError();
// val = Symbol("type")
// Tuple（元组）类型 : 在单个变量中存储不同类型的值
var tupleType;
tupleType = ["string", true];
console.log(tupleType[0]);
console.log(tupleType[1]);
