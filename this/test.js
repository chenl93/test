function foo(){
  console.log(this.a);
}
function doFoo(fn){
  console.log(this,"---");
  fn(); 
}
var obj = {
  a:2,
  foo:foo
};
var a = "oops,global";

doFoo(obj.foo);