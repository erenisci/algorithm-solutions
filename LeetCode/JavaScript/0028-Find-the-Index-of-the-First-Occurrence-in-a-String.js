// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;

  const maxLen = haystack.length;
  const minLen = needle.length;
  for (let i = 0; i < maxLen - minLen + 1; i++) {
    if (haystack.substring(i, i + minLen) === needle) return i;
  }

  return -1;
};
