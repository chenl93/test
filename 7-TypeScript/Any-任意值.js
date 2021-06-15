/*
任意值（Any）用来表示允许赋值为任何类型

如果是一个普通类型，在赋值过程中改变类型是不被允许的,
如果是any类型，则允许被赋值为任意类型
*/
var myFavoriteNumber = "seven";
//myFavoriteNumber = 7; //error TS2322: Type '7' is not assignable to type 'string'.
var myFavoriteNumber2 = "seven";
myFavoriteNumber2 = 7;
