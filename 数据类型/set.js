var set = new Set([1,2,3,4,4]);
console.log([...set]);

var s = new Set();
[2,3,,4,5,2,2].map(x=>s.add(x));

for(let i of s){
  console.log(i);
}