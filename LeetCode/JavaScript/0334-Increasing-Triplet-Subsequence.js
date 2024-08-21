// 334. Increasing Triplet Subsequence
// https://leetcode.com/problems/increasing-triplet-subsequence/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;

  for (let num of nums) {
    if (num <= first) first = num;
    else if (num <= second) second = num;
    else return true;
  }
  return false;
};
