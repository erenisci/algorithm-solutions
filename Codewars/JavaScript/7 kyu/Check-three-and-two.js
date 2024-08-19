function checkThreeAndTwo(array) {
  const count = { a: 0, b: 0, c: 0 };

  for (const char of array) {
    if (char in count) count[char]++;
  }

  const values = Object.values(count);
  return values.includes(3) && values.includes(2);
}
