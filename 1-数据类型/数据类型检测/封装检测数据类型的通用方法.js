/* 
  - 如果是基础数据类型使用typeof
  - 如果是object使用Object.prototype.toString.call()
*/
function getType(obj){
  let type = typeof obj
  if(type !== 'object'){
    return type
  }
  // return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1').toLowerCase()
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
console.log(getType({}));
console.log(getType(`a`));
console.log(getType(1));
console.log(getType(null));
