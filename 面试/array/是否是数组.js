function fn() {
  console.log(Array.isArray(arguments)); //false
  console.log(Array.isArray([1, 2, 3, 4])); //true
  console.log(arguments instanceof Array); //false
  console.log([1, 2, 3, 4] instanceof Array); //true
  console.log(Object.prototype.toString.call(arguments)); //[Object Arguments]
  console.log(Object.prototype.toString.call([1, 2, 3, 4])); //[Object Array]
  console.log(arguments.constructor === Array); //false
  arguments.constructor = Array;
  console.log(arguments.constructor === Array); //true
  console.log(Array.isArray(arguments)); //false
}
fn(1, 2, 3, 4);