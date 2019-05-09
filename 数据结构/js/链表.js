/* 
  链表就是一个头元素存储的就是下一个节点的Node对象里面的next
*/
class Node{
  constructor(value,next){
    this.value = value;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  insert(value,after){
    const nodeInsert = new Node(value);
    if(!this.head){
      this.head = nodeInsert;
      return;
    }
  }
  _findNode(value){
    if(!this.head) return null; //如果链表没有 头 直接返回null
    if(this.head.value===value) return this.head; //如果当前查找的结点是头，就将 头 返回
    let cur = this.head;
    //遍历链表中的结点，找到值与传入的值相同的结点，则返回结点
    while(cur.next){
      cur = cur.next
      if(cur.value===value)return cur;
    }
    //链表中没有找到返回null
    return null;
  }
  push(){}
  remove(){}
}