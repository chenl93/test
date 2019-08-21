/* 在数据达到一个量级的时候，即便是生成数组，采用不一样的方式也会有很大的差距。
new Array()在js中会有一个预分配内存 */

function arr_test() {
  console.time("large array generation with push");

  const arr = [];

  for (var i = 0; i < 10000000; i++) {
    arr.push(i);
  }

  console.timeEnd("large array generation with push");

  console.time("large array generation with new Array()");

  const arrB = new Array(10000000);
  for (var i = 0; i < 10000000; i++) {
    arrB[i] = i;
  }

  console.timeEnd("large array generation with new Array()");

  console.time("generate ten million arrays with []");

  for (var i = 0; i < 10000000; i++) {
    var a = [];
  }

  console.timeEnd("generate ten million arrays with []");

  console.time("generate ten million arrays with new Array()");

  for (var i = 0; i < 10000000; i++) {
    var a = new Array();
  }

  console.timeEnd("generate ten million arrays with new Array()");
}
arr_test();
