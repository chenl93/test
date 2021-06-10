/* 
  # parseInt 函数解析一个字符串参数， 并返回一个指定基数的整数(数学系统的基础)。
    - const intValue = parseInt(string[, radix]);
    - string是要解析的值，radix是进制值，介于2和36之间，默认为10
    - 返回一个整数或者NaN

  # map()方法返回一个新数组，其结果是数组中每个元素调用提供的方法返回的结果
    - var new_array = arr.map(function callback(currentValue[, index[, array]]) {
        // Return element for new_array
      } [, thisArg])
        -callback的三个参数： currentValue 数组中正在处理的当前元素
        -index【 可选】： 正在处理的当前元素的索引
        -array【 可选】： 是callback map 方法被调用的数组
        -thisArg【 可选】： 执行 callback 函数时使用的this 值
  
  # ['1', '2', '3'].map(parseInt)
    - 实际执行的的代码是：
    ['1', '2', '3'].map((item, index) => {
      return parseInt(item, index)
    })
    - 即返回的值分别为：
    parseInt('1', 0) // 1
    parseInt('2', 1) // NaN
    parseInt('3', 2) // NaN, 3 不是二进制（2进制中只有0和1）
*/