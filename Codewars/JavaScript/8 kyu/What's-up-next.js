function nextItem(xs, item) {
  let found = false;
  for (const x of xs) {
    if (found) return x;
    if (x === item) found = true;
  }
  return undefined;
}
