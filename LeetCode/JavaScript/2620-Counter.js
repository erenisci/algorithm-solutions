// 2620. Counter
// https://leetcode.com/problems/counter/

/**
 * @param {number} n
 * @return {Function}
 */

var createCounter = function (n) {
  return function () {
    return n++;
  };
};
