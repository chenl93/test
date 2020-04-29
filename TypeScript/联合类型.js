/*
联合类型（union types）表示取值可以为多种类型中的一种

联合类型使用 | 分隔每个类型。

当TypeScript不确定一个联合类型的变量到底是哪个类型的时候，
只能访问联合类型的所有类型里共有的属性或方法
*/
var myFavoriteNumber;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;
//myFavoriteNumber = true //error TS2322: Type 'true' is not assignable to type 'string | number'.
