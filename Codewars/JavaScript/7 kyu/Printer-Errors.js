function printerError(s) {
  return `${s.split('').reduce((acc, cur) => acc + (cur > 'm' ? 1 : 0), 0)}/${s.length}`;
}
