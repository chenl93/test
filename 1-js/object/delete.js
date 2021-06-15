var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

delete myobj.a;
console.log(myobj);

/* 如果一个全局变量不是用var关键字声明的话，也可以使用delete删除它 */
g = 12;
delete g;
console.log(g); //g is not defined