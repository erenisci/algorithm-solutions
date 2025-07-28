function missingWord(nums, str) {
  nums = nums.sort((a, b) => a - b);
  const clean = str.replace(/\s/g, '');

  if (nums[nums.length - 1] >= clean.length) return 'No mission today';

  const arr = [];
  nums.map(num => {
    arr.push(clean[num]);
    return;
  });
  return arr.join('').toLowerCase();
}
