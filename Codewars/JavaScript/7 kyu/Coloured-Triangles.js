function triangle(row) {
  function getResult(color1, color2) {
    if (color1 === color2) return color1;
    if ((color1 === 'R' && color2 === 'G') || (color1 === 'G' && color2 === 'R')) return 'B';
    if ((color1 === 'R' && color2 === 'B') || (color1 === 'B' && color2 === 'R')) return 'G';
    if ((color1 === 'G' && color2 === 'B') || (color1 === 'B' && color2 === 'G')) return 'R';
  }

  while (row.length > 1) {
    let newRow = '';
    for (let i = 0; i < row.length - 1; i++) {
      newRow += getResult(row[i], row[i + 1]);
    }
    row = newRow;
  }

  return row;
}
