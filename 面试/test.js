let arr = [33, 21, 9, 23, 14, 55, 75, 4, 63, 12, 77];


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

console.log(quickSort(arr));