/* 
我们会传递给你一个包含两个数字的数组。 返回这两个数字和它们之间所有数字的和。

最小的数字并非总在最前面。
*/
function sumAll(arr) {
  let res = 0
  let newArr = []
  let maxNum =  Math.max(...arr)
  let minNum = Math.min(...arr)

  for(let i=minNum;i<=maxNum;i++){
    newArr.push(i)
  }

  res = newArr.reduce((total, num) => {
      return total + num
  })

  return res;
}

console.log(sumAll([1, 4]));
