/**
 * 求1+2+3+4+...+n的和
 */
function sum(n){
  if( n ===1 ) return 1
  return sum(n-1) + n;
}
console.log(sum(100));