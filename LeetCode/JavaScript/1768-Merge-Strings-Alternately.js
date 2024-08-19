// 1768. Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/description/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
  let str = '',
    i = 0;
  let minLength = Math.min(word1.length, word2.length);
  while (minLength > 0) {
    str += word1[i];
    str += word2[i];
    i++;
    minLength--;
  }
  str += word1.substring(i) || word2.substring(i);
  return str;
};
