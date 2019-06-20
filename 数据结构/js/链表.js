/* 
  链表就是一个头元素存储的就是下一个节点的Node对象里面的next
*/
class Node{
  constructor(value,next){
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }
  /* 在某一个元素后面插入 */
  insert(value,after){
    const nodeInsert = new Node(value);
    if(!this.head){
      this.head = nodeInsert;
      this.tail = nodeInsert;
      return;
    }
    const node = this._findNode(after);
    if(!node) return;
    /* 将找到元素的下一个节点保存下来，插入后将保存下来的下一个节点值保存给插入的节点 */
    const orginalNext = node.next;
    node.next = nodeInsert;
    if(orginalNext)nodeInsert.next = orginalNext;
    //如果找到的元素没有下一个节点，就将要插入的节点作为链表的尾
    else this.tail=nodeInsert
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
  /* 在链表的尾加入一个元素  */
  push(value){
    const nodeToInsert = new Node(value,null);
    if(!tail){
      this.head = nodeToInsert;
      this.tail = nodeToInsert;
    }else{
      this.tail.next = nodeToInsert;
      this.tail = nodeToInsert;
    }
  }
  remove(after){
    const prevNode = this._findNode(after);
    if(!prevNode) return;
    if(prevNode.next){
      const nextNode = prevNode.next.next;
      if(!nextNode) this.tail = prevNode;
      prevNode.next.next = null;
      prevNode.next = nextNode;
    }
  }
}

function linkedListTest(){
  const arr = new Array(1000000);
  for(var i = 0;i<1000000;i++){
    arr[i]=i;
  }
  console.time("shifting array element");

  for(var i =0;i<100;i++){
    arr.shift();
  }
  console.timeEnd("shifting array element")
}
linkedListTest();