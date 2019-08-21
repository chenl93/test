/* 浏览器控制台上会打印什么？ */
var a = 10;

function foo() {
  console.log(a);
  var a = 20;
}
foo();

/* 如果我们使用 let 或 const 代替 var，输出是否相同 */
/* function foo2() {
  console.log(a);
  let a = 20;
}
foo2(); */


/* "newArray"中有哪些元素？ */
var array = [];
for (var i = 0; i < 3; i++) {
  array.push(() => i);
}
array.forEach(ele => {
  console.log(ele.toString());
})
var newArray = array.map(el => el());
console.log(newArray); //[ 3, 3, 3 ]

/* 
如果我们在浏览器控制台中运行'foo'函数，是否会导致堆栈溢出错误？
*/
function foo3() {
  setTimeout(foo3, 0);
}

/* 如果在控制台中运行以下函数，页面(选项卡)的 UI 是否仍然响应 */
function foo4() {
  return Promise.resolve().then(foo4);
}

/* 问题6: 我们能否以某种方式为下面的语句使用展开运算而不导致类型错误 */
var obj = {
  'x': '1',
  'y': '2',
  'z': '3',
  length: 3
};
console.log(Array.prototype.slice.call(obj), "------------");
//console.log([...obj]); // TypeError 
//console.log(Array.from(obj));
/* console.log(Array.prototype.concat.apply([], {
  ...obj
})); */
/* console.log(Array.prototype.slice.call({
  ...obj
})); */

/* console.log(Array.from({
  a: 1,
  b: 2,
  length: 2
})) */

let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};
var arr31 = Array.prototype.slice.call(arrayLike); // ['a', 'b', 'c']  
console.log(arr31);

console.log("----------------------------")

var obj5 = {
  a: 1,
  b: 2
};
/* setPrototypeOf():用来设置一个对象的prototype对象，返回参数是对象本身 */
Object.setPrototypeOf(obj5, {
  c: 3
});
Object.defineProperty(obj5, "d", {
  value: 4,
  enumerable: false
});
console.log(obj5.__proto__);
console.log(obj5);
/* for...in循环可将原型链上的属性遍历出来 */
for (let prop in obj5) {
  console.log(prop);
}


var x = 10;
var foo = {
  x: 90,
  getX: function () {
    return this.x;
  }
}
console.log(foo.getX()); //90
var xGetter = foo.getX;
console.log(xGetter()); //10