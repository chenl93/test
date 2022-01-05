# React 元素渲染

- 元素是React应用的最小单位
  `const element = <h1>Hello, world</h1>`
- ReactDOM可以确保浏览器DOM的数据与react元素保持一致

- 使用React开发时一般只会定义一个根节点

## 更新元素渲染
  - React元素都是不可变的。当元素被创建之后，是无法改变其内容或属性的
  - 目前更新界面的唯一方法是创建一个新的元素，然后将它传入ReactDOM.render()方法