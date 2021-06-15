/* 
反转一个只有3位数的整数。

样例
样例 1:

  输入: number = 123
输出: 321
样例 2:

  输入: number = 900
输出: 9
注意事项
你可以假设输入一定是一个只有三位数的整数， 这个整数大于等于100， 小于1000。
*/

/**
 * @param number: A 3-digit number.
 * @return: Reversed number.
 */
const reverseInteger = function (number) {
  return Number(number.toString().split("").reverse().join(""))
}
console.log(reverseInteger(900));