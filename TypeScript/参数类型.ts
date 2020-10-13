/**
 * 在参数名称后面使用冒号来指定参数的类型
 * 
 * ts的类型推断机制，以第一次的负值类型
 */

var myname: string = "lalala"
myname = 10

var alias: any = "haha"
alias = 10

//  void表示test方法没有任何返回值
function test(): void {
  return "";
}

// 指定return类型为string
function test2(): string{
  return 1
}

// 指定方法参数的数据类型
function test3(name: string): string {
  return name;
}
test3("")

class Person{
  name: string
  age: number
}
var zs: Person = new Person()
zs.name = "zhangsan"
zs.age = 19;