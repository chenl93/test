/* let arr = [33, 21, 9, 23, 14, 55, 75, 4, 63, 12, 77];


function quickSort(arr){
  
  if(arr.length<=0){
    return arr;
  }

  let midIndex = Math.floor(arr.length/2);
  let midVal = arr.splice(midIndex,1);
  let left = [],right =[];

  for(let i=0;i<arr.length;i++){
    if(midVal > arr[i]){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(midVal,quickSort(right));
}

console.log(quickSort(arr)); */

function test(person){
  person.age = 26;
  person = {
    name:'b',
    age:18
  }
  return person;
}

const p1 = {
  name:'a',
  age:19
}

const p2 = test(p1);
console.log(p1);
console.log(p2);

/* 
  函数传参的时候是对象在堆中的内存地址值 ，
  test函数中的实参person是p1对象的内存地址，通过调用person.age = 26确实改变了p1值
  但随后person变成了另一块内存空间的地址，并且在最后将这另外一份内存地址返回，赋值给了p2


  重点： 函数中参数的类型是复杂数据类型时，传递的是内存地址
  当参数被=号重新赋值时，会产生一个新的内存地址

*/