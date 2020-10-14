/** 
 * super关键字，用来调用父类的构造函数
*/

class Person6{
  constructor(public name: string){

  }
  eat(){
    console.log(`${this.name} is eating`);
  }
}
// 使用extends继承Person5，继承后就拥有了所继承那个类的所有的属性和方法
class Employee2 extends Person6{

  // 子类的构造函数必须要调用父类的构造函数
  constructor(name: string, code: string){
    super(name)
    this.code = code
  }

  code: string
  work(){
    //在子类中调用父类函数使用super.
    super.eat()
    this.doWork()
    console.log("--")
  }
  
  private doWork(){
    console.log(`name: ${this.name}, code: ${this.code} is working`);
  }
}

var e2 = new Employee2("jojo", "170838")

e2.work()

// var person6 = new Person6("hoho")
// person6.eat()
