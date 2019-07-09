let arr = [33, 21, 9, 23, 14, 55, 75, 4, 63, 12, 77];
/* 冒泡 每两元素对比，符合条件就换位置*/
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));

/* 选择，不需要像冒泡一样每次都换位置 */
function selectSort(arr) {
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
  return arr;
}
console.log(selectSort(arr));

/* 插入(扑克抓牌) */
function insertSort(arr) {
  let preIndex, current;
  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > arr[i]) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
console.log(insertSort(arr));

/* 快速 */
function quickSort(arr) {
  //退出递归调用的条件
  if (arr.length <= 1) {
    return arr;
  }
  //找到基准
  let midIndex = Math.floor(arr.length / 2);
  let midVal = arr.splice(midIndex, 1);
  //比大小，分左右
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (midVal > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  //重复第一步第二步
  return quickSort(left).concat(midVal, quickSort(right));
}
console.log(quickSort(arr));