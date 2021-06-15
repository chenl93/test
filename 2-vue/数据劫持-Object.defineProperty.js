/* 利用Object.defineProperty支持对象的访问器，在属性值发生变化时可以获取变化，从而进行下一步操作 */
//这是将要被劫持的对象
const data = {
  name: "",
  age: 0
};

function say(name) {
  if (name = "古天乐") {
    console.log("给大家推荐一款超好玩的游戏");
  } else if (name = "渣渣辉") {
    console.log("戏我演过很多,可游戏我只玩贪玩懒月");
  } else {
    console.log("来做我的兄弟");
  }
}

Object.keys(data).forEach(function (key) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log("get");
    },
    set: function (newVal) {
      console.log(`大家好，我系${newVal}`);
      say(newVal);
    }
  })
});

data.name = "渣渣辉";
data.age = "18";