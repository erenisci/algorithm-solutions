function bubblesortOnce(a) {
  const b = a.slice();
  for (let i = 0; i < 1; i++)
    for (let j = 0; j < b.length; j++)
      if (b[j] >= b[j + 1]) {
        const temp = b[j];
        b[j] = b[j + 1];
        b[j + 1] = temp;
      }
  return b;
}
