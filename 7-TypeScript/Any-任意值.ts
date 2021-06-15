/* 
任意值（Any）用来表示允许赋值为任何类型

如果是一个普通类型，在赋值过程中改变类型是不被允许的,
如果是any类型，则允许被赋值为任意类型

声明变量时未指定类型并且直接未赋值的情况下，会被识别为任意类型
*/
let myFavoriteNumber: string = "seven";
//myFavoriteNumber = 7; //error TS2322: Type '7' is not assignable to type 'string'.

let myFavoriteNumber2: any = "seven"
myFavoriteNumber2 = 7;

let something; //会被识别为any类型
something = "seven";
something = 7;
