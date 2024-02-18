function maxSequence(arr) {
  let max = 0,
    curr = 0;
  for (const el of arr) {
    curr = Math.max(0, curr + el);
    max = Math.max(curr, max);
  }
  return max;
}
