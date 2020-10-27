// 1.递归
function factorialize(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorialize(num - 1)
  }
}
console.log(factorialize(5));
//2.循环
function factorialize2(num){
  for (let i=num-1;i>=1;i--){
    num *= i
  }
  return num
}
console.log(factorialize2(5));
// 3.while循环
function factorialize3(num) {
  let res = num
  while(num>1){
    num--
    res *= num
  }
  return res
}
console.log(factorialize3(5));


function factorialize4(num) {
  let result = num;
  while (num > 1) {
    num--
    result *= num
  }
  return result
}

console.log(factorialize4(5));
