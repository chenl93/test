//订阅-发布模式（subscribe&publish）

// 一个发布者publisher
var pub = {
  publish: function () {
    dep.notify();
  }
}

//一个主题对象
function Dep() {
  this.subs = [sub1, sub2, sub3];
}

Dep.prototype.notify = function () {
  this.subs.forEach(function (sub) {
    sub.update();
  })
}

//三个订阅者subscribers
var sub1 = {
  update: function () {
    console.log(1);
  }
}
var sub2 = {
  update: function () {
    console.log(2);
  }
}
var sub3 = {
  update: function () {
    console.log(3);
  }
}

var dep = new Dep();
pub.publish();