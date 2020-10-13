/** 
 * 在参数后面用等号来指定参数默认值
*/
function test(a: string, b: string, c: string){
  console.log(a)
  console.log(b)
  console.log(c)
}
// 少传参数会报错
test("a", "b")

function test2(a: string, b: string, c: string = "cc"){
  console.log(a)
  console.log(b)
  console.log(c)
}
test2("a", "b")
