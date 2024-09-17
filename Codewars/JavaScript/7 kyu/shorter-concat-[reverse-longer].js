function shorterReverseLonger(a, b) {
  if (a.length === b.length) return b + a.split('').reverse().join('') + b;
  else {
    const shorter = a.length < b.length ? a : b;
    const longer = a.length > b.length ? a : b;
    return shorter + longer.split('').reverse().join('') + shorter;
  }
}
