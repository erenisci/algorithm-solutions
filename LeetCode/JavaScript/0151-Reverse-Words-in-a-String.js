// 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/description/

/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  const resultArr = [];
  let str = '';

  for (const char of s) {
    if (char === ' ') {
      if (!str) continue;
      resultArr.push(str);
      str = '';
    } else str += char;
  }
  if (str) resultArr.push(str);

  let result = '';
  for (let i = resultArr.length - 1; i >= 0; i--) {
    if (!i) {
      result += resultArr[i];
    } else result += resultArr[i] + ' ';
  }

  return result;
};
