// 1122. Relative Sort Array
// https://leetcode.com/problems/relative-sort-array/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

var relativeSortArray = function (arr1, arr2) {
  const countArray = new Array(arr2.length).fill(-1);
  const tempArray = [];
  for (const num of arr1) {
    if (arr2.includes(num)) {
      countArray[arr2.indexOf(num)]++;
    } else {
      tempArray.push(num);
    }
  }
  tempArray.sort((a, b) => a - b);

  const countArraySorted = [];
  let next = 0;
  for (let i = 0; i < arr1.length - tempArray.length; i++) {
    if (countArray[next] !== -1) {
      countArraySorted.push(arr2[next]);
      countArray[next]--;
    } else {
      next++;
      i--;
    }
  }

  return [...countArraySorted, ...tempArray];
};
