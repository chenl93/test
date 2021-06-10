let id = Symbol("id");
let id2 = Symbol("id");

console.log(id == id2);

let id3 = Symbol("id");
let obj = {
  [id3]:'symbol',
  c:1
};
for(let option in obj){
  console.log(obj[option],"----");
}

let arr = Object.getOwnPropertySymbols(obj);
console.log(arr);
console.log(obj[arr[0]]);


console.log("--------------------");

let name1 = Symbol.for('name');//检测到未创建后新建
let name2 = Symbol.for("name");//检测到已创建后返回
console.log(name1 === name2);

console.log(Symbol.keyFor(name1));
console.log(Symbol.keyFor(name2));