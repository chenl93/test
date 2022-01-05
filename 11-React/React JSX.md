# React JSX

- React使用JSX来替代常规的JavaScript
- JSX是一个看起来很像XML的JavaScript语法扩展
- JSX的优点：
  - 执行更快，因为它在编译为JavaScript代码后进行了优化
  - 它是类型安全的，在编译过程中就能发现错误
  - 使用JSX编写模板更加简单快速

- JSX就是用来声明React当中的元素
- 由于JSX就是JavaScript，一些标识符像class和for不建议做为XML属性名，ReactDOM使用className和htmlFor来做对应的属性
- 代码中嵌套多个元素( HTML 标签)，需要使用一个标签元素包裹它

- React JSX可以放在一个独立文件上
- JSX中不能使用if else语句，但可以使用三元运算表达式来替代

## JavaScript 表达式
  - 表达式写在花括号{}中

## 样式
  - React推荐使用内联样式，可以使用驼峰语法来设置内联样式。
  - React会在指定元素数字后自动添加px

## 注释
  - 需要定在花括号里

## 数组
  - 允许在模板中插入数组,数组会自动展开所有成员