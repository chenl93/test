/* 
类型断言，可以用来手动指定一个值的类型
语法: 值 as 类型  或 <类型>值
用途：
  - 将一个联合类型断言为其中一个类型
*/
interface Cat{
  name: string
  run(): void
}
interface Fish{
  name: string
  swim(): void
}

function getName(animal: Cat | Fish) {
  return animal.name
}

function isFish(animal: Cat | Fish) {
  //if (typeof animal.swim === "function") { //Property 'swim' does not exist on type 'Cat | Fish'. Property 'swim' does not exist on type 'Cat'.

  //使用类型断言，将animal断言成Fish
  if(typeof (animal as Fish).swim === "function"){
    return true;
  }
  return false;
}