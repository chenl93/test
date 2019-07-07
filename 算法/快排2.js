let arr = [23,129,2,334,26,24,12,66,34,32,99,50];

 function quickSort(arr){
   //退出递归的临界值设置，防止死循环，内存溢出
   if(arr.length<=0){
     return arr;
   }
   //1、取出基准值(以数组中间的值做为基准值)
   let midIndex = Math.floor(arr.length/2);//数组长度除以2可能是小数，所以要进行取整
   let midValue = arr.splice(midIndex,1); //将基准值从数组中**取出**
   //2、比大小，分左右(比临界值小的数据放在left中，大的放在right中)
   let left = [];
   let right = [];

   for(let i=0;i<arr.length;i++){
     if(midValue>arr[i]){
       left.push(arr[i]);
     }else{
       right.push(arr[i]);
     }
   }
   //3、重复第一步第二步(递归调用)
   return quickSort(left).concat(midValue,quickSort(right));
 }
 let res = quickSort(arr);
 console.log(res);