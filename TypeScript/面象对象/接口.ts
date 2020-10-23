/**  
 * 接口：用来建立某种代码约定，使得其它开发者在调用某个方法
 * 或创建新新的类时必须遵循接口所定义的代码约定
 * 
 * 两个关键字： Interface(声明接口) implement（实现接口）
*/

// 第一个用法,用接口声明属性，当方法调用时会检查参数是否符合接口声明的所有属性
interface IPerson {
  name: string,
  age: number
}

class Person2{
  constructor(public config: IPerson){

  }
}

var p1 = new Person2({name: 'cl', age:10})

// 第二个用法，用接口声明方法,所有声明实现这个接口的类必须实现接口中声明的方法
interface Animal{
  eat()
}
class Sheep implements Animal{
  eat(){
    console.log(`i eat grass`);
  }
}
class Tiger implements Animal{
  eat(){
    console.log(`i eat meat`);
  }
}