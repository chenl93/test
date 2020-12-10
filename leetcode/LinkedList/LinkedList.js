function LinkedList(){
  /* 
  Node: 辅助类，表示要加入链表中的项
  element: 要添加到链表的值
  next：指向链表中下一个节点项的指针
  */
  let Node = function(element){
    this.element = element;
    this.next = null
  }

  let length = 0;
  let head = null; //第一个节点的引用

  // 向列表尾部添加一个新的项
  this.append = function(element){
    let node = new Node(element);
    let current;

    if(!head){
      head = node
    }else{
      //链表查找从第一个元素开始
      current = head
      //循环链表，找到最后一项
      while(current.next){
        current = current.next
      }
      current.next = node
    }
    length++
  }

  //向列表的特定位置插入一个新的项
  this.insert = function(position, element){}

  //从列表的特定位置移除一项
  this.removeAt = function(position){}

  //从列表中移除一项
  this.remove = function(element){}

  //返回元素在列表中的索引。如果列表中没有该元素则返回-1
  this.indexOf = function(element){}

  //如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false
  this.isEmpty = function(){}

  //返回链表包含的元素个数。与数组的length属性类似
  this.size = function(){}

  //由 于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法， 让其只输出元素的值
  this.toString = function(){
    let current = head
    let string = ""
    while (current) {
      string += current.element + (current.next ? 'n' : '' )
      current = current.next
    }
    return string
  }

  this.print = function(){
    console.log(this.toString());
  }
}

let list = new LinkedList();
list.append(15)
list.append(10)
list.print()