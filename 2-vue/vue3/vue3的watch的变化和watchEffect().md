# vue3的watch的变化和watchEffect()

## watch
  - vue3的watch想要使用必须先引入
  - watch只能监听通过ref()方法定义的响应数据，通过reactive()函数定义的将会直接报错
  - 可能通过函数return一个新值来监听使用reactive()定义的值

## watchEffect
  - vue3新增加的api
  - 接收一个回调函数，不需要指定监听谁，会自动收集依赖
  - 只要在回调函数中使用了属性，在发生变化时都会去触发这个回调函数