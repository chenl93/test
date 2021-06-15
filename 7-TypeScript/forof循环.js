/**
 * for of 循环
 */
var arr = [1, 2, 3, 4];
//在ts中不可以给数组加属性
arr.desc = "four number";
//forEach方法里面不能使用break
arr.forEach(function (val) { return console.log(val); });
console.log('-------------');
//for in 循环的是对象的里属性名称，这里打印的是数组里的值和desc属性
for (var n in arr) {
    console.log(n);
}
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    if (i > 2)
        break;
    console.log(i);
}
