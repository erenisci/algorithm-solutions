// 485. Max Consecutive Ones
// https://leetcode.com/problems/max-consecutive-ones/

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
  let maxCons = 0,
    temp = 0;

  for (const num of nums) {
    if (num === 1) temp++;
    else temp = 0;
    maxCons = Math.max(maxCons, temp);
  }

  return maxCons;
};
