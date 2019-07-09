var d = Date.prototype;
/* 通过defineProperty为Date.prototype增加一个属性 */
Object.defineProperty(d, "year", {
  /* 为year属性增加getter、setter方法 */
  get: function () {
    return this.getFullYear();
  },
  set: function (y) {
    return this.setFullYear(y);
  }
})

var now = new Date();
console.log(now.year);
now.year = 2014;
console.log(now);