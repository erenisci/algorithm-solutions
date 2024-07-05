function deleteNth(arr, x) {
  const ht = {};
  return arr.filter(num => {
    ht[num] = (ht[num] || 0) + 1;
    return ht[num] <= x;
  });
}
