class Stack{
  constructor(){
    this.items = []
  }

  push(val){
    this.items.push(val)
  }

  pop(){
    this.items.pop()
  }

  min(){
    return Math.min(...this.items)
  }
}
let stack = new Stack()
stack.push(1)
console.log(stack.min());
stack.push(2)
console.log(stack.min());
stack.push(3)
console.log(stack.min());