function crap(x, bags, cap) {
  const flattenArr = x.flat();
  if (flattenArr.includes('D')) return 'Dog!!';

  const capacity = bags * cap;
  return x.flat().reduce((acc, cur) => (cur === '@' ? acc + 1 : acc + 0), 0) <= capacity
    ? 'Clean'
    : 'Cr@p';
}
