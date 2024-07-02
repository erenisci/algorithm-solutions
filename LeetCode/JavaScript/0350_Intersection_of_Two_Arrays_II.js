// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
  const filteredArray = nums1.filter(num => {
    if (nums2.includes(num)) {
      nums2.splice(nums2.indexOf(num), 1);
      return true;
    }
    return false;
  });
  return filteredArray;
};
