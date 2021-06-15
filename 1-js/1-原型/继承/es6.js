class MyDate extends Date{
  test(){
    return this.getTime();
  }
}
let mydate = new MyDate();
console.log(mydate.test());