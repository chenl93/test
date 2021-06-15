let obj = {};
Object.defineProperty(obj, "name", {
  enumerable: true,
  value: "ccc"
})
console.log(Object.keys(obj));