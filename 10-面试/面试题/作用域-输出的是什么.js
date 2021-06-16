var scope = "global scope";

function checkscope(){
  var scope = "local scope";

  function f(){
    return scope;
  }

  return f();
}
console.log(checkscope());
console.log("=========================");
var scope2 = "global scope";

function checkscope2(){
  var scope2 = "local scope";

  function f(){
    return scope2;
  }

  return f;
}
console.log(checkscope2()());