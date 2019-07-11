let arr = [1, 2, 3, 4, 5, 6, ];
console.log(arr.some((item, index, arr) => {
  console.log(`item=${item},index=${index},arr=${arr}`);
  return item > 3;
}));