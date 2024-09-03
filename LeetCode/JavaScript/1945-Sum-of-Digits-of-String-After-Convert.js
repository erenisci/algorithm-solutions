// 1945. Sum of Digits of String After Convert
// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var getLucky = function (s, k) {
  let transformed = s
    .split('')
    .map(char => char.charCodeAt(0) - 96)
    .join('')
    .split('');

  for (let i = 0; i < k; i++)
    transformed = String(transformed.reduce((acc, cur) => acc + +cur, 0)).split('');

  return +transformed.join('');
};
