# React 
  - 声明式设计
  - 通过对DOM的模拟，最大限度地减少与DOM的交互
  - JSX是对javascript语法的拓展
  - 单向响应数据流

  - manifest.json 指定了开始页面 index.html
  - src/index.js 是一个入口文件

  - ReactDOM.render(...) 是渲染方法，所有的 js,html 都可通过它进行渲染绘制，他有两个参数，内容和渲染目标 js 对象。
  - unmountComponentAtNode() 这个方法是解除渲染挂载，作用和 render 刚好相反，也就清空一个渲染目标中的 React 部件或 html 内容。
