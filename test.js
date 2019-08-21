let arr = [];
function randomFun(max,min){
  if(arr.length>5){
    return;
  }
  let num = Math.floor(Math.random()*(max-min+1)+min);

  if(!arr.includes(num)){
    arr.push(num);
  }
  randomFun(max,min);
}
randomFun(2,32);
console.log(arr);