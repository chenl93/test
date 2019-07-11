let obj = {
  x: 1,
  y: 2
}
obj.__proto__.z = 3;
console.log(obj.z);

console.log(Object.isExtensible(obj));
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));
obj.v = 1;
console.log(obj.v);
console.log(Object.getOwnPropertyDescriptor(obj, "x"));

console.log("============");
let obj2 = {
  x: 1,
  y: 2
};
Object.seal(obj2);
console.log(Object.getOwnPropertyDescriptor(obj2, "x"));
console.log(Object.isSealed(obj2));

console.log("============");

let obj3 = {
  x: 1,
  y: 2
};
Object.freeze(obj3);
console.log(Object.getOwnPropertyDescriptor(obj3, "x"));
console.log(Object.isFrozen(obj3));