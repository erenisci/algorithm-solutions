function mostFrequentItemCount(collection) {
  const ht = {};
  let most = 0;
  for (let i = 0; i < collection.length; i++) {
    ht[collection[i]] = (ht[collection[i]] || 0) + 1;
    if (most < ht[collection[i]]) most = ht[collection[i]];
  }
  return most;
}
