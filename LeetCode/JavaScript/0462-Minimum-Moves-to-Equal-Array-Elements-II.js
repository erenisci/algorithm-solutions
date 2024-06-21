// 462. Minimum Moves to Equal Array Elements II
// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii

/**
 * @param {number[]} nums
 * @return {number}
 */

var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  const length = nums.length;
  const median =
    length % 2 !== 0
      ? nums[Math.floor(length / 2)]
      : (nums[Math.floor(length / 2) - 1] + nums[Math.floor(length / 2)]) / 2;

  let minMove = 0;
  for (let num of nums) {
    minMove += Math.abs(median - num);
  }

  return minMove;
};
