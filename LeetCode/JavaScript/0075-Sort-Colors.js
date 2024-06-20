// 75. Sort Colors
// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void}
 */

var sortColors = function (nums) {
  const numsLength = nums.length;
  const countingArray = Array(3).fill(0);
  for (let i = 0; i < numsLength; i++) countingArray[nums[i]]++;

  let i = 0,
    nextIndex = 0;
  while (i < numsLength) {
    if (countingArray[nextIndex] !== 0) {
      nums[i] = nextIndex;
      countingArray[nextIndex]--;
      i++;
    } else nextIndex++;
  }
};
