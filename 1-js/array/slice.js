let arr = ["a", "b", "c", "d", "e"];
const sliced = arr.slice(2, 4);
console.log(sliced);
console.log(arr);


function test() {
  let arr = Array.prototype.slice.call(arguments);
  console.log(arr);
}
test(1, 2, 3, 4, 5);