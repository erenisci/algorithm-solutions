function swapDiagonals(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    const tmp = matrix[i][i];
    matrix[i][i] = matrix[i][n - 1 - i];
    matrix[i][n - 1 - i] = tmp;
  }

  return matrix;
}
