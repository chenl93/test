/*
函数是JavaScript中的一等公民

TypeScript中 => 用来表示函数的定义
*/
//函数声明的类型定义; 输入多余的（或者少于要求的）参数，是不被允许的
function sum(x, y) {
    return x + y;
}
//sum(1, 2, 3) //Expected 2 arguments, but got 3.
/*
函数表达式
TypeScript中 => 用来表示函数的定义，左边是输入类型，需要用括号括想来，右边是输出类型
*/
var mySum = function (x, y) {
    return x + y;
};
/*
可选参数：与接口（interface）中的可选属性类似，用 ? 来表示可选的参数
可选参数后面不允许再出现必需参数
*/
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
console.log(tomcat);
var tom = buildName('Tom');
console.log(tom);
/*
参数默认值：TypeScript会将添加了默认值的参数识别为可选参数
参数设置了默认值就不会再受到【可选参数必须接在必须参数后面】的限制了
*/
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tom2 = buildName2('Tom');
console.log(tom2);
/*
剩余参数
ES6中可以使用...rest的方式获取函数中的剩余参数
其中items是一个数组，可以使用数组的类型来定义它
*/
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
function push2(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a2 = [];
push2(a2, 1, 2, 3);
