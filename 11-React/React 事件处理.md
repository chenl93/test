# React 事件处理

- React 事件绑定属性的命名采用驼峰式写法，而不是小写。
- 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM 元素的写法)
- 在 React 中另一个不同是你不能使用返回 false 的方式阻止默认行为， 你必须明确使用 **preventDefault**。

## 向事件处理程序传递参数
- 参数 e 作为 React 事件对象将会被作为第二个参数进行传递。通过箭头函数的方式，事件对象必须显式的进行传递，但是通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
- `<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>`
- `<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>`