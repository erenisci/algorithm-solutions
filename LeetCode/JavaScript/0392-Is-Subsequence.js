// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function (s, t) {
  let index = 0;
  for (const char of t) {
    if (index === s.length) break;
    if (char === s[index]) index++;
  }
  return index === s.length;
};
