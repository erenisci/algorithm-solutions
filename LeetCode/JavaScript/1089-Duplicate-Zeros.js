// 1089. Duplicate Zeros
// https://leetcode.com/problems/duplicate-zeros/

/**
 * @param {number[]} arr
 * @return {void}
 */

var duplicateZeros = function (arr) {
  const n = arr.length;
  let zeroCount = 0;

  for (let i = 0; i < n; i++) if (arr[i] === 0) zeroCount++;

  let i = n - 1;
  let j = n + zeroCount - 1;

  while (i >= 0) {
    if (j < n) arr[j] = arr[i];

    if (arr[i] === 0) {
      j--;
      if (j < n) arr[j] = 0;
    }

    i--;
    j--;
  }
};
