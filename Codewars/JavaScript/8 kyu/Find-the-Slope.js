function slope([x1, y1, x2, y2]) {
  let slope = (y2 - y1) / (x2 - x1);
  return Number.isFinite(slope) ? `${slope}` : 'undefined';
}
