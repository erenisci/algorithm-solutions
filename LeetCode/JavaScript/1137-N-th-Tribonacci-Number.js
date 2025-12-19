// 1137. N-th Tribonacci Number
// https://leetcode.com/problems/n-th-tribonacci-number/

/**
 * @param {number} n
 * @return {number}
 */

var tribonacci = function (n) {
  const memo = {
    0: 0,
    1: 1,
    2: 1,
  };

  function helper(n) {
    if (memo[n] !== undefined) {
      return memo[n];
    }

    memo[n] = helper(n - 1) + helper(n - 2) + helper(n - 3);

    return memo[n];
  }

  return helper(n);
};
