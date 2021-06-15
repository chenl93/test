/* 
用来声明任意数量的方法参数
 */
function test(...args){
  args.forEach(arg => {
    console.log(arg)
  });
}
test("a", "b", "c")

function test2(a, b, c){
  console.log(a)
  console.log(b)
  console.log(c)
}
var args = [1, 2, 3]
test2(...args)