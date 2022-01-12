function chunkArrayInGroups(arr, size) {
  let length = arr.length;
  let newArr = []
  for (let i = 0; i < length; i += size) {
    newArr.push(arr.splice(0, size))
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// function chunkArrayInGroups(arr, size) {
//   let length = Number(((arr.length+1) / size).toFixed());
//   let newArr = []
//   console.log(length);
//   for (let i = 0; i < length; i++) {
//     arr.length > 0 && newArr.push(arr.splice(0, size))
//   }

//   return newArr;
// }
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));


// function mutation(arr) {
//   arr.map((it, i) => arr[i] = it.toLowerCase())
//   for(char in arr[1]){
//     console.log(arr[1][char]);
    
//   }
// }

// mutation(["hello", "Heloo"]);

// function getIndexToIns(arr, num) {
//   arr.push(num)
//   arr = arr.sort((a,b)=>a-b)
//   return arr.indexOf(num);
// }
// console.log(getIndexToIns([3, 10, 5], 3));
// function titleCase(str) {
//   let arr = str.split(" ");
//   arr.map((it,i) => {
//     arr[i] = it.toLowerCase();
//     arr[i] = arr[i].charAt(0).toUpperCase() + (it.length > 1 ? arr[i].substring(1, it.length) : '')
//   })
//   return arr.join(" ");
// }
// console.log(titleCase("sHoRt AnD sToUt"));
// function findElement(arr, func) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       num = arr[i]
//       break;
//     } 
//   }
//   return num === 0 ? undefined : num;
// }
// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// function repeatStringNumTimes(str, num) {
//   // repeat after me
//   if (num < 1) return "";
//   let newStr = "";
//   for(let i=0;i<num;i++){
//     newStr += str
//   }
//   return newStr;
// }
// console.log(repeatStringNumTimes("abc", 3));


// function confirmEnding(str, target) {
//   // "Never give up and good luck will find you."
//   // -- Falcor
//   return str.substring(str.length - target.length, str.length) == target;
// }
// console.log(confirmEnding("Bastian", "n"));

// function largestOfFour(arr) {
//   // You can do this!
//   let newArr = []
//   arr.map((item, i) => {
//     newArr.push(item.reduce((prev, cur) => prev + cur))
//   })
//   Math.max(...newArr)
//   return arr[newArr.indexOf(Math.max(...newArr))];
// }

// function largestOfFour(arr) {
//   // You can do this!
//   let newArr = []
//   arr.map(item => {
//     newArr.push(Math.max(...item))
//   })
//   return newArr;
// }
// console.log(largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1]
// ]));


// function findLongestWordLength(str) {
//   let arr = str.split(" ");
//   let length = 0;
//   arr.map(item => {
//     item.length > length ? length = item.length : ''
//   })
//   return length;
// }
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// let arr = [];
// function randomFun(max,min){
//   if(arr.length>5){
//     return;
//   }
//   let num = Math.floor(Math.random()*(max-min+1)+min);

//   if(!arr.includes(num)){
//     arr.push(num);
//   }
//   randomFun(max,min);
// }
// randomFun(2,32);
// console.log(arr);

// function factorialize(num) {
//   let res = 1;
//   for (let i = 2; i <= num; i++) {
//     res *= i
//   }

//   return res;
// }

// factorialize(5);
// console.log(factorialize(5));