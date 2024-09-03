// 643. Maximum Average Subarray I
// https://leetcode.com/problems/maximum-average-subarray-i/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function (nums, k) {
  let avg = 0,
    l = 0,
    r = k - 1;
  for (let i = l; i <= r; i++) avg += nums[i];

  let t = avg;
  while (r !== nums.length - 1) {
    t = t - nums[l++];
    t = t + nums[++r];
    if (t > avg) avg = t;
  }

  return avg / k;
};
