/* 
  虽然oldObj.c.h被克隆了，但是它还与oldObj.c.h相等，这表明他们依然指向同一段堆内存，
  这就造成了如果对newObj.c.h进行修改，也会影响oldObj.c.h
*/
function shallowClone(o) {
  const obj = {};
  for (let i in o) {
    obj[i] = o[i];
  }
  return obj;
}

const oldObj = {
  a: 1,
  b: ["e", "f", "g"],
  c: {
    h: {
      i: 2
    }
  }
}

const newObj = shallowClone(oldObj);
console.log(newObj.c.h, oldObj.c.h); //{i:2} {i:2}
console.log(newObj.c.h === newObj.c.h); //true