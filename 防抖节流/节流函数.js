/* 
  防抖是延迟执行，而节流是间隔执行，函数节流即每隔一段时间就执行一次
  实现原理为：设置一个定时器，约定xx毫秒后执行事件，如果时间到了，那么执行函数并重置定时器
  和防抖的区别在于，防抖每次触发事件都重置定时器，而节流在定时器到时间后再清空定时器
 */

function throttle(func, wait) {
  let timeout = null;
  return function() {
    let context = this;
    let args = arguments;
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait)
  }
}

/* 
  实现方式2：使用两个时间戳，prev旧时间戳和now新时间戳，每次触发事件都判断二者的时间差，如果达到规定时间，执行函数并重置旧时间戳
*/
function throttleTime(func, wait) {
  var prev = 0;
  return function() {
    let now = Date.now();

    if(now - prev > wait){
      func.apply(this, arguments);

      prev = now;
    }
  }
}