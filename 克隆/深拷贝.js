let obj = {
  a:"aa",
  b:[1,2,3],
  o:{
    c:5
  }
}

function deepClone(obj){
  let newObj = Array.isArray?[]:{};
  if(Object.prototype.toString.call(obj)==="[object Object]"){
    for(item in obj){
      let type = Object.prototype.toString.call(obj[item]);
      if(type===["object Array"]){
        newObj[item] = new Array([...obj[item]]);
      }else if(type==="[object Object]"){
        newObj[item] = deepClone(obj[item]);
      }else{
        newObj[item] = obj[item];
      }
    }
  }
  return newObj;
}

console.log(deepClone(obj)); 


function deepClone2(obj){
  let newObj = Array.isArray(obj)?[]:{};

  if(typeof obj === "object" && obj){
    for(let key in obj){
      if(typeof obj[key] === "object" && obj[key]){
        newObj[key] = deepClone2(obj[key]);
      }else{
        newObj[key] = obj[key];
      }
    }
  }

  return newObj;
}
let obj2 = [5,6,{a:8,b:10}];
console.log(deepClone2(obj2));
console.log(deepClone2({}));
