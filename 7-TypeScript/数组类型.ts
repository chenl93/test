/* 
最简单的方法是使用[类型 + 方括号]来表示数组
数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
*/
let fibonacci: number[] = [1, 1, 2, 3, 5]

//let fibonacci2: number[] = [1, '1', 2, 3, 5] //Type 'string' is not assignable to type 'number'.

//fibonacci.push('8') //Argument of type '"8"' is not assignable to parameter of type 'number'.

/* 
数组泛型：Array<elemType>来表示数组
*/
let fibonacci3: Array<number> = [1, 1, 2, 3, 5]

/* 
用接口表示数组
*/
interface NumberArray {;
  [index: number]: number //只要索引的类型是数字时，那么值的类型必须是数字
}
let fibonacci4: NumberArray = [1, 1, 2, 3, 5]

/* 
常用的类数组都有自己的接口定义，如IArguments, NodeList, HTMLCollection
IArguments是TypeScript中定义好了的类型【内置对象】
*/
interface IArguments {
  [index: number]: any
  length: number
  callee: Function
}
/* 
any在数组中的应用，常用的做法是，用any表示数组中允许出现任意类型
*/
let list: any[] = ["test", 25, {website: 'www.baidu.com'}]