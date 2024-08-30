// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let maxProduct = 0;

  while (left < right) {
    let tempProduct = Math.min(height[left], height[right]) * (right - left);
    if (maxProduct < tempProduct) maxProduct = tempProduct;
    if (height[left] < height[right]) left++;
    else right--;
  }

  return maxProduct;
};
