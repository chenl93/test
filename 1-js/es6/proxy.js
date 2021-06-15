/* 
Proxy用于修改某些操作的默认行为，即对编程语言层面进行修改，属性“元编程”
Proxy的意思为“代理”，即在访问对象之前建立一道“拦截”
任何访问该对象之前都会通过这道“拦截”，即执行Proxy里面定义的方法

target: 所要拦截的目标对象
handler也是一个对象，里面定义的是对拦截对象所要进行的拦截方法
let proxy = new Proxy(target, handler)

Proxy常用的拦截方法
- get(target, name, property) 用于拦截某个读取属性的操作，
  第一个参数为目标对象，第二个参数为属性名称，第三个属性为操作所针对的对象（可选参数）
- set(target, name, value, property)用于拦截某个属性的赋值操作，
  第一个参数为目标对象，第二个参数为属性名，第三个参数为属性值，第四个参数为操作行为所针对的对象（可选参数）
- has(target, key)用来拦截对象是否具有某个属性值的操作，
  第一个参数为目标对象，第二个参数为属性名
*/
let data = { foo: "foo" };
// 对象p代理了对原始数据的操作，当对p设置时，便可以侦测到变化
let p = new Proxy(data, {
  get(target, key, receiver){
    return target[key]
  },
  set(target, key, value, recevier){
    console.log("set value");
    target[key] = value
  }
})

p.foo = 123

/* 
  当代理对象是数组，通过push操作，并不只是操作当前数据，push操作还触发
  数组本身其他属性更改
*/
let data2 = [1, 2, 3];
let proxy = new Proxy(data2, {
  get(target, key, receiver){
    console.log("get value:", key)
    return target[key]
  },
  set(target, key, value, receiver){
    console.log("set value", key, value)
    target[key] = value

    return true
  }
})
proxy.push(4); //同时这个操作还触发了get去获取push和length两个属性
// get value: push
// get value: length
// set value: 3 1  //push除了给数组的第3位下标设置值1
// set value: length 4  //还给数组的length值更改为4

/* 
Reflect

通过Reflect来返回trap相应的默认行为
*/
let data3 = [1, 2, 3];
let proxy3 = new Proxy(data3, {
  get(target, key, receiver){
    console.log("get value:", key);
    return Reflect.get(target, key, receiver)
  },

  set(target, key, value, receiver){
    console.log("set value", key, value)
    return Reflect.set(target, key, value, receiver)
  }
})
proxy3.push(1)

console.log("-----------")

/* 
代理对象是数组时，push操作会触发多次set执行，同时也引发get操作，
这点很重要，vue3就很好的使用了这点

unshift操作时，会多次触发get和set
*/

let data4 = [1, 2, 3];
let proxy4 = new Proxy(data4, {
  get(target, key, receiver){
    console.log('get value:', key)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver){
    console.log('set value:', key, value)
    return Reflect.set(target, key, value, receiver)
  }
})

proxy4.unshift('a')

console.log("-----------")

/* 
Proxy只能代理一层，而对象内部的深度侦测，是需要开发者自忆实现的。
对象内部的数组也是一样
*/
let data5 = {
  foo: 'foo',
  bar: {key: 1},
  arr: ['a', 'b']
}
let proxy5 = new Proxy(data5, {
  get(target, key, receiver) {
    console.log('get value:', key)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    console.log('set value:', key, value)
    return Reflect.set(target, key, value, receiver)
  }
})
proxy5.bar.key = 2
proxy5.arr.push('c')

console.log("----------")

/* 
get/set还有一个参数：receiver，其实接收的是一个代理对象
*/
let data6 = {a: {b: {c: 1}}}
let proxy6 = new Proxy(data6, {
  get(target, key, receiver){
    console.log(receiver) //输出的是当前代理对象，注意，这是一个已经代理后的对象
    const res = Reflect.get(target, key, receiver)

    /* vue3实现深度proxy，便是很好的使用了这点 */
    console.log("res:", res) //Reflect.get返回的值，当代理的对象是多层结构时，Reflect.get会返回对象的内部结构

    return res
  },
  set(target, key, value, receiver){
    return Reflect.set(target, key, value, receiver)
  }
})
proxy6.a.b

console.log("---------------")

/* 
使用Proxy来侦测数据变化的几个细节问题，包括：
  - 使用Reflect来返回trap默认行为
  - 对于set操作，可能会引发代理对象的属性更改，导致set执行多次
  - Proxy只能代码对象中的一层，对于对象内部的操作set未能感知，但是get会被执行
*/

//setTimeout解决重复trigger
function reactive(data, callback){
  let timer = null
  return new Proxy(data, {
    get(target, key, receiver){
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver){
      clearTimeout(timer)
      timer = setTimeout(() => {
        callback && callback()
      }, 0);
      return Reflect.set(target, key, value, receiver)
    }
  })
}
let arr = [1, 2]
let proxy7 = reactive(arr, () => {
  console.log('trigger') //在callback中打印trigger操作，来模拟通知外部数据的变化
})
proxy7.push(3) //输出结果为一个trigger

console.log("------------")

/* 
解决数据深度侦测，可以使用递归代理的方式来实现
*/
function reactive2(data, callback){
  let res = null
  let timer = null

  res = data instanceof Array ? [] : {}

  for(let key in data){
    if(typeof data[key] === "object"){
      res[key] = reactive2(data[key], callback)
    }else{
      res[key] = data[key]
    }
  }

  return new Proxy(res, {
    get(target, key){
      return Reflect.get(target, key)
    },
    set(target, key, val){
      let res = Reflect.set(target, key, val)
      clearTimeout(timer)
      timer = setTimeout(() => {
        callback && callback()
      }, 0);
      return res
    }
  })
}

let data8 = {foo: 'foo', bar: [1, 2]}
let proxy8 = reactive2(data8, () => {
  console.log("trigger");
})
proxy8.bar.push(3);
console.log(proxy8)