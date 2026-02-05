function solve(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const result = [];

  let left = 0;
  let right = sorted.length - 1;

  while (left <= right) {
    if (left !== right) {
      result.push(sorted[right--]);
      result.push(sorted[left++]);
    } else {
      result.push(sorted[right]);
      break;
    }
  }

  return result;
}
