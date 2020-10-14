/** 
 * class
 * 
*/

class Person{
  /** 
   * 类的访问控制符：
   *  - public 不加访问控制符默认为public
   * - privete 
   * - protected
  */
  // 默认是public
  name;
  eat(){
    console.log(this.name + ': im eating');
  }
  // private 只有在类的内部才可以被使用
  private age;
  private getAge(){
    console.log(`age: ${this.age}`);
  }

  //protected 受保护的，只能是类的内部或子类中访问
  protected phoneNum;
  protected getPhoneNum(){
    console.log(`phoneNum: ${this.phoneNum}`);
  }

}

// 实例化Person类
var p1 = new Person()
p1.name = "cl"
p1.eat()

var p2 = new Person()
p2.name = "la"
p2.eat()