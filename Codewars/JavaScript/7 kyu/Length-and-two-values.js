function alternate(n, firstValue, secondValue) {
  const result = [];
  for (let i = 0; i < n; i++) result.push(i % 2 === 0 ? firstValue : secondValue);
  return result;
}
