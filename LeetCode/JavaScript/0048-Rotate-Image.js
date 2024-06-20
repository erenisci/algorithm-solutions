// 48. Rotate Image
// https://leetcode.com/problems/rotate-image

/**
 * @param {number[][]} matrix
 * @return {void}
 */

var rotate = function (matrix) {
  let first = 0,
    last = matrix.length - 1,
    temp;

  while (first < last) {
    for (let i = 0; i < last - first; i++) {
      temp = matrix[first][first + i];
      matrix[first][first + i] = matrix[last - i][first];
      matrix[last - i][first] = matrix[last][last - i];
      matrix[last][last - i] = matrix[first + i][last];
      matrix[first + i][last] = temp;
    }
    first++;
    last--;
  }

  return matrix;
};
