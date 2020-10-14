/**
 * class
 *
*/
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        console.log(this.name + ': im eating');
    };
    Person.prototype.getAge = function () {
        console.log("age: " + this.age);
    };
    Person.prototype.getPhoneNum = function () {
        console.log("phoneNum: " + this.phoneNum);
    };
    return Person;
}());
// 实例化Person类
var p1 = new Person();
p1.name = "cl";
p1.eat();
var p2 = new Person();
p2.name = "la";
p2.eat();
