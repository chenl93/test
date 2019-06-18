let set = new Set();
set.add(1);
set.add(2);
set.add(5);
set.add(5);
for (let i of set) {
  console.log(i);
}

let set1 = new Set([1, 2, 3, 3]);
console.log([...set1]);

let arr = [1, 2, 3, 3, 6, 6];
console.log([...new Set(arr)]);

let a = Array.from(new Set(arr));
console.log(Object.prototype.toString.call(a)); //[object Array]

/* 判断是否包含key[object和set] */
let obj = {
  name: "cl",
  age: '12'
}
if (obj['name']) {
  console.log("object has key!")
}

let set2 = new Set([4, 5, 6, 4]);
if (set2.has(5)) {
  console.log("set has key!")
}