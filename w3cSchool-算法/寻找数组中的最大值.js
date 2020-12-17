// 寻找数组中的最大值

// 双层for循环逐个对比
function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j]
      }
    }
    newArr.push(max)
  }
  return newArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

// 使用Math.max()方法，减少一次循环；Math.max():返回一组数中的最大值
function largestOfFour2(arr) {
  let newArr = []
  for(let i=0;i<arr.length;i++){
    newArr.push(Math.max(...arr[i]))
  }
  return newArr
}

console.log(largestOfFour2([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]));