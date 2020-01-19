var map = new Map();
var o = {p:"hello world"};
map.set(o,"content");

console.log("map.get:",map.get(o));
console.log("map.has:",map.has(o));
console.log("map.delete:",map.delete(o));
console.log("map.has:",map.has(o));


var map2 = new Map();
map.set(['a'],555);
console.log(map.get(['a']));
console.log(map);