# Composition API
 - 将零散的逻辑组合在一起维护，还可以将独立的功能逻辑拆分成单独的文件
 - Composition API下包含：reactive,ref,toRefs,watch,watchEffect,computed,生命周期钩子
 - setup是组件内使用Composition API的入口，两个参数 setup(props, context) 
  - setup的执行是在beforeCreated之前
  - setup中不能使用vue2中常用的this对象
  - context中提供了this的最常用三个属性：attrs,slot和emit
## reactive 、ref、toRefs
  - vue2中定义数据在data中，vue3可以使用reactive和ref来进行数据定义