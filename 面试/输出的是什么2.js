var b = 10;
(function b() {
  b = 20;
  console.log(b); //[Function: b]
  //console.log(window.b); // 10，不是20
})();
/* 函数表达式的优先级高于变量声明 */
console.log("=============");
(function b() {
  'use strict'
  //b = 20;
  console.log(b); //Assignment to constant variable.
})();
console.log("=============");
var a = 10;
(function () {
  console.log(a); //undefined
  a = 5; //局部作用fa
  //console.log(window.a); //10
  var a = 20;
  console.log(a); //20
})();
console.log("=============");
var a = {
  n: 1
};
var b = a;
a.x = a = {
  n: 2
};

console.log(a);
console.log(a.x);
console.log(b.x);

console.log("=============");
/* 
  下面3题考察的是对象的键名的转换:
    - 对象的键名只能是字符串和 Symbol 类型。 
    - 其他类型的键名会被转换成字符串类型。
    - 对象转字符串默认会调用 toString 方法。
*/

var a1 = {},
  b = "123",
  c = 123;
a1[b] = "b";
a1[c] = "c";
console.log(a1[b]); //c
console.log(a1[c]); //c

var a2 = {},
  b2 = Symbol("123"),
  c2 = Symbol("123");
a2[b2] = "b";
a2[c2] = "c";
console.log(a2[b2]); //b
console.log(a2[c2]); //c

var a3 = {},
  b3 = {
    key: "123"
  },
  c3 = {
    key: "456"
  };
a3[b3] = "b";
a3[c3] = "c";
console.log(a3[b3]); //c
console.log(a3[c3]); //c

console.log("=============");

function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com";
  o = new Object(); //形参o的指向发生改变，指向堆内存中一个新的对象
  o.siteUrl = "http://google.com";
}
let webSit = new Object();
changeObjProperty(webSit);
console.log(webSit.siteUrl);

console.log("=============");

function Foo() {
  Foo.a = function () {
    console.log(1);
  }
  this.a = function () {
    console.log(2);
  }
}
// 以上只是 Foo 的构建方法，没有产生实例，此刻也没有执行
Foo.prototype.a = function () {
  console.log(3);
}
Foo.a = function () {
  console.log(4);
}

console.log(Foo.a()); //4; 立刻执行了 Foo 上的 a 方法
let obj = new Foo();
console.log(obj.a()); //2; 因为有直接方法 a ，不需要去访问原型链，所以使用的是构建方法里所定义的 this.a，
console.log(Foo.a()); //1; 根据第2步可知 Foo 函数内部的属性方法已初始化，覆盖了同名的静态方法，所以输出：1


console.log("=============");
console.log(String("11") == new String("11")); //true 隐式转换
console.log(String("11") === new String("11")); //false

console.log("=============");

var name = "Tom";
(function () {
  if (typeof name == 'undefined') { //typeof返回值是字符串
    var name = "Jack";
    console.log("Goodbye" + name);
  } else {
    console.log("Hello" + name);
  }
})();

/* 
1、首先在进入函数作用域当中，获取name属性
2、在当前作用域没有找到name
3、通过作用域链找到最外层，得到name属性
4、执行else的内容，得到Hello Tom
*/
(function () {
  if (typeof name == 'undefined') { //typeof返回值是字符串
    name = "Jack";
    console.log("Goodbye" + name);
  } else {
    console.log("Hello" + name);
  }
})();

console.log("=============");
console.log(1 + "1");
console.log(2 * "2");
console.log([1, 2] + [2, 1]);
console.log("a" + +"b");
console.log("----------");