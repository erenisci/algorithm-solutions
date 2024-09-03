function repeats(arr) {
  const ht = {};
  arr.forEach(num => (ht[num] = (ht[num] || 0) + 1));
  return Object.keys(ht).reduce((acc, cur) => acc + (ht[cur] === 1 ? +cur : 0), 0);
}
