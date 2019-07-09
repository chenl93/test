/* 
  loader就是一个node模块，它输出了一个函数。当某种资源需要用到这个loader转换时，这个函数会被调用
  并且，这个函数可以通过提供给它的this上下文访问Loader API

  reverse-txt-loader
*/

module.exports = function (src) {
  //src是原文件内容，下面对内容进行处理，这里是反转
  var result = src.split("").reverse().join("");
  //返回javascript源码，必须是string或者Buffer
  return `module.exports = ${result}`;
}

/* 在webpack中使用 */
{
  test: /\.txt/,
  use: [{
    './path/reverse-txt-loader'
  }]
}