// 459. Repeated Substring Pattern
// https://leetcode.com/problems/repeated-substring-pattern/

/**
 * @param {string} s
 * @return {boolean}
 */

var repeatedSubstringPattern = function (s) {
  return (s.slice(1, s.length) + s.slice(0, s.length - 1)).includes(s);
};
