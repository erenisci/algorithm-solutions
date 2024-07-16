// 338. Counting Bits
// https://leetcode.com/problems/counting-bits/description/

/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function (n) {
  const result = [0];
  if (n === 0) return result;

  result[1] = 1;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) result[i] = result[Math.floor(i / 2)];
    else result[i] = result[Math.floor(i / 2)] + 1;
  }
  return result;
};
