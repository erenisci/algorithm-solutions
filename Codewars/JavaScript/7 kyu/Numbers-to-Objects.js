function numObj(s) {
  return s.map(num => ({
    [String(num)]: String.fromCharCode(num),
  }));
}
