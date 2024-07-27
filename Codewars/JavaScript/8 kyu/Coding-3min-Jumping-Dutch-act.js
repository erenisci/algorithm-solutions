function sc(floor) {
  return floor > 6
    ? 'Aa~ '.repeat(floor - 1) + 'Pa!'
    : floor > 1
    ? 'Aa~ '.repeat(floor - 1) + 'Pa! Aa!'
    : '';
}
