// 1790. Check if One String Swap Can Make Strings Equal
// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var areAlmostEqual = function (s1, s2) {
  let chars = [],
    count = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      count++;
      chars.push(s1[i]);
      chars.push(s2[i]);
    }
    if (count > 2) return false;
  }

  let text1 = chars.map((v, i) => (i % 2 === 0 ? v : '')).join('');
  let text2 = chars
    .map((v, i) => (i % 2 !== 0 ? v : ''))
    .reverse()
    .join('');
  return text1 === text2 ? true : false;
};
