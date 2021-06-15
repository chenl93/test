/** 
 * 类的继承
*/

class Person5{
  constructor(public name: string){

  }
  eat(){
    console.log(`${this.name} is eating`);
  }
}
// 使用extends继承Person5，继承后就拥有了所继承那个类的所有的属性和方法
class Employee extends Person5{
  code: string
  work(){

  }
}

var e1 = new Employee("jojo")
e1.eat()

var person5 = new Person5("hoho")
person5.eat()
