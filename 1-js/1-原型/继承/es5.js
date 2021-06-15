function Super(){}
Super.prototype.getNumber = function(){
  return 1;
}

function Sub(){}
Sub.prototype = Object.create(Super.prototype,{
  constructor:{
    value:Sub,
    enumerable:false,
    writable:true,
    configurable:true
  }
})
let sub = new Sub();
console.log(sub.getNumber());
console.log(Sub.prototype);
console.log(sub.__proto__);
console.log(Sub.prototype.__proto__);
console.log(Sub.prototype.__proto__.__proto__);
console.log(Sub.prototype.__proto__.__proto__.__proto__);