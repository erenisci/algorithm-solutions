// 1299. Replace Elements with Greatest Element on Right Side
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

/**
 * @param {number[]} arr
 * @return {number[]}
 */

var replaceElements = function (arr) {
  let maxFromRight = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];
    arr[i] = maxFromRight;

    if (current > maxFromRight) {
      maxFromRight = current;
    }
  }

  return arr;
};
