function partlist(arr) {
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    const part1 = arr.slice(0, i).join(' ');
    const part2 = arr.slice(i).join(' ');
    result.push([part1, part2]);
  }
  return result;
}
