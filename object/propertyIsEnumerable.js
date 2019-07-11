let obj = {};
Object.defineProperty(obj, "name", {
  value: "ddd"
});
console.log(obj.propertyIsEnumerable("name")); //false

let obj2 = {};

Object.defineProperty(obj2, "name", {
  enumerable: true,
  value: "eee"
})

console.log(obj2.propertyIsEnumerable("name"));