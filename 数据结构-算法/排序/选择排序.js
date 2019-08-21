//从小到大排序
let arr = [23,4,234,1,55,34];

let m; //用来标记数组中最小的值
for(let i=0;i<arr.length;i++){
  m = i; //开始时将数组中的第一个元素当作最小值
  for(let j=i+1;j<arr.length;j++){
    //如果当前找到的值m，比数组中下一个值还要大（说明j比m[已经找到的最小值要小]小），所以要将j的下标记录到m
    if(arr[m]>arr[j]){
      m = j;
    }
  }
   //确认如果最小值不是数组中当前位置的值再进行位置交换
   if(m!=i){
    [arr[m],arr[i]] = [arr[i],arr[m]];
  }
}
console.log(arr);