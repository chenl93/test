class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    //长度非必要
    this.length = 0;
  }

  /* 创建一个新节点 */
  push(data) {
    const node = new Node(data);
    //检查头部是否为空
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  /* 从链表的末尾/头部删除一个节点 */
  pop() {
    /* 先检查链表是否为空 */
    if (this.isEmpty()) {
      return null;
    }
    //如果长度为1
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this.tail;
    }

    let node = this.tail;
    let currentNode = this.head;
    let penultimate; //倒数第二的

    while (currentNode) {
      if (currentNode.next === this.tail) {
        penultimate = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }

    penultimate.next = null;
    this.tail = penultimate;
    this.length--;
    return node;
  }

  /* 返回指定索引处的节点 */
  get(index) {
    //处理边界条件
    if (index === 0) {
      return this.head;
    }
    if (index < 0 || index > this.length) {
      return null;
    }
    let currentNode = this.head;
    let i = 0;
    while (i < index) {
      i++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /* 删除指定索引处的节点 */
  delete(index) {
    let currentNode = this.head;
    if (index === 0) {
      let deletedNode;
      currentNode.next = this.head;
      deletedNode = currentNode;
      this.length--;

      return deletedNode;
    }

    if (index < 0 || index > this.length) {
      return null;
    }

    let i = 0;
    let previous;
    while (i < index) {
      i++;
      previous = currentNode;
      currentNode = currentNode.next;
    }
    previous.next = currentNode.next;
    this.length--;
    return currentNode;
  }

  /* 根据链表长度返回 true 或 false */
  isEmpty() {
    return this.length === 0;
  }

  /* 返回链表的可见表示 */
  print() {
    const list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return list.join(" => ");
  }
}

const l = new LinkedList();

//添加节点
const values = ["A", "B", "C"];
values.forEach(value => {
  l.push(value);
})
console.log(l);
console.log(l.pop());
console.log(l.get(1));
console.log(l.isEmpty());
console.log(l.print());