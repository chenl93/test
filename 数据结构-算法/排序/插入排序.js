let arr = [68, 99, 54, 1, 92, 22, 9];
 /* 从小大到排序 */
 function insertSort(arr){
  let preIndex,current;
  for(let i=1;i<arr.length;i++){
    preIndex = i - 1; //有序数列中的最后一个元素下标（第一次是数组中的第0个，将第0个元素做为有序数列）
    current = arr[i]; //从无序数列中依次拿出元素（用做与有序数列中的值进行对比及插入【扑克每次新抓到的牌】）
    /* 
      如果当前值小于有序数列中的值，在有序数列中插入当前值（这是一个循环的过程，通过循环找到插入当前值最合适的位置）
      如果当前值大于有序数列中的值，那么直接在有序数列后插入当前值
    */
    //如果有序数列中有值，并且这个值大于无序数列中的的元素（当前拿出的元素）
    while(preIndex>=0 && arr[preIndex] > current){
      //将有序数列中大于当前拿到值的位置插入一个值，暂时存储为有序数列中大于当前拿到的值
      arr[preIndex+1] = arr[preIndex];
      //减减是判断是否再次while循环的条件（在有序数列中再提出上一个值依次比较，直到有序数列中没有值，或不再满足while循环的条件）
      preIndex--;
    }
    //这里[preIndex+1]就是找到的插入的位置
    arr[preIndex+1] = current;
  }
  return arr;
}
console.log(insertSort(arr)); 



