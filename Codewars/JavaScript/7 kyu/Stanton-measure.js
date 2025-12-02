function stantonMeasure(a) {
  const n = a.filter(x => x === 1).length;
  return a.filter(x => x === n).length;
}
