// 136. Single Number
// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) index ^= nums[i];
  return index;
};
