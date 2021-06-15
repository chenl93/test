// 使用 : 指定参数的类型
function sayHello(person: string) {
  return `Hello, ${person}`
}

let user = "Tom"
let user2 = [1,2]

console.log(sayHello(user));
console.log(sayHello(user2))