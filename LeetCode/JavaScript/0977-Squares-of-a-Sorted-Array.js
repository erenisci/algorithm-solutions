// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function (nums) {
  const n = nums.length;
  const result = new Array(n);

  let left = 0;
  let right = n - 1;
  let pos = n - 1;

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[pos] = leftSquare;
      left++;
    } else {
      result[pos] = rightSquare;
      right--;
    }
    pos--;
  }

  return result;
};
