/* arguments类数组转换成数组 */

//1.Array.prototype.slice.call()
function sum1(a,b){
  let args = Array.prototype.slice.call(arguments);
  console.log(args.reduce((sum,cur)=>sum+cur));
}
sum1(1,2);

//2.Array.from() 这种方法也可以用来转换Set和Map哦！
function sum2(a,b){
  let args = Array.from(arguments);
  console.log(args.reduce((sum,cur)=>sum+cur));
}
sum2(1,2);

//3.ES6展开运算符
function sum3(a,b){
  let args = [...arguments];
  console.log(args.reduce((sum,cur)=>sum+cur));
}
sum3(1,2);

//4.利用concat+apply
function sum4(a,b){
  //apply方法会把第二个参数展开
  let args = Array.prototype.concat.apply([],arguments);
  console.log(args.reduce((sum,cur)=>sum+cur));
}
sum4(1,2);