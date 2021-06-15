function Person(name,age){
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function(){
  console.log("hello");
}

function Student(name,age,id){
  Person.call(this,name,age);
  this.id = id;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function(){
  console.log(this.id + " is learning");
}

let s = new Student("chenl",16,1);
s.sayHello();
s.study();

let s2 = new Student("cl",18,2);
s2.sayHello();
s2.study();