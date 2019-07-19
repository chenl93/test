/* 创建一个访问器对象book */
var book = {
  __year: 2017,
  editor: 1
}
Object.defineProperty(book, "year", {
  get: function () {
    return this.__year;
  },
  set: function (newYear) {
    if (newYear !== this.__year) {
      this.__year = newYear;
      this.editor++;
    }
  }
});
//打印出属性year的特性描述
console.log(Object.getOwnPropertyDescriptor(book, "year"));
console.log("未修改：" + book.year);
book.year = 2018;
console.log("修改后：" + book.year);
console.log("修改year的值后，editor属性的值：" + book.editor);

console.log("---------------------");

var obj = {};
Object.defineProperty(obj, "hello", {
  get: function () {
    console.log("get方法调用");
  },
  set: function (value) {
    console.log("set方法调用:" + value);
  }
})
obj.hello;
obj.hello = "abc";