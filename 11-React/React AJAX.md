# React AJAX

- react应用中需要集成第三方ajax库(或自己封装)
  - 1) jQuery: 比较重, 如果需要另外引入不建议使用
  - 2) axios: 轻量级, 建议使用
　　　　a. 封装XmlHttpRequest对象的ajax
　　　　b. promise风格
　　　　c. 可以用在浏览器端和node服务器端
  - 3) fetch: 原生函数, 但老版本浏览器不支持
　　　　a. 不再使用XmlHttpRequest对象提交ajax请求
　　　　b. 为了兼容低版本的浏览器, 可以引入兼容库fetch.js

- React 组件的数据可以通过 componentDidMount 方法中的 Ajax 来获取，当从服务端获取数据时可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI。
- 当使用异步加载数据时，在组件卸载前使用 componentWillUnmount 来取消未完成的请求。