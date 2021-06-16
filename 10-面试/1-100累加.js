/* 循环 */
var sum=0;
for(var i=0;i<=100;i++){
  sum+=i;
}
console.log(sum);

/* 高斯 */
var sum1=0,n=100;
sum1 = (1+n)*n/2;
console.log(sum1);

/* 递归 */
function sum2(n){
  if(n==1){ //临界值
    return 1;
  }
  return sum2(n-1) + n;
}
console.log(sum2(100));