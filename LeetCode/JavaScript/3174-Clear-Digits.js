// 3174. Clear Digits
// https://leetcode.com/problems/clear-digits/

/**
 * @param {string} s
 * @return {string}
 */

var clearDigits = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (0 <= s[i] && s[i] <= 9) {
      s = s.substring(0, i - 1) + s.substring(i + 1, s.length);
      i -= 2;
    }
  }
  return s;
};
