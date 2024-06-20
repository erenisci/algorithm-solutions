// 1. Two Sum
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let rep = {};
  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    if (rep[rest] >= 0) {
      return [i, rep[rest]];
    }
    rep[nums[i]] = i;
  }
};
