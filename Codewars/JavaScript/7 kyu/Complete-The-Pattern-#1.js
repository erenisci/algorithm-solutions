function pattern(n) {
  if (n < 1) return '';

  let result = '';
  for (let i = 1; i <= n; i++) {
    result += String(i).repeat(i);

    if (i < n) {
      result += '\n';
    }
  }

  return result;
}
