# Composition API
 - 将零散的逻辑组合在一起维护，还可以将独立的功能逻辑拆分成单独的文件
 - Composition API下包含：reactive,ref,toRefs,watch,watchEffect,computed,生命周期钩子

## setup是组件内使用Composition API的入口，两个参数 setup(props, context) 
  - setup其实是个生命周期的钩子函数，可以通过这个函数来定义vue2中的data,methods,watch,computed但最后都需要return回去，另外对其赋值或者取值的时候必须通过.value的写法去读或写
  - setup的执行是在beforeCreated之前
  - setup中不能使用vue2中常用的this对象
  - setup中的第一个参数props，也就是定义在组件上的属性，但是接收的props必须先在props属性中定义，否则是不会被接收到的
    - props是响应式的数据，不能使用es6解构，因为它会消除prop的响应性，需要解构的props需要用到setup函数中的toRefs来安全地完成此操作
  - context中提供了this的最常用三个属性：attrs,slot和emit
  - setup函数必须有返回值，必须返回一个对象，对象里包含所有在template模板中需要使用到的属性

## reactive 、ref、toRefs
  - vue2中定义数据在data中，vue3可以使用reactive和ref来进行数据定义

### 通过ref关键字才能定义一个响应式的数据
  - ref函数是把一个普通变量变成Proxy响应式变量的函数
  - ref的另一个用法可以调用原生的DOM
  - 在setup里面通过ref声明的响应式数据，取值和赋值时必须通过.value的方法去拿，但在template中不需要使用.value

### reactive
  - 不在使用ref对属性进行响应式声明，使用类似vue2的写法，只需要定义一个data对象即可，最后统一返回data
  - 在reactive中不再使用.value的方式，而是使用data.方式，template中也需要加上data.
  - reactive这种方式写起来更清晰，不需要return一堆东西，写法更简洁

### toRefs()函数对reavtive()函数解构返回
  - reactive返回的对象需要在template中使用data.才能调用，又不可以通过解构直接返回
  - 使用toRefs()函数处理就可以在模板中直接使用
  - 通过toRefs()函数处理后再进行解构也不会破坏他的响应式