function skiponacci(n) {
  let a = 1;
  let b = 1;
  const result = [];

  for (let i = 0; i < n; i++) {
    let t = a;
    a = b;
    b = t + a;
    result.push(i % 2 == 0 ? t : 'skip');
  }
  return result.join(' ');
}
