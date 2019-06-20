function prime(num){
  var flag = false; 
  for(var i = 2;i<num;i++){
    if(num % i == 0){
      flag = true;
      break;
    }
  }
  return !flag;
}
console.log(prime(5));