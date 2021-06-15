/** 
 * 类的构造函数，在类被实例化的时候会被调用，而且只被调用一次
*/
class Person2 {

  //构造函数, 只有在实例化new的时候被调用一次，不能使用其它方式调用
  constructor(){
    console.log('constructor');
  }

  name;
  eat(){
    console.log('im eating');
  }
}

var person1 = new Person2()
person1.name = "cl"
person1.eat()

//通过构造函数来建立一个约定：在实例化一个Person3的时候，必须为他指定一个名字
class Person3 {
  // 要求实例化对象时必须传name参数
  constructor(name: string){
    this.name = name;
  }
  name;
  eat(){
    console.log(`${this.name} is eating`);
  }
}
var person3 = new Person3("aha");
person3.eat()

console.log('==============');

//Person3的简化写法
class Person4{
  // 在构造函数上public name: string 相当于声明了一个name属性
  constructor(public name: string){

  }
  eat(){
    console.log(`${this.name} is eating`);
  }
}
var person4 = new Person4("hoho");
person4.eat()
var person44 = new Person4("houhou");
person44.eat()