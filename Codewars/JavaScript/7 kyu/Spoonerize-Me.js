function spoonerize(words) {
  const [a, b] = words.split(' ');

  return b[0] + a.slice(1) + ' ' + a[0] + b.slice(1);
}
