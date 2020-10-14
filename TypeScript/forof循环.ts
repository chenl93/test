/** 
 * for of 循环
 */

var arr = [1, 2, 3, 4];
//在ts中不可以给数组加属性
arr.desc = "four number"

//forEach方法里面不能使用break
arr.forEach(val => console.log(val))

console.log('-------------');

//for in 循环的是对象的里属性名称，这里打印的是数组里的值和desc属性
for(var n in arr){
  console.log(n)
}

for(var i of arr){
  if(i > 2) break
  console.log(i)
}