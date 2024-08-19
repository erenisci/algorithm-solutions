// 1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/description/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  let a = str1.length,
    b = str2.length;
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return str1.substring(0, a);
};
