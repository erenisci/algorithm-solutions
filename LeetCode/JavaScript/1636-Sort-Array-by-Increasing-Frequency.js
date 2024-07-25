// 1636. Sort Array by Increasing Frequency
// https://leetcode.com/problems/sort-array-by-increasing-frequency/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var frequencySort = function (nums) {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = (hashTable[nums[i]] || 0) + 1;
  }

  return nums.sort((a, b) => (hashTable[a] === hashTable[b] ? b - a : hashTable[a] - hashTable[b]));
};
