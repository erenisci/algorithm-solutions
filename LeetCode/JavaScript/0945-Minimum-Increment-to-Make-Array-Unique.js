// 945. Minimum Increment to Make Array Unique
// https://leetcode.com/problems/minimum-increment-to-make-array-unique/

/**
 * @param {number[]} nums
 * @return {number}
 */

var minIncrementForUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let totalMove = 0,
    temp;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i + 1]++;
      totalMove++;
    }
    if (nums[i] > nums[i + 1]) {
      temp = nums[i + 1];
      nums[i + 1] = nums[i] + 1;
      totalMove += nums[i + 1] - temp;
    }
  }

  return totalMove;
};
