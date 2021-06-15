/* 排序二叉树 */
function BinaryTree(){
  
  var Node = function(key){
    this.key = key; //节点值
    this.left = null; //左节点
    this.right = null; //右节点
  }

  var root = null;//根节点

  /* 插入节点  node：老节点；newNode：新节点*/
  var insertNode = function(node,newNode){
    // 新节点的值小于老节点的值
    if(newNode.key < node.key){
      // 如果当前节点没有左节点，直接插入
      if(node.left === null){
        node.left = newNode;
      }else{
        // 如果当前节点已包含左节点继续调用插入节点的方法，将老节点的左节点做为新的老节点递归调用插入节点的方法
        insertNode(node.left,newNode);
      }
    }else{
      if(node.right === null){
        node.right = newNode;
      }else{
        insertNode(node.right,newNode);
      }
    }
  }

  /* 插入 */
  this.insert = function(key){
    var newNode = new Node(key);
    // 如果根节点是空的，设置为根节点
    if(root === null){
      root = newNode;
    }else{
      //根据二叉树的节点特性封装插入节点的方法
      insertNode(root,newNode);
    }
  }

  /* 遍历-中序遍历 遍历方法的具体实现 */
  var inOrderTraverseNode = function(node,callback){
    //递归的过程，递归停止的条件就是节点为null
    if(node !== null){
      inOrderTraverseNode(node.left,callback);
      callback(node.key);
      inOrderTraverseNode(node.right,callback);
    }
  }

  /* 
  遍历-中序遍历  callback:以什么的方式打印或者展示二叉树  
  先遍历左节点，再遍历自己，最后遍历右节点，输出的刚好是有序的列表
  */
  this.inOrderTraverse = function(callback){
    inOrderTraverseNode(root,callback);
  }

  /* 遍历-前序遍历 遍历方法的具体实现 */
  var preOrderTraverseNode = function(node,callback){
    if(node !== null){
      callback(node.key);
      preOrderTraverseNode(node.left,callback);
      preOrderTraverseNode(node.right,callback);
    }
  }

  /* 
  遍历-前序遍历 
  先自己，再遍历左节点，最后遍历右节点
  */
  this.preOrderTraverse = function(callback){
    preOrderTraverseNode(root,callback);
  }

  var nextOrderTraverseNode = function(node,callback){
    if(node !== null){
      nextOrderTraverseNode(node.left,callback);
      nextOrderTraverseNode(node.right,callback);
      callback(node.key);
    }
  }
  /* 
  遍历-后序遍历 
  先左节点，再右节点，最后自己
  */
  this.nextOrderTraverse = function(callback){
    nextOrderTraverseNode(root,callback);
  }

  /* 查找二叉树节点的最小值-实现方法 */
  var minNode = function(node){
    if(node){
      // 如果节点有值，并且当前节点的左子节点不为空的时候继续向下查找
      while(node && node.left !== null){
        node = node.left;
      }
      return node;
    }
    return null;
  }

  /* 查找二叉树节点的最小值 */
  this.min = function(){
    return minNode(root);
  }

  /* 查找二叉树节点的最大值-实现方法 */
  var maxNode = function(node){
    if(node){
      while(node && node.right){
        node = node.right;
      }
      return node;
    }
    return null;
  }

  /* 查找二叉树节点的最大值 */
  this.max = function(){
    return maxNode(root);
  }

  /* 查找二叉树中给定节点值 - 具体实现 */
  var searchNode = function(node,key){
    /* 没找到返回false */
    if(node === null){
      return false;
    }
  
    /* 如果要查找的值比节点值小的话，继续查找当前节点的左子树 */
    if(key < node.key){
      return searchNode(node.left,key);
    }else if(key > node.key){
       /* 如果要查找的值比节点值大的话，继续查找当前节点的右子树 */
      return searchNode(node.right,key);
    }else{
      return true;
    }
  }

  /* 查找二叉树中给定节点值 */
  this.search = function(key){
    return searchNode(root,key);
  }

  /* 找到子树中最小子节点 */
  var findMinNode = function(node){
    if(node){
      while(node && node.left !== null){
        node = node.left;
      }
      return node;
    }
    return null;
  }

  /* 删除节点 - 具体实现 */
  var removeNode = function(node,key){
    if(node === null){
      return null;
    }

    if(key < node.key){
      node.left = removeNode(node.left,key);
      return node;
    }else if(key > node.key){
      node.right = removeNode(node.right,key);
      return node;
    }else{
      /* 删除的节点是叶子节点 */
      if(node.left === null && node.right === null){
        node = null;
        return node;
      }

      /* 删除的节点包含一个左子树或右子树 */
      /* 当前节点只有右子树 */
      if(node.left === null){
        node = node.right;
        return node;
      }else if(node.right === null){
        /* 当前节点只有左子树 */
        node = node.left;
        return node;
      }

      // 如果删除的节点包含左右两个子树时（在右子树中查找最小值，以保值二叉树的结构是排序性质的）
      var aux = findMinNode(node.right);
      // 将要删除的节点值更新为最小节点的值
      node.key = aux.key;
      // 将原有的最小节点值删除
      node.right = removeNode(node.right,aux.key);
      // 将更新后的节点返回
      return node;
    }
  }

  /* 删除节点 */
  this.remove = function(key){
    root = removeNode(root,key);
  }
}

var nodes = [8,3,10,1,6,14,4,7,13];
var binaryTree = new BinaryTree();
nodes.forEach(function(key){
  binaryTree.insert(key);
});

var callback = function(key){
  console.log(key);
}
/*
binaryTree.inOrderTraverse(callback);
console.log("----------");
binaryTree.preOrderTraverse(callback);
console.log("----------");
binaryTree.nextOrderTraverse(callback);
console.log("----------"); 
console.log(binaryTree.min());
console.log(binaryTree.max()); 
console.log(binaryTree.search(7)?"key is found":"key is not found");
console.log(binaryTree.search(9)?"key is found":"key is not found");

binaryTree.remove(1);
binaryTree.remove(10);

binaryTree.remove(3);
binaryTree.inOrderTraverse(callback);
*/