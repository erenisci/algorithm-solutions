export const smaller = (nums: number[]): number[] => {
  const results: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let total = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) total++;
    }
    results.push(total);
  }
  return results;
};
