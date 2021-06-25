# BFC: Box Formatting Context(一个决定如何渲染文档的容器)
  - 一个html页面是由多个Box盒子组成的,每个box是独立的，根据box的属性进行布局
# Box的属性有两种：
  - 块级(block - level): display 属性为 block, list - item, table 的元素， 会生成 block - level box。 并且参与 block fomatting context；
  - 行内(inline - level): display 属性为 inline, inline - block, inline - table 的元素， 会生成 inline - level box。 并且参与 inline formatting context；
# BFC布局规则
  - BFC的内部的Box会在垂直的方向，一个接一个的放置
  - Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
  - BFC的区域不会与float box重叠（ 两列布局）
  - 计算BFC的高度时，浮动元素也参与计算（清除浮动）
  - BFC就是页面上一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此
# BFC的创建
  - float的值不是none
  - position的值不是static或者relative
  - diaplay的值是inline-block、table-cell、flex、table-caption或者inline-flex
  - overflow的值不是visible
# BFC的作用
  - 利用BFC避免margin重叠: 
    - 阻止外边距的重叠，属于同一个BFC的两个Box会发生margin重叠，可以通过设置两个元素为不同的BFC
    - 可以将第二个P用div包起来，然后激活它成为一个BFC
  - 自适应两栏布局
    - 第一栏浮动，第二栏设置BFC
  - 清除浮动（可以阻止元素被浮动元素覆盖）
    - 子元素浮动导致的高度塌陷，可以通过清除浮动处理
    - BFC的区域不会与float box重叠
    - 当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动的高度
