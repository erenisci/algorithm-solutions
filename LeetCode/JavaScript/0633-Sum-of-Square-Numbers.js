// 633. Sum of Square Numbers
// https://leetcode.com/problems/sum-of-square-numbers/

/**
 * @param {number} c
 * @return {boolean}
 */

var judgeSquareSum = function (c) {
  let first = 0,
    last = Math.ceil(Math.sqrt(c));

  while (first <= last) {
    const curr = first ** 2 + last ** 2;

    if (c > curr) first++;
    else if (c < curr) last--;
    else return true;
  }

  return false;
};
