function dbSort(a) {
  const nums = a.filter(v => typeof v === 'number');
  const strs = a.filter(v => typeof v === 'string');

  nums.sort((a, b) => a - b);

  strs.sort();

  return [...nums, ...strs];
}
