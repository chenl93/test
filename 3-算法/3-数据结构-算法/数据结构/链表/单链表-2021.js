/* 
  链表不需要连续的内存空间，它是由一组零散的内存块通过指针连接而成，
  所以，每一个块中必须包含当前节点内容以及后续指针。最常见的链表类型有：单链表、双链表、以及循环链表
*/

function List() {
  // 节点
  let Node = function(element) {
    this.element = element
    this.next = null
  }

  // 初始头节点为null
  let head = null

  // 链表长度
  let length = 0

  // 操作
  this.getList = function() {return head}
  this.search = function(list, element) {
    let p = head
    if(!p) return false
    while(p){
      if(p.element === element) return true
      p = p.next
    }
    return false
  }
  // 追加节点：初始化一个节点（待追加节点），遍历链表，在尾节点后插入该节点
  this.append = function(element) {
    let node = new Node(element), p = head
    if(!head){
      head = node
    }else{
      while(p.next){
        p = p.next
      }
      p.next = node
    }
    length += 1
  }
  // 插入position的后继节点
  this.insert = function(position, element) {
    // 创建插入节点
    let node = new Node(element)
    if(position >= 0 && position <= length) {
      let prev = head,
      curr = head,
      index = 0
      if(postion === 0) {
        node.next = head
        head = node
      }else {
        while(index < position) {
          prev = curr
          curr = curr.next
          index++
        }
        prev.next = node
        node.next = curr
      }
      length += 1
    }else{
      return null
    }
  }
  
  // 
  this.remove = function(element) {}
  this.isEmpty = function(){}
  this.size = function() {
    return length
  }
}

let list = new List()
for(let i = 0; i< 5; i++){
  list.append(i)
}
console.log(list.size());
console.log(list.search(4), list.search(11));
console.log(list.insert(10));