/* ES5的新特性，可以为对象设置一个getter和一个setter */
var dreamapple = {
  firstName: 'dream',
  lastName: 'apple',
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(fullName) {
    var names = fullName.trim().split(' ');
    if (2 === names.length) {
      this.firstName = names[0];
      this.lastName = names[1];
    }
  }
}

dreamapple.firstName = "Dream";
dreamapple.lastName = "Apple";
console.log(dreamapple.fullName); //getter

dreamapple.fullName = "Jams King"; //setter
console.log(dreamapple.firstName);
console.log(dreamapple.lastName);