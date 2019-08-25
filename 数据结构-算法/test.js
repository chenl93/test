class Stack{
  constructor(){
    this.items = [];
  }
  push(ele){
    this.items.push(ele);
  }
  pop(){
    return this.items.pop();
  }
  peek(){
    return this.items[this.items.length-1];
  }
  isEmpty(){
    return this.items.length===0;
  }
  size(){
    return this.items.length;
  }
  clear(){
    this.items= [];
  }
  print(){
    return this.items.toString();
  }
}

function dec2bin(num){
  let stack = new Stack();
  var binaryString = "";
  while(num > 0){
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }
  
  while(!stack.isEmpty()){
    binaryString += stack.pop();
  }
 
  return binaryString;
}
console.log(dec2bin(100));