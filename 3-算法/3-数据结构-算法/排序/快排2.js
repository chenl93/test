/* 
  1、首先在数组中选择一个中间项作为主元
  2、创建两个指针，左边的指向数组的第一个项，右边的指向最后一个项，移动左指针，直到找到一个比主元大的项，
  接着，移动右边的指针，直到找到一个比主元小的项，然后交换它们，重复这个过程，直到左侧的指针超过右侧的指针。
  这使得比主元小的都在左侧，比主元大的都在右侧。这一步叫划分操作
  3、接着，算法对划分后的小数组（较主元小的值组成的小数组，以及较主元大的值组成的小数组）重复之前的两个步骤，直到排序完成
*/

function quickSort(arr, left, right) {
  let len = arr.length;
  let partitionIndex;
  left = typeof left !== 'number' ? 0 : left;
  right = typeof right !== 'number' ? len - 1 : right;
  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}
//分区操作
function partition(arr, left, right) {
  let pivot = left; //设定基准值
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
  return index - 1;
}

let arr = [99, 232, 22, 25, 66, 29, 100, 4, 54];
console.log(quickSort(arr));