/**
 * 深度克隆，就是当对象的某个属性值为object或array的时候，要获得一份copy，而不是直接拿到引用值 
 * @param {*} origin 是被克隆的对象
 */
function deepClone(origin){
  let target = Array.isArray(origin)?[]:{};
  //遍历原对象
  if(typeof origin === "object" && origin){
    for(var key in origin){
      if(typeof origin[key] === "object" && origin[key]){
        target[key] = deepClone(origin[key]);
      }else{
        target[key] = origin[key];
      }
    }
  }
  return target;
}
let obj = [5,6,{a:8,b:10}];
console.log(deepClone(obj));