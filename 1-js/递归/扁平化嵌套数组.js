/**
 * Array的方法flat很多浏览器还未能实现，请写一个flat方法，实现扁平化嵌套数组
 * 实现思路和Deep Clone非常相似
 */
Array.prototype.flat = function(){
  var arr = [];
  this.forEach((item,index)=>{
    if(Array.isArray(item)){
      arr = arr.concat(item.flat());
    }else{
      arr.push(item);
    }
  })
  return arr;
}
let arr = [[2],3,[4,[5]]];
console.log(arr.flat());

/**
 * 先将数组toString得到2,3,4,5
 * 将字符串根据逗号分割成字符串数组[ '2', '3', '4', '5' ]
 * 将字符串数组转换为数字数组[ 2, 3, 4, 5 ]
 */
Array.prototype.flat2 = function(){
  //console.log(this.toString().split(",").map(item=>+item));
  //this.toString().split(",").map(Number)
  return this.toString().split(",").map(Number);
}
console.log(arr.flat2());