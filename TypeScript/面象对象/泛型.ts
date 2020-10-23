/** 
 * 参数化的类型，一般用来限制集合的内容
*/
class Person{
  constructor(public name: string){

  }
  eat(){
    console.log(`${this.name} is eating`);
  }
}

class Employee extends Person{
  code: string
  constructor(name: string, code: string){
    super(name)
    this.code = code
  }

  work(){
    super.eat();
    this.doWork();
  }

  private doWork(){
    console.log(`im working`);
  }
}
// <Person>泛型只允许数组中的元素是Person类
var workers: Array<Person> = []
workers[0] = new Person("cl")
//Employee类继承自Person
workers[1] = new Employee("chen", "11")
workers[2] = 2