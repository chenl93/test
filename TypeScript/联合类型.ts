/* 
联合类型（union types）表示取值可以为多种类型中的一种

联合类型使用 | 分隔每个类型。

当TypeScript不确定一个联合类型的变量到底是哪个类型的时候，
只能访问联合类型的所有类型里共有的属性或方法

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
*/
let myFavoriteNumber: string | number;
myFavoriteNumber = "seven"
myFavoriteNumber = 7
//myFavoriteNumber = true //error TS2322: Type 'true' is not assignable to type 'string | number'.

function getLength(something: string | number){
  return something.length
}