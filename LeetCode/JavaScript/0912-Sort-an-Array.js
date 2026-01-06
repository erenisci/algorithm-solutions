// 912. Sort an Array
// https://leetcode.com/problems/sort-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function (nums) {
  const minEl = Math.min(...nums);
  const maxEl = Math.max(...nums);

  let count = new Array(maxEl - minEl + 1).fill(0);

  for (let n of nums) {
    count[n - minEl]++;
  }

  let j = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      nums[j] = i + minEl;
      count[i]--;
      j++;
    }
  }

  return nums;
};
