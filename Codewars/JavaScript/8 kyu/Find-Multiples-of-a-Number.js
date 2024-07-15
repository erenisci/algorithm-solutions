function findMultiples(integer, limit) {
  let array = [];
  let int = integer;
  while (integer <= limit) {
    array.push(integer);
    integer += int;
  }
  return array;
}
