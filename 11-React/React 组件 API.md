# React 组件 API

## setState: 设置状态
  - setState(object nextState[, function callback])
  - nextState，将要设置的新状态，该状态会和当前的state合并
  - callback，可选参数，回调函数。该函数会在setState设置成功，且组件重新渲染后调用。
  - setState是React事件处理函数中和请求回调函数中触发UI更新的主要方法。

## replaceState: 替换状态
  - replaceState(object nextState[, function callback])
  - nextState，将要设置的新状态，该状态会替换当前的state。
  - callback，可选参数，回调函数。该函数会在replaceState设置成功，且组件重新渲染后调用。

## setProps: 设置属性
  - 设置组件属性，并重新渲染组件。
  - setProps(object nextProps[, function callback])
  - nextProps，将要设置的新属性，该状态会和当前的props合并
  - callback，可选参数，回调函数。该函数会在setProps设置成功，且组件重新渲染后调用。
  - props相当于组件的数据流，它总是会从父组件向下传递至所有的子组件中。
  - 更新组件，我可以在节点上再次调用React.render()，也可以通过setProps()方法改变组件属性，触发组件重新渲染。

## replaceProps: 替换属性
  - replaceProps()方法与setProps类似，但它会删除原有 props。
  - replaceProps(object nextProps[, function callback])
  - nextProps，将要设置的新属性，该属性会替换当前的props。
  - callback，可选参数，回调函数。该函数会在replaceProps设置成功，且组件重新渲染后调用。

## forceUpdate: 强制更新
  - forceUpdate([function callback])
  - callback，可选参数，回调函数。该函数会在组件render()方法调用后调用。
  - forceUpdate()方法会使组件调用自身的render()方法重新渲染组件，组件的子组件也会调用自己的render()。
  - 但是，组件重新渲染时，依然会读取this.props和this.state，如果状态没有改变，那么React只会更新DOM。
  - 一般来说，应该尽量避免使用forceUpdate()，而仅从this.props和this.state中读取状态并由React触发render()调用。
  - forceUpdate()方法适用于this.props和this.state之外的组件重绘（如：修改了this.state后），通过该方法通知React需要调用render()

## findDOMNode：获取DOM节点
  - DOMElement findDOMNode()
  - 返回值：DOM元素DOMElement
  - 如果组件已经挂载到DOM中，该方法返回对应的本地浏览器 DOM 元素。
  - 当render返回null 或 false时，this.findDOMNode()也会返回null。

## isMounted: 判断组件挂载状态
  - bool isMounted()
  - 返回值：true或false，表示组件是否已挂载到DOM中
  - isMounted()方法用于判断组件是否已挂载到DOM中。
  - 可以使用该方法保证了setState()和forceUpdate()在异步场景下的调用不会出错