// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const originalObj = {};
  const testObj = {};
  for (let i = 0; i < s.length; i++) {
    originalObj[s[i]] = (originalObj[s[i]] || 0) + 1;
    testObj[t[i]] = (testObj[t[i]] || 0) + 1;
  }

  for (const key in originalObj)
    if (originalObj[key] !== testObj[key]) return false;

  return true;
};
