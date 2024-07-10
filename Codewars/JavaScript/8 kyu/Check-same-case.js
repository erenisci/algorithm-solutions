function sameCase(a, b) {
  return !/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)
    ? -1
    : (a === a.toLowerCase()) === (b === b.toLowerCase())
    ? 1
    : 0;
}
