function multiplicationTable(size) {
  let table = [];
  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}
