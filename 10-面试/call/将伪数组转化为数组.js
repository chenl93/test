var arrayLike = {
  0: "cl",
  1: "aa",
  2: "bb",
  length: 3
}
console.log(Array.prototype.slice.apply(arrayLike));
console.log(Array.prototype.slice.call(arrayLike));

function test() {
  let arr = Array.prototype.slice.call(arguments);
  console.log(arr);
}
test(1, 2, 3, 4, 5);