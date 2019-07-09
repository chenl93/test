function Father(name) {
  this.name = name;
}
Father.prototype.sayName = function () {
  console.log(this.name);
}

function Son(name, age) {
  Father.call(this.name);
  this.age = age;
}