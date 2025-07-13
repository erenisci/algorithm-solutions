function squares(x, n) {
  if (n <= 0) return [];

  const result = [];
  return Array.from({ length: n }, (_, i) => {
    return (result[i] = i === 0 ? x : result[i - 1] ** 2);
  });
}
