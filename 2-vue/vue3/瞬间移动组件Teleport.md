# 瞬间移动组件Teleport
  - Teleport是一种能够将模板移动到DOM中Vue app之外的其他位置的技术，不包含在app节内
  - 类似modal,toast，很多情况下可以独立在vue的app节点外，这些组件嵌套在vue的组件内部，那么处理嵌套组件的定位、z-index和样式就会变得很困难
  - 使用：
    - 在index.html的app节点外新增节点
    - 在组件内增加Teleport的标签，并且配置标签的to属性，表示要将标签内容挂载的位置