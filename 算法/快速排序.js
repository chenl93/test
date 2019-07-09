/* 选择枢纽 */
let arr = [23,4,13,10,76,7,12,100,72]
function getCenter(arr,left,right){
  //1、取出中间位置
  let center = Math.floor((left+right) / 2);//Math.floor小数取整
  //2、判断大小，并且进行交换
  if(arr[left]>arr[center]){
    [arr[left],arr[center]] = [arr[center],arr[left]];
  }
  if(arr[center]>arr[right]){
    [arr[center],arr[right]] = [arr[right],arr[center]];
  }
  if(arr[left]>arr[right]){
    [arr[left],arr[right]] = [arr[right],arr[left]];
  }
  //3、将center换到right-1的位置
  [arr[center],arr[right-1]] = [arr[right-1],arr[center]];

  //4、返回枢纽
  return arr[right-1];
}
function quickSort(){

}
