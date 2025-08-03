function solve(n) {
  const banknotes = [500, 200, 100, 50, 20, 10];
  let result = 0;

  for (const note of banknotes) {
    const count = Math.floor(n / note);
    result += count;
    n %= note;
  }

  return n === 0 ? result : -1;
}
