/**
 * super关键字，用来调用父类的构造函数
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person6 = /** @class */ (function () {
    function Person6(name) {
        this.name = name;
    }
    Person6.prototype.eat = function () {
        console.log(this.name + " is eating");
    };
    return Person6;
}());
// 使用extends继承Person5，继承后就拥有了所继承那个类的所有的属性和方法
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    // 子类的构造函数必须要调用父类的构造函数
    function Employee2(name, code) {
        var _this = _super.call(this, name) || this;
        _this.code = code;
        return _this;
    }
    Employee2.prototype.work = function () {
        //在子类中调用父类函数使用super.
        _super.prototype.eat.call(this);
        this.doWork();
        console.log("--");
    };
    Employee2.prototype.doWork = function () {
        console.log("name: " + this.name + ", code: " + this.code + " is working");
    };
    return Employee2;
}(Person6));
var e2 = new Employee2("jojo", "170838");
e2.work();
// var person6 = new Person6("hoho")
// person6.eat()
