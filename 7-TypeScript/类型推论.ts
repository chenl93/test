/* 
如果没有明确指定类型，那么TypeScript会依照类型推论（Type Inference）的规则推断出一个类型

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成any类型而完全不被类型检查
*/
let myFavoriteNumber = "seven"
myFavoriteNumber = 7 //error TS2322: Type '7' is not assignable to type 'string'.