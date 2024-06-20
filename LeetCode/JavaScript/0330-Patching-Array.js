// 330. Patching Array
// https://leetcode.com/problems/patching-array/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */

var minPatches = function (nums, n) {
  let patches = 0,
    sum = 0,
    i = 0;
  while (sum < n) {
    if (i < nums.length && nums[i] <= sum + 1) {
      sum += nums[i];
      i++;
    } else {
      sum += sum + 1;
      patches++;
    }
  }
  return patches;
};
