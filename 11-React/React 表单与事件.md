# React 表单与事件

- HTML 表单元素与 React 中的其他 DOM 元素有所不同,因为表单元素生来就保留一些内部状态。
  - 在 HTML 当中，像 <input>, <textarea>, 和 <select> 这类表单元素会维持自身状态，并根据用户输入进行更新。
  - 但在React中，可变的状态通常保存在组件的状态属性中，并且只能用 setState() 方法进行更新。

## Select 下拉菜单
- 在 React 中，不使用 selected 属性，而在根 select 标签上用 value 属性来表示选中项。

## 多个表单
- 当你有处理多个 input 元素时，你可以通过给每个元素添加一个 name 属性，来让处理函数根据 event.target.name 的值来选择做什么

## React 事件
- 当你需要从子组件中更新父组件的 state 时，你需要在父组件通过创建事件句柄 (handleChange) ，并作为 prop (updateStateProp) 传递到你的子组件上。