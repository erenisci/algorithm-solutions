// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  const sArr = s.toLowerCase().match(/[a-z0-9]/gi);
  if (!sArr) return true;
  return sArr.join('') === sArr.reverse().join('');
};
