const myInstanceof = function(left, right){
  if(typeof left !== 'object' || left === null) return false
  let proto = Reflect.getPrototypeOf(left)
  while(true){
    if(proto === null) return false
    if(proto === right.prototype) return true
    proto = Reflect.getPrototypeOf(proto)
  }
}
const arr = []
console.log(myInstanceof(arr, Array))
console.log(myInstanceof(arr, Object))
console.log(myInstanceof(arr, RegExp))