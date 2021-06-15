// reverse[rɪˈvɜːrs] 
function reverseStr(str){
  //split将字符串根据""切割成数组,reverse将数组反转，join将数组连接成字符串
  str = str.split("").reverse().join("")
  return str
}
console.log(reverseStr("hello")); 
