/* 
返回一个数组被截断n个元素后还剩余的元素， 从索引0开始截断。
*/

//for
function chunk(arr, size) {
  // Break it up.
  let newArr = []
  //i += size：控制i的值，0, 2
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size))
  }
  return newArr
}
console.log(chunk(["a", "b", "c", "d"], 2));

//while
function chunk2(arr, size) {
  // Break it up.
  let newArr = []
  let i = 0
  
  while(i<arr.length){
    newArr.push(arr.slice(i, i + size))
    i += size
  }

  return newArr
}
console.log(chunk2(["a", "b", "c", "d"], 2));