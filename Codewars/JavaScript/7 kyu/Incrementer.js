function incrementer(nums) {
  return nums.map((num, i) => (num + i + 1) % 10);
}
