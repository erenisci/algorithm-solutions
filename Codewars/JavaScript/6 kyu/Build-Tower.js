function towerBuilder(nFloors) {
  const arr = [];
  let spaces = nFloors - 1;
  let stars = 1;

  for (let i = 0; i < nFloors; i++)
    arr.push(' '.repeat(spaces - i) + '*'.repeat(stars + i * 2) + ' '.repeat(spaces - i));

  return arr;
}
