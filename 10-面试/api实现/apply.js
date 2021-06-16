Function.prototype.myApply = function(thisArg, argArr){
  const fn = Symbol("fn");
  thisArg = thisArg || window;
  thisArg[fn] = this;
  argArr = argArr || []
  const result = thisArg[fn](argArr)
  delete thisArg[fn];
  return result;
};

const obj = {
  name: "applyTest"
}

function foo(){
  console.log(this.name);
}

foo.myApply(obj);