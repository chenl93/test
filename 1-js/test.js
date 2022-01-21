// 只修改这一行下面的代码
class Thermostat {
  constructor(temperature) {
    this._temperature = temperature
  }

  get temperature() {
    return 5 / 9 * (this._temperature - 32)
  }
  set temperature(temperature) {
    this._temperature = temperature * 9.0 / 5 + 32
  }
}
// 只修改这一行上面的代码

const thermos = new Thermostat(76); // 设置为华氏刻度
let temp = thermos.temperature; // 24.44 摄氏度
thermos.temperature = 26;
temp = thermos.temperature; // 26 摄氏度
console.log(temp);
// const increment = (number, value = number + 1) => number + value;
// console.log(increment(5));

// let arr = [
//   {
//     name: "aa"
//   },
//   {
//     name: "bb"
//   },
//   {
//     name: "cc"
//   },
//   {
//     name: "dd"
//   }
// ]

// function test(val, index) {
//   if(index == 0 || index == 3){
//     arr.map((item, i)=>{arr[i].active = false})
//   }else{
//     arr[0].active = false
//     arr[3].active = false
//   }
//   val.active = true
// }
// test(arr[1], 1)
// test(arr[2], 2)
// test(arr[0], 0)
// test(arr[3], 3)
// test(arr[2], 2)
// console.log(arr);
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // 修改这一行
// let result = quoteSample.match(vowelRegex); // 修改这一行

// let arr = []

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum > endNum) {
//     return [];
//   }
//   arr.push(startNum)
//   rangeOfNumbers(startNum + 1, endNum)
//   return arr;
// };
// // 只修改这一行下面的代码
// let arr = []
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   }
//   arr.push(n)
//   countdown(n - 1)
//   return arr;
// }
// console.log(countdown(10));
// 只修改这一行上面的代码
// // 设置
// const contacts = [{
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // 只修改这一行下面的代码
//   let flag = false;
//   for (let i = 0; i < contacts.length; i++) {
//     console.log(contacts[i]);
//     if (contacts[i].firstName == name) {
//       flag = true;
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop]
//       } else {
//         return "No such property"
//       }
//     } 
//   }
//   if (!flag) return "No such contact";
//   // 只修改这一行上面的代码
// }

// console.log(lookUpProfile("Kristian", "lastName"));

// // 设置
// const myArray = [];

// // 只修改这一行下面的代码
// for (let i = 9; i >= 1; i -= 2) {
//   myArray.push(i)
// }
// console.log(myArray);
// // 设置
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // 只修改这一行下面的代码
// function updateRecords(records, id, prop, value) {

//   let res = ""
//   if (prop != "tracks" && value != "") {
//     records[id][prop] = value
//     res = records[id][prop]
//   } else if (prop == "tracks" && !records.hasOwnProperty(prop)) {
//     records[id][prop] = []
//     res = records[id][prop] = value
//   } else if (prop == "tracks" && records[id].hasOwnProperty(prop) && value != "") {
//     res = records[id][prop].push(value)
//   } else if (value == "") {
//     res = delete records[id][prop]
//   }

//   return res;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// function checkObj(obj, checkProp) {
//   // 只修改这一行下面的代码
//   return obj.hasOwnProperty(checkProp) || "Not Found";
//   // 只修改这一行上面的代码
// }
// console.log(checkObj({
//   gift: "pony",
//   pet: "kitten",
//   bed: "sleigh"
// }, "gift"));


// let count = 0;

// function cc(card) {
//   // 只修改这一行下面的代码
//   switch(card){
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count+=1
//       break;
//     case -1:
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count-=1
//       break;
//   }
//   // 只修改这一行上面的代码
// }

// cc(2); 
// cc(3); 
// cc(4); 
// cc(5);
// cc(6);
// cc(7)
// cc(8)
// cc(9)
// if (count > 0) {
//   return count + ' ' + 'Bet';
// } else {
//   return count + ' ' + 'Hold';
// }

// function chunkArrayInGroups(arr, size) {
//   let length = arr.length;
//   let newArr = []
//   for (let i = 0; i < length; i += size) {
//     newArr.push(arr.splice(0, size))
//   }
//   return newArr;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
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