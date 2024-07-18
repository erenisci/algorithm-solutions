function findAverage(nums) {
  return nums.reduce((acc, cur) => acc + cur, 0) / nums.length;
}
