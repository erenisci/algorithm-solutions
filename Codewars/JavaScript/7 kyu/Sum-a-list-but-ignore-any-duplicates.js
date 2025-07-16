function sumNoDuplicates(numList) {
  const dup = {};
  numList.forEach(num => {
    dup[num] = (dup[num] || 0) + 1;
  });

  return Object.keys(dup)
    .filter(key => dup[key] === 1)
    .reduce((sum, key) => sum + Number(key), 0);
}
