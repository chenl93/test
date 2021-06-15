let obj = {};
Object.defineProperty(obj, "name", {
  value: "aaaa"
});

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

let obj2 = {};

Object.defineProperty(obj2, "name", {
  enumerable: true,
  writable: true,
  value: "bbb"
})
console.log(Object.getOwnPropertyDescriptor, "name");


console.log(Object.getOwnPropertyDescriptors(obj2));