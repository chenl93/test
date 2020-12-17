/* 
比较两个数组， 然后返回一个新数组， 该数组的元素为两个给定数组中所有独有的数组元素。 换言之， 返回两个数组的差异。
*/

function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  newArr = [...arr2]
  arr1.forEach(item => {
    newArr = newArr.filter(ele => {
      return ele != item
    })
  })
  arr2.forEach(item => {
    arr1 = arr1.filter(ele => {
      return ele != item
    })
  })

  return arr1.concat(newArr);
}
console.log(diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

function diff2(arr1, arr2) {
  var newArr = [];
  arr1.map(item => {
    if(arr2.indexOf(item) === -1){
      newArr.push(item)
    }else{
      arr2.splice(arr2.indexOf(item), 1)
    }
  })
  return newArr.concat(arr2)
}
console.log(diff2([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

