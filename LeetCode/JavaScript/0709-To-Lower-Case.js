// 709. To Lower Case
// https://leetcode.com/problems/to-lower-case/

/**
 * @param {string} s
 * @return {string}
 */

var toLowerCase = function (s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    const ascii = s.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      res += String.fromCharCode(ascii + 32);
    } else {
      res += s.charAt(i);
    }
  }
  return res;
};
