// 1679. Max Number of K-Sum Pairs
// https://leetcode.com/problems/max-number-of-k-sum-pairs/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxOperations = function (nums, k) {
  const ht = {};
  let c = 0;

  for (let num of nums) {
    const t = k - num;

    if (ht[t] > 0) {
      c++;
      ht[t]--;
    } else ht[num] = (ht[num] || 0) + 1;
  }
  return c;
};
