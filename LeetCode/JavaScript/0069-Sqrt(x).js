// 69. Sqrt(x)
// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  let i = 0;
  while (i * i <= x) i++;
  return --i;
};
