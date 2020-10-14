/**
 * 类的构造函数，在类被实例化的时候会被调用，而且只被调用一次
*/
var Person2 = /** @class */ (function () {
    //构造函数, 只有在实例化new的时候被调用一次，不能使用其它方式调用
    function Person2() {
        console.log('constructor');
    }
    Person2.prototype.eat = function () {
        console.log('im eating');
    };
    return Person2;
}());
var person1 = new Person2();
person1.name = "cl";
person1.eat();
//通过构造函数来建立一个约定：在实例化一个Person3的时候，必须为他指定一个名字
var Person3 = /** @class */ (function () {
    // 要求实例化对象时必须传name参数
    function Person3(name) {
        this.name = name;
    }
    Person3.prototype.eat = function () {
        console.log(this.name + " is eating");
    };
    return Person3;
}());
var person3 = new Person3("aha");
person3.eat();
console.log('==============');
//Person3的简化写法
var Person4 = /** @class */ (function () {
    function Person4(name) {
        this.name = name;
    }
    Person4.prototype.eat = function () {
        console.log(this.name + " is eating");
    };
    return Person4;
}());
var person4 = new Person4("hoho");
person4.eat();
var person44 = new Person4("houhou");
person44.eat();
