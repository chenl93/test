function test(person){
  person.age = 26;
  person = { //person被重新赋值，变成了新的一块内存空间的地址
    name:"nzj",
    age:18
  }
  return person;
}

const p1 = {
  name:"ffq",
  age:19
}

const p2 = test(p1);
console.log(p1); //p1：{name: “fyq”, age: 26}
console.log(p2); //p2：{name: “hzj”, age: 18}

/* 
  原因：在函数传参的时候传递的是对象在堆中的内存地址值
  - test函数中的实参person是p1的内存地址，通过调用person.age = 26确实改变了p1的值
  - 但随后person变成了另一块内存空间的地址，并且在最后将这另外一份内存空间的地址返回，赋给了p2
*/