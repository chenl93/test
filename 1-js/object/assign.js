// Object.assign()方法用于将所有枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象

const target = {a:1,b:2};
const source = {b:4,c:5};

const returnTarget = Object.assign(target,source);

console.log(returnTarget);
console.log(target); 

/* const returnTarget2 = Object.assign({},target,source);
console.log(returnTarget2);

console.log(target); */