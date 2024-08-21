function missingNo(nums) {
  const totalSum = (100 * 101) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return totalSum - actualSum;
}
