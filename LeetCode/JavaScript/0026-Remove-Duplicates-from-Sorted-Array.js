// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
};
