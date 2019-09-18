Array.prototype.myMap = function(fn,context){
  var arr = Array.prototype.slice.call(this); ////由于是ES5所以就不用...展开符了
  var mapedArr = [];
  for(var i=0;i<arr.length;i++){
    mapedArr.push(fn.call(context,arr[i],i,this));
  }
  return mapedArr;
}

let arr = [1,2,3];
const maped = arr.myMap(function(el){
  return el+20;
});
console.log(maped);