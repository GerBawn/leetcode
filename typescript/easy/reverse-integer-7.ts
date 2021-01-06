/*
 * @Date: 2021-01-06 21:57:31
 * @LastEditors: GerBawn
 * @LastEditTime: 2021-01-06 22:48:28
 * @FilePath: \leetcode\typescript\easy\reverse-integer-7.ts
 * @Description: https://leetcode-cn.com/problems/reverse-integer/
 */
function reverse(x: number): number {
  let reversedNumber: number = 0;
  let result = -1;
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(2, 31) * -1;
  while (x) {
    const remainder = x % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    if (reversedNumber > max || reversedNumber < min) {
      return 0;
    }
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
  }

  return reversedNumber;
}

function reverse2(x: number): number {
  const absX = Math.abs(x);
  let reversedNumber = parseInt(absX.toString().split("").reverse().join(""));
  reversedNumber = x > 0 ? reversedNumber : reversedNumber * -1;
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(2, 31) * -1;
  return reversedNumber > max || reversedNumber < min ? 0 : reversedNumber;
}
