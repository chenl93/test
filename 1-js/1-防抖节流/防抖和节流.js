/* 
  # 防抖：当持续触发事件时，在定时器设置的时间范围内没有再触发事件，
    事件处理函数才会触发一次
      - 将几次操作合并为一次操作
      - 通过维护一个计时器，规定在定时器时间后触发函数
      - 如果在定时器时间内再次触发的话，就会取消之前的定时器并且重新设置
  # 节流：当持续触发事件时，保证定时器设置的时间段内，只调用一次事件处理函数。
    每隔一个定时器设置的时间执行一次函数
      - 不管触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数
*/

// 防抖
function debounce(fn, wait){
  var timeout = null
  return function(){
    if(timeout !== null) clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}
// 处理函数
function handle(){
  console.log(Math.random);
}

// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000))
/* 
  监听页面的滚动事件，只有在1000毫秒内没有再进行滚动操作才会执行一次handle函数，打印出一个随机数
  当页面持续滚动时是没有执行过handle函数的
*/

// 节流（水龙头，每1000毫秒滴一次）
var throttle = function(fn, delay){
  var timer = null;
  return function () {
    var _this = this
    var args = arguments
    if(!timer){
      timer = setTimeout(function(){
        fn.apply(_this, args);
        timer = null
      }, delay);
    }
  }
}
window.addEventListener('scroll', throttle(handle, 1000))