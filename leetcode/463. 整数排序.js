/* 
给一组整数， 按照升序排序， 使用选择排序， 冒泡排序， 插入排序或者任何 O(n2) 的排序算法。
*/

const sortIntegers = function (A) {
  //return A.sort((a,b) => a-b)
  for (let i = 0; i < A.length; i++) {
    let temp
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) {
        temp = A[j]
        A[j] = A[i]
        A[i] = temp
      }
    }
  }
  return A
}
console.log(sortIntegers([3, 2, 1, 4, 5]));

const sortIntegers2 = function (A) {
  return A.sort((a, b) => a - b)
}
console.log(sortIntegers2([3, 2, 1, 4, 5]));

/* 插入排序：原理和打扑克摸牌时按牌的大小整理版类似 */
/* 将arr中index为0的第一个元素视为有序数列，其他元素视为无序数列 {{12},{54,1,92,22,9}}*/
/* 将无序数列中的元素插入到有序数列的对应位置，插入前通过对比大小的方式找到其在有序数列中的对应位置 */
const sortIntegers3 = function (A) {
  let preIndex, current;
  for(let i=1;i<A.length;i++){
    preIndex = i - 1
    current = A[i]
    while(preIndex >= 0 && A[preIndex] > current){
      A[preIndex + 1] = A[preIndex]
      preIndex--
    }
    A[preIndex + 1] = current
  }
  return A
}
console.log(sortIntegers3([3, 2, 1, 4, 5]));
