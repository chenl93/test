function shellSort(arr){
  let length  = arr.length;
  let gap = 1; //区间

  while(gap < length){//动态定义间隔序列
    gap = gap * 3 + 1;
  }

  while(gap > 0){
    //计算出的排序区间为 4 ，第一次比较应该是用第 5 个数据与第 1 个数据相比较。
    //然后指针右移，第 6 个数据与第 2 个数据相比较。
    for(let i = gap;i<length;i++){
      let tmp = arr[i];
      let j = i - gap;
      //跨区间排序
      while(j >= 0 && arr[j] > tmp){
        arr[j + gap] = arr[j];
        j -= gap;
      }
      arr[j + gap] = tmp;
    }
    gap =  Math.floor(gap / 3);
  }
  /* for(gap;gap>0;gap = Math.floor(gap / 3)){
    for(var i=gap;i<len;i++){
      temp = arr[i];
      for(var j=i-gap;j>=0&&arr[j]>temp;j-=gap){
        arr[j+gap] = arr[j];
      }
      arr[j+gap] = temp;
    }
  }
  */
  return arr;
  
}

let arr = [99, 232, 22, 25, 66, 29, 100, 4, 54];
console.log(shellSort(arr));
