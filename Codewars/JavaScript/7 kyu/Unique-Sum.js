function uniqueSum(lst) {
  if (lst.length === 0) return null;

  const uniqueValues = new Set(lst);

  let sum = 0;
  for (const value of uniqueValues) {
    sum += value;
  }

  return sum;
}
