# new运算符的执行过程

  - 新生成一个对象
  - 链接到原型：obj.__proto__ = Con.prototype
  - 绑定this: apply
  - 返回新对象（如果构造函数有自己return时，则返回该值）status
  