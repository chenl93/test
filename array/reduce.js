const arr = [1, 2, 3, 4, 5, 6];
const reduced = arr.reduce((total, current) => total + current);
console.log(reduced);


var items = [10, 120, 1000];

var reducer = function add(sumSoFar, item) {
  sumSoFar.sum = sumSoFar.sum + item;
  return sumSoFar;
}

var total = items.reduce(reducer, {
  sum: 0
});

console.log(total)

console.log("--------------------");

/* 计算数组中的每个元素出现的次数 */
let names = ['alice', 'bob', 'tiff', 'bruce', 'alice'];

let nameNum = names.reduce((pre, cur) => {
  console.log("pre:", pre, "cur:", cur)
  if (cur in pre) {
    pre[cur]++;
  } else {
    pre[cur] = 1;
  }
  return pre;
}, {});
console.log(nameNum);

/* 数组去重 */
let arr1 = [1, 2, 3, 4, 4, 5];
let newArr = arr1.reduce((pre, cur) => {
  if (!pre.includes(cur)) {
    return pre.concat(cur);
  } else {
    return pre;
  }
}, [])
console.log(newArr);

/* 将二维数组转化为一维 */
let arr2 = [
  [0, 1],
  [2, 3],
  [4, 5]
];
let newArr2 = arr2.reduce((pre, cur) => {
  return pre.concat(cur);
}, []);
console.log(newArr2);

/* 将多维数组转化为一维 */
let arr3 = [
  [0, 1],
  [2, 3],
  [4, [5, 6]]
];
let newArr3 = function (arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? newArr3(cur) : cur);
  }, []);
}
console.log(newArr3(arr));

/* 对象里的属性求和 */
var result = [{
  subject: 'math',
  score: 10
}, {
  subject: 'chinese',
  score: 20
}, {
  subject: 'english',
  score: 30
}];
var sum = result.reduce((pre, cur) => {
  return cur.score + pre;
}, 0);
console.log(sum);