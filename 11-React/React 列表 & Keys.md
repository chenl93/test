# React 列表 & Keys

- 可以使用 JavaScript 的 map() 方法来创建列表。
- 每个列表元素分配一个 key，不然会出现警告 a key should be provided for list items，意思就是需要包含 key：

## Keys
- Keys 可以在 DOM 中的某些元素被增加或删除的时候帮助 React 识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。
- 一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用来自数据的 id 作为元素的 key:
- 当元素没有确定的 id 时，你可以使用他的序列号索引 index 作为 key：

### 用keys提取组件
- 元素的 key 只有在它和它的兄弟节点对比时才有意义。
- 元素的 key 在他的兄弟元素之间应该唯一