// 345. Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const vowRes = [];
  let res = '';
  for (const char of s) if (vowels.includes(char)) vowRes.push(char);
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) res += vowRes.pop();
    else res += s[i];
  }
  return res;
};
