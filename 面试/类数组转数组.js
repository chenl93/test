function fn() {
  console.log(Array.prototype.slice.call(arguments, 0));
  console.log([...arguments]);
  console.log(Array.from(arguments));
}
fn(2, 3, 4, 5);