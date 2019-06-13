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