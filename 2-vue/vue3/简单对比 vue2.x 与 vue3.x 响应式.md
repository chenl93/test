# 简单对比 vue2.x 与 vue3.x 响应式

## Object.defineProperty与Proxy
  - 1、Object.defineProperty只能劫持对象的属性，而Proxy是直接代理对象
    - Object.defineProperty只能劫持对象属性，需要遍历对象的每一个属性，如果属性值也是对象，就需要递归进行深度遍历。但是Proxy直接代理对象，不需要遍历操作
  - 2、Object.defineProperty对新增属性需要手动进行Observe
    - 新增属性时，需要重新遍历对象，对其新增属性再次使用Object.defineprperty进行劫持。也就是Vue2.x中给数组和对象新增属性时，需要用$set才能保证新增的也是响应式的，$set内部也是通过调用Object.defineProperty去处理