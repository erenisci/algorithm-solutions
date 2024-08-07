function nextId(ids) {
  const setIds = new Set(ids);

  for (let i = 0; i < setIds.size; i++) {
    if (!setIds.has(i)) return i;
  }

  return Math.max(...setIds) + 1;
}
