function remove(s, n) {
  while (n > 0) {
    if (s.indexOf('!') === -1) break;
    s = s.replace(/!/, '');
    n--;
  }
  return s;
}
