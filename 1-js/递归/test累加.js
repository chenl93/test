
/* 1加到n的和： 公式 ： sum(100) = sum(99) + 100 ; sum(n) = sum(n-1) + n */

function sum(n){
  if(n==1){ //临界值
    return 1;
  }
  return sum(n-1) + n;
}
console.log(sum(100));