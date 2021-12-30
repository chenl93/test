# vue3的入口采用的createApp() 的方式有什么区别？
  - vue2中使用new Vue()的方式全局只有一个app实例，会造成实例污染，而在vue3中createApp()会返回一个全新的app，可以避免这个问题