/* forEach中的return不会返回，函数会继续执行 */
let nums = [1,2,3];
nums.forEach((item,index)=>{
  console.log(item);
  return; //无效
})
