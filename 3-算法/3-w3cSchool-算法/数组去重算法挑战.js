/* 
写一个
function， 传入两个或两个以上的数组， 返回一个以给定的原始数组排序的不包含重复值的新数组。

换句话说， 所有数组中的所有值都应该以原始顺序被包含在内， 但是在最终的数组中不包含重复值。

非重复的数字应该以它们原始的顺序排序， 但最终的数组不应该以数字顺序排序。
*/

function unite(arr1, arr2, arr3) {

  let newArr = [...arguments]
  let resArr = []
  let returnArr = []
  for(let i=0;i<newArr.length;i++){
    resArr = resArr.concat(newArr[i])
  }
  resArr.map(item => {
    if (returnArr.indexOf(item) == -1) {
      item && returnArr.push(item)
    }
  })

  return returnArr;
}
unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])

function unite2(arr1, arr2, arr3) {

  let newArr = [...arguments]
  let totalArr = []
  totalArr = newArr.reduce((total, cur) =>{
    return total.concat([...cur])
  }, [])

  let resArr = totalArr.reduce((res, cur)=> {
    if(res.indexOf(cur) == -1){
      res.push(cur)
    }
    return res
  },[])

  return resArr
}
unite2([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])

//Set
function unite3(arr1, arr2, arr3) {
  let set = new Set()

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      set.add(arguments[i][j])
    }
  }
  return [...set]
}

unite3([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])

function unite4(arr1, arr2, arr3) {
  let args =  [...arguments]
  let newArr = args.reduce((res, cur) => {
    let curArr = [...cur]
    curArr.forEach(item => {
      if(res.indexOf(item) == -1){
        res.push(item)
      }
    })
    return res
  }, [])
  return newArr
}

unite4([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])

function unite5(arr1, arr2, arr3) {
  let args = [...arguments]
  let newArr = args.reduce((res, cur) => res.concat([...cur]), [])
  return [...new Set(newArr)]
}

console.log(unite5([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))