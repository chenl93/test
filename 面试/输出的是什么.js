function checkAge(data) {
  if (data === {
      age: 18
    }) {
    console.log("You are an adult~");
  } else if (data == {
      age: 18
    }) {
    console.log("You are still an adult");
  } else {
    console.log("Hmm。。。You don't have an age I guess");
  }
}
//在比较相等性，原始类型通过它们的值进行比较，而对象通过它们的引用进行比较。
checkAge({
  data: 18
}); //Hmm。。。You don't have an age I guess
console.log("----------------------------");

function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}
const person = "Lydia";
const age = 21;


//????如果使用标记的模板字符串，则第一个参数的值始终是字符串值的数组。 其余参数获取传递到模板字符串中的表达式的值！?????
getPersonInfo `${person} is ${age} year old`;
//[ '', ' is ', ' year old' ]
//Lydia
//21
console.log("----------------------------");

function sum(a, b) {
  return a + b;
}
var sumRes = sum(1, "2") //隐式转换，数字1和字符串"2"相加时，该数字被视为字符串
console.log(sumRes, typeof sumRes);
console.log("----------------------------");

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const member = new Person("chen", "long");
Person.getFullName = () => this.firstName + this.lastName;

/* 不能使用常规对象那样向构造函数添加属性，如果要一次向所有对象添加功能，则必须通过原型 Person.prototype.getFullName */
//console.log(member.getFullName()); //member.getFullName is not a function
console.log("----------------------------");

function bark() {
  console.log("Woof");
}
bark.animal = "dog"; //函数也是对象
console.log("----------------------------");
class Chameleon {
  /* static静态 colorChange方法是静态的，静态方法仅在创建它们的构造函数中存在，并且不能传递给八条子级  */
  static colorChange(newColor) {
    this.newColor = newColor;
  }

  constructor({
    newColor = "green"
  } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({
  newColor: "purple"
});
//freddie.colorChange("orange"); //colorChange is not a function
console.log(freddie.newColor);

console.log("----------------------------");
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i, "----");
  }, 1)
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i, "====");
  }, 1)
}
console.log("----------------------------");
const shape = {
  radius: 10,
  //普通函数
  diameter() {
    return this.radius * 2;
  },
  //箭头函数：对于箭头函数，this关键字指向是它所在的上下文（定义时的位置），与普通函数不同，这意味着当调用perimeter时，它不是指向shape对象，而是指其定义时的环境（window）
  perimeter: () => {
    return 2 * Math.PI * this.radius
  }
}
console.log(shape.diameter());
console.log(shape.perimeter());


console.log("----------------------------");
/* 扩展运算符（...args）返回一个带参数的数组，数组是一个对象 */
function getAge(...args) {
  console.log(typeof args); //object
}
getAge(21);

console.log("----------------------------");
const obj = {
  1: "a",
  2: "b",
  3: "c"
};
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1"); //true
obj.hasOwnProperty(1); //true 所有对象键（不包括symbols）都会被存储为字符串，即使你没有指定字符串类型的键
set.has("1"); //false
set.has(1); //true

console.log("----------------------------");
for (let i = 1; i < 5; i++) {
  if (i === 3) continue; //如果某个条件返回true，则continue语句跳过迭代。
  console.log(i);
}

console.log("----------------------------");
const a = {};
const b = {
  key: "b"
};
const c = {
  key: "c"
};

/* 我们试图将一个对象设置为对象a的键，其值为123。但是当对象自动转化为字符串时，它变成了[object object]。所以： a["Object object"] = 123，
然后再次尝试做同样的事情，对象c的值依然会隐式转换为[object object]，即：a["Object object"] = 456*/
a[b] = 123;
a[c] = 456;

console.log(a[b]); //456

console.log("----------------------------");

function sayHi() {
  return (() => 0)(); //立即执行函数！！！！
}

/* sayHi函数返回立即调用的函数（IIFE）的返回值。该函数返回0，类型为数字 */
typeof sayHi(); //"number"

console.log("----------------------------");
/* 下面这些值哪些是假值? */
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
//0, '', undefined
/* javascript中只有6个假值：
  - undefined
  - null
  - NaN
  - 0
  - '' (empty string)
  - false
  函数构造函数，如：new Numerb()和new Boolean()都是真值
*/

console.log("----------------------------");
/* 当为数组中的元素设置一个超过数组长度的值时，JavaScript会创建一个名为“空插槽”的东西，这些位置的值实际上是undefined */
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers); //[1, 2, 3, 7 x empty, 11] 【这取决于你运行它的位置（每个浏览器有可能不同）。】

console.log("----------------------------");
/* 
  reduce(callback,initialValue) 
  - callback 的四个参数：
    - previousValue：上一次调用回调函数返回的值，或者是提供的初始值（initialValue）
    - currntValue: 数组中当前被处理的元素
    - index: 当前元素在数组中的索引
    - array: 调用reduce的数组

  - initialValue 是提供的初始值,作为第一次调用 callback 的第一个参数
*/
[
  [0, 1],
  [2, 3]
].reduce((acc, cur) => {
  console.log(acc, 'acc');
  console.log(cur, 'cur');
  return acc.concat(cur);
}, [1, 2]); //[1, 2, 0, 1, 2, 3]

console.log("----------------------------");
//setInterval方法的返回值什么?
//setInterval(() => console.log("Hi"), 1000); //一个唯一的id

console.log("----------------------------");
//下面代码的返回值是什么?
/* 字符串是可以迭代的。扩展运算符将迭代的每个字符映射到一个元素 */
console.log([..."chenlong"]);