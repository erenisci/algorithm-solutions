function firstToLast(str, c) {
  const first = str.indexOf(c),
    last = str.lastIndexOf(c);
  return first === -1 ? -1 : last - first;
}
