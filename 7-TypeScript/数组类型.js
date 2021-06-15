/*
最简单的方法是使用[类型 + 方括号]来表示数组
数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
*/
var fibonacci = [1, 1, 2, 3, 5];
//let fibonacci2: number[] = [1, '1', 2, 3, 5] //Type 'string' is not assignable to type 'number'.
fibonacci.push('8');
