// 944. Delete Columns to Make Sorted
// https://leetcode.com/problems/delete-columns-to-make-sorted/

/**
 * @param {string[]} strs
 * @return {number}
 */

var minDeletionSize = function (strs) {
  const rows = strs.length;
  const cols = strs[0].length;
  let deleteCount = 0;

  for (let col = 0; col < cols; col++) {
    for (let row = 1; row < rows; row++) {
      if (strs[row][col] < strs[row - 1][col]) {
        deleteCount++;
        break;
      }
    }
  }

  return deleteCount;
};
