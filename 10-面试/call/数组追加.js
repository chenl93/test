let arr = [1, 2, 3];
let arr2 = [4, 5, 6];

Array.prototype.push.call(arr, ...arr2);
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr2); //[ 4, 5, 6 ]

[].push.call(arr, ...arr2);
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr2); //[ 4, 5, 6 ]

[].push.apply(arr, arr2);
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr2); //[ 4, 5, 6 ] 